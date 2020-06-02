<<<<<<< HEAD
# AI_Tencent
腾讯ai nodejs版SDK 
图片OCR识别 语音识别 机器翻译 人脸识别

[腾讯AI开放平台](https://ai.qq.com/)

## 使用方法

> npm i

> node app.js

## 获取签名示例代码
```javascript
const md5 = require('md5');
//获取签名
function getReqSign(params, appkey) {
  let sortParams = jsonSort(params);
  let str = "";
  for (const key in sortParams) {
    if (sortParams[key]) {
      str = str + key + "=" + encodeURI(sortParams[key]) + "&"
    }
  }
  str = str + "app_key=" + appkey;
  let sign = md5(str).toUpperCase();
  return sign
}

//key升序
function jsonSort(jsonData) {
  try {
    let tempJsonObj = {};
    let sdic = Object.keys(jsonData).sort();
    sdic.map((item, index) => {
      tempJsonObj[item] = jsonData[sdic[index]]
    })
    return tempJsonObj;
  } catch (e) {
    return jsonData;
  }
}
//传参测试
let params = {
  app_id: "10000",
  key1: "腾讯AI开放平台",
  key2: "示例仅供参考",
  nonce_str: "20e3408a79",
  time_stamp: "1493449657",
}
let appkey = 'a95eceb1ac8c24ee28b70f7dbba912bf';
console.log(getReqSign(params, appkey));
```
#打本不行吃鸡菜，竞技场里十连败，装备三万拓印仔，痴心妄想谈恋爱
#我上线是来看你们出奇遇的？？
#包里的东西太多？没事，都交我保管，一样不还#鄙视#差劲
#
=======
# 数据说明
## 功能数据
> 攒人品 收徒 传功 养马 摸宠 钓鱼 刷挂件 奇遇 劫镖 炸烟花 撩情缘 福星高照 抓马 许愿 截图 买买买 护镖 巡山 大战 跑商 抄书 采集 看风景 摸玄晶 科举 战场 竞技场

伤害 移动 防御 免疫 控制

控制->移动->防御->伤害->免疫->控制     流光                 6 10 0 10 14         0 2 13 5 20         6+2 10+13 0+5 10+20 14+0 
1     10    0     0    9     0 

控制->移动->防御->伤害->免疫->控制     破重围 
5     0     0     10   5     0

控制->移动->防御->伤害->免疫->控制     隐刀 
0     5     0     5    10    0

控制->移动->防御->伤害->免疫->控制     女娲补天 
0    -3     13    0    10    0



（控制-减益+增益）=6-20+2=-14
（移动-减益+增益）=10-0+13=23
0-2+5 = 3
10-13+20 = 23
14-5+0=9
=72

0-14+10=-4
2-4+0=-2
13-10+10=13
5-0+5=10
20-10+6 = 16
=33

1-10-3=-12
10-0+13=23
0+3--0=3
0-13+10=-3
9-0+0=9
=44

0-9+10=1
-3-1+0=-4
13-10+0=3
0-0+9=9
10-0+1=11
=20

 
>>>>>>> 12005358c25d3b86b39bd59348d28a8b78d3f362
