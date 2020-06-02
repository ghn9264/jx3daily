// const axios = require('axios')
// const CQHttp = require('cqhttp');
const fs = require("fs");
const ModelDb = require("./db");
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
// let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
// let qq;
// let ys1;
// let ys2;
// let a = str.split(' ')
// console.log(a);
// qq = a[0].replace(/[^0-9]/ig,"");
// console.log(qq);
// ys1 = a[3].split("：")[1]
// ys2 = a[4]
// console.log(ys1,ys2);
// let str = "本职业|明教"
// if (str.includes("本职业|")) {
//     console.log("123");
<<<<<<< HEAD
    
// }else{
//     console.log(str.includes("本职业|"));
    
// }
let cheerio = require("cheerio")
let axios = require('axios')
let qs = require('qs')
async function a() {
    const html = await axios.get("http://hua.arkwish.com/")
    $ = cheerio.load(html.data);
 //   console.log(html);
//    console.log($.html);
 //   console.log($('div[class=title]').html());
    
//  console.log($('input[name=random]').val());
//  console.log($('input[name=token]').val());
    let data = {'server':'破阵子','flower':'百合','random':$('input[name=random]').val(),'token':$('input[name=token]').val()}
    const htmlfinal = await axios.post("http://hua.arkwish.com/",qs.stringify(data))
    console.log(htmlfinal);
    
    $ = cheerio.load(htmlfinal.data);
    let res = $('tbody[class=tb]').html()
    res = eval('"' + res.replace(/&#x(.{4});/g,"\\u$1") + '"')
        console.log($('tbody[class=tb]').html());
        console.log(res);
        console.log($('.tb').find('td')[0].children[0].data);
        console.log($('.tb').find('td')[1].children[0].data);
        console.log($('.tb').find('td')[4].children[0].data);

        console.log($('.tb').find('td')[5].children[0].data);
        console.log($('.tb').find('td')[6].children[0].data);
        console.log($('.tb').find('td')[9].children[0].data);
=======

// }else{
//     console.log(str.includes("本职业|"));

// }
async function n() {
  // let data = fs.readFileSync('skill.json','utf8')
  // data = JSON.parse(data)
  // data.forEach(element => {
  //     ModelDb.importdata(element)
  // });
  //    let a = await ModelDb.querybysect("明教")
  let red = ["焚影", "紫霞", "补天"];
  let redskills = ["缴械", "流光", "镇山河", "六合独尊", "千蝶", "女娲"];
  let reddata = []; //[{xs:1,asd:3}]
  let redzongfen = { kz: 0, yd: 0, fy: 0, sh: 0, my: 0 };
  let redzongfenarr = [];
  let redresult = 0;
  let blue = ["问水", "傲血", "云裳"];
  let blueskills = ["风来吴山", "虎跑", "守如山", "疾", "王母", "蝶弄足"];
  let bluedata = [];
  let bluezongfen = { kz: 0, yd: 0, fy: 0, sh: 0, my: 0 };
  let bluezongfenarr = [];
  let blueresult = 0;
  for (let index = 0; index < redskills.length; index++) {
    let x = await ModelDb.querybyskill(redskills[index]);
    reddata.push(x.ratio);
  }
  reddata.forEach((element) => {
    redzongfen.kz += element.kz;
    redzongfen.yd += element.yd;
    redzongfen.fy += element.fy;
    redzongfen.sh += element.sh;
    redzongfen.my += element.my;
  });

  for (let index = 0; index < blueskills.length; index++) {
    let x = await ModelDb.querybyskill(blueskills[index]);
    bluedata.push(x.ratio);
  }
  bluedata.forEach((element) => {
    bluezongfen.kz += element.kz;
    bluezongfen.yd += element.yd;
    bluezongfen.fy += element.fy;
    bluezongfen.sh += element.sh;
    bluezongfen.my += element.my;
  });
  

  redzongfenarr = Object.values(redzongfen)
  bluezongfenarr = Object.values(bluezongfen);
  let redzongfenarrtemp = []
  console.log(redzongfen, bluezongfen);
  for (let i = 0; i < redzongfenarr.length; i++) {
    if (i==4) {
      if (redzongfenarr[i]>bluezongfenarr[0]) {
        redzongfenarrtemp[i]=redzongfenarr[i]-bluezongfenarr[0]
      }else{
        redzongfenarrtemp[i]=0
      }
      break
    }
    if (redzongfenarr[i]>bluezongfenarr[i+1]) {
      redzongfenarrtemp[i]=redzongfenarr[i]-bluezongfenarr[i+1]
    }else{
      redzongfenarrtemp[i]=0
    }
  }
  for (let i = 0; i < bluezongfenarr.length; i++) {
    if (i==4) {
      if (bluezongfenarr[i]>redzongfenarr[0]) {
        bluezongfenarr[i]=bluezongfenarr[i]-redzongfenarr[0]
      }else{
        bluezongfenarr[i]=0
      }
      break
    }
    if (bluezongfenarr[i]>redzongfenarr[i+1]) {
      bluezongfenarr[i]=bluezongfenarr[i]-redzongfenarr[i+1]
    }else{
      bluezongfenarr[i]=0
    }
  }
  // redzongfen.yd= redzongfen.yd*0.8
  // bluezongfen.yd=bluezongfen.yd*0.8
  // redzongfen.sh =redzongfen.sh*1.1
  // bluezongfen.sh =bluezongfen.sh*1.1
  redresult =sum(redzongfenarrtemp)
  blueresult =sum(bluezongfenarr)
  console.log(redresult, blueresult);
  if (redsult>bluesult) {
    
  }else{
    
  }
}

n();

function varianceArr(arr) {
  let s,
    ave,
    sum = 0,
    sums = 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += Number(arr[i]);
  }
  ave = sum / len;
  for (let i = 0; i < len; i++) {
    sums += (Number(arr[i]) - ave) * (Number(arr[i]) - ave);
  }
  s = (sums / len).toFixed(4);
  return s;
}
function sum(arr) {
  return arr.reduce(function(prev, curr, idx, arr){
    return prev + curr;
  });
>>>>>>> 12005358c25d3b86b39bd59348d28a8b78d3f362
}
a()

