const axios = require('axios')

 async function getachievement(key) {

    return new Promise(async(resolve,reject)=>{
        let aid;
        let result={pic:[],contents:''};
        await axios.get('https://helper.jx3box.com/api/achievement/search/', { params: { page: 1, keyword: key } }).then((res) => {
            console.log(res.data.achievements[0].ID);
            aid = res.data.achievements[0].ID
            
        })
        await axios.get('https://helper.jx3box.com/api/achievement/' + aid + '/posts').then((res) => {
           // console.log(res.data.data.posts[0].content);
            let str = res.data.posts[0].content
            var imgReg = /<img.*?(?:>|\/>)/gi;
            var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var arr = str.match(imgReg);  // arr 为包含所有img标签的数组
            if (arr) {
                for (var i = 0; i < arr.length; i++) {
                    var src = arr[i].match(srcReg);
                    src.splice(0,1)
                    result.pic.push(src[0])
                    //获取图片地址
                    console.log('图片地址' + (i + 1) + '：' + src[0]);
                }
            }
            str = str.replace(/<br\s*.?>/g,'\n')
            var dd=str.replace(/<[^>]+>/g,"")
            var dds=dd.replace(/&nbsp;/ig,"");
            result.contents = dds
            resolve(result)
            console.log(dds);
        }).catch(res=>{
            reject(res)
        })
    })
    
}
module.exports = getachievement

