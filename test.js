// const axios = require('axios')
// const CQHttp = require('cqhttp');
// let data = [{
//     "type": "text",
//     "data": { "text": "这是\n第一段" }
// },
// {
//     "type": "image",
//     "data": {
//         "file": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618084319,1203767735&fm=26&gp=0.jpg",
//     }
// },{
//     "type": "face",
//     "data": {
//         "id": "99"
//     }
// }]
// const bot = new CQHttp({
//     apiRoot: 'http://127.0.0.1:5700/',
// });

// bot('send_group_msg', { group_id: 1093354528, message: data })

//bot.listen(8080, '127.0.0.1');
// axios.post('http://127.0.0.1:5700/send_private_msg', { data: { "user_id": 378051523, "message": data } }).then(res => {
//     console.log(res.data);

// })
// let str = "<br>123<br>"
// str = str.replace(/<br\s*.?>/g,'/n')
// console.log(str);
let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
let qq;
let ys1;
let ys2;
let a = str.split(' ')
console.log(a);
qq = a[0].replace(/[^0-9]/ig,"");
console.log(qq);
ys1 = a[3].split("：")[1]
ys2 = a[4]
console.log(ys1,ys2);

