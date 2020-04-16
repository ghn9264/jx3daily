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
