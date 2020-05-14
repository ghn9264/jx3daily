//发消息，双方准备就绪，战斗开始。
//计算红方胜点数
//1、遍历三个qq，获得基本信息储存，获取个人基础值+所有特殊加成，累加得出红方总数。
//2、遍历三个qq，获得基本信息储存，获取个人基础值+所有特殊加成，累加得出蓝方总数。
//3、蓝方总数与红方总数比大小
//4、根据胜方三位的本职业属性，组合结束语：个人门派特色，配合个人门派特色，击杀了慌了神的随机对方，本方胜利。
//5、发消息
const CQHttp = require('cqhttp');
const utils = require('./util')
const fs = require('fs')
const bot = new CQHttp({
    apiRoot: 'http://127.0.0.1:5700/',
});
const ModelDb = require('./db')
module.exports= async function (qqsred, qqsblue) {
    let reddata = []
    let bluedata = []
    let arr = new Array(["相知", "补天", "离经", "云裳"]);
    let red = 0;
    let blue = 0;
    let redfen = 0;
    let bluefen = 0;
    let redzh=[]
    let bluezh=[]
    let redskills=[]
    let blueskills=[]
    fs.writeFileSync('whitelist.json',[qqsred,qqsblue])
    for (let i = 0; i < qqsred.length; i++) {
        let userdata = await ModelDb.findByqq(qqsred[i])
        reddata.push(userdata)
        redzh.push(userdata.sect)
        if (utils.IsInArray(arr, userdata.sect)) {
            if (red > 0) {
                red = red - 20
            }
            red = red + 10
        }
        let skills = await ModelDb.querybysect(userdata.sect)
        await bot('send_private_msg', { user_id: qqsred[i], message: '请选择使用的技能'+skills[0]+' '+skills[1]+' '+skills[2]+',用空格分隔'})
        redfen = redfen + userdata.specialjjcrate
    }
    for (let i = 0; i < qqsblue.length; i++) {
        let userdata = await ModelDb.findByqq(qqsblue[i])
        bluedata.push(userdata)
        bluezh.push(userdata.sect)
        if (utils.IsInArray(arr, userdata.sect)) {
            if (blue > 0) {
                blue = blue - 20
            }
            blue = blue + 10
        }
        let skills = await ModelDb.querybysect(userdata.sect)
        await bot('send_private_msg', { user_id: qqsred[i], message: '请选择使用的技能'+skills[0]+' '+skills[1]+' '+skills[2]+',用空格分隔'})
        bluefen = bluefen  + userdata.specialjjcrate
    }
    //


}


