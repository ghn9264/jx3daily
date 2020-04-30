const jjc =require('./jjc') ;
const ModelDb = require('./db')
const CQHttp = require('cqhttp');
const bot = new CQHttp({
    apiRoot: 'http://127.0.0.1:5700/',
});
module.exports= async function (data) {

    //let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
    //let fn = "战场 竞技场"//攒人品 收徒 传功 养马 摸宠 钓鱼 刷挂件 奇遇 劫镖 炸烟花 撩情缘 福星高照 抓马 许愿 截图 买买买 护镖 巡山 大战 跑商 抄书 采集 看风景 摸玄晶 科举
    //判断消息来源决定功能
    if (data.group_id) {
        let red = 0;
        let blue = 0;
        let qqsred = [];
        let qqsblue = [];
        let str = data.raw_message
        if (str.includes("签到完成")) {
            let str = data.raw_message
            let a = str.split(" ")
            let qq = a[0].replace(/[^0-9]/ig, "");
            let zl = a[3].replace(/[^0-9]/ig, "");
            let fn = [a[3].split("：")[1], a[4]]
            let obj = {
                cardname: '',
                qq: qq,
                record: 0,
                daily: false,//是否完成日常
                signin: false,//是否注册
                specialjjcrate: 0,//jjc胜率加成点
                jjcrate: 50,//jjc基础点
                specialqyrate: 0,//奇遇点加成点
                qyrate: 0.5,//其余基础点
                specialmcrate: 0,//摸宠加成点
                mcrate: 0.5,//摸宠基础点
                knowleage: 0,//智慧值
                sect: '',//门派
            }
            //计算运势加成
            for (let i = 0; i < fn.length; i++) {
                //签到对应加成进行
                switch (fn[i]) {
                    case "竞技场":
                        obj.specialjjcrate = 5
                        break;
                    default:
                        break;
                }
            }
            if (data.self_id == 1587399417) {
                //注册流程
                //搜索数据库中是否包含有qq，若有，更新资历，对应运势加成数据，若没有，添加新样本，并发消息请求注册本职业。
                let userdata = await ModelDb.findByqq(qq)
                if (userdata) {
                    userdata.record = userdata.record + zl
                    await ModelDb.update(userdata._id, userdata)
                } else {
                    await ModelDb.res(obj)
                }
            }
        }
        if (str.includes("本职业|")) {
            //if (data.sender.userid == 1577399417) {
                let sect = str.split("|")[1]
                let userdata = await ModelDb.findByqq(data.user_id)
                userdata.sect = sect
                userdata.cardname = data.sender.card
                await ModelDb.update(userdata.id, userdata)
            //}
        }
        if (str.includes("加入竞技场红方")) {
            //截取字符串，计算三个qq，并将qq添加到数组，数组长度小于3提示人数不对，只能三人参加。足三个标记红方ready:1，遍历自身数组，检查是否对方数组中存在，若存在，提示@qq已经在对方队伍了，请找其他人。若不存在判断对方ready，满足1则开始，不满足则发消息，报名成功，正在为您匹配对手……。

            str.split(" ").forEach(element => {
                if (element.replace(/[^0-9]/ig, "")) {
                    qqsred.push(element.replace(/[^0-9]/ig, ""))
                }
            });
            if (qqsred.length != 3 && qqsred.length > 0) {
                await bot('send_group_msg', { group_id: data.group_id, message: "人数不正确，只能三人参加同一方队伍" })
            } else if (qqsred.length == 3) {
                red = 1;
                for (let i = 0; i < qqsred.length; i++) {
                    if (arrIndex(qqsblue, qqsred[i]) > 0) {
                        await bot('send_group_msg', { group_id: data.group_id, message: "[CQ:at,qq=" + qqsred[i] + "]已经在对方队伍了，你就不能换个大腿抱吗？" })
                    }
                }
                if (blue == 1) {
                    await bot('send_group_msg', { group_id: data.group_id, message: "战斗即将开始" })
                    jjc(qqsred,qqsblue)
                    red = 0
                    blue = 0
                    qqsred = [];
                    qqsblue = [];
                } else {
                    await bot('send_group_msg', { group_id: data.group_id, message: "报名成功,等待对方选手入场……" })
                }
            }

        }
        if (str.includes("加入竞技场蓝")) {
            str.split(" ").forEach(element => {
                if (element.replace(/[^0-9]/ig, "")) {
                    qqsblue.push(element.replace(/[^0-9]/ig, ""))
                }
            });
            if (qqsblue.length != 3 && qqs.length > 0) {
                await bot('send_group_msg', { group_id: data.group_id, message: "人数不正确，只能三人参加同一方队伍" })
            } else if (qqsblue.length == 3) {
                blue = 1;
                for (let i = 0; i < qqsblue.length; i++) {
                    if (arrIndex(qqsred, qqsblue[i]) > 0) {
                        await bot('send_group_msg', { group_id: data.group_id, message: "[CQ:at,qq=" + qqsblue[i] + "]已经在对方队伍了，你就不能换个大腿抱吗？" })
                    }
                }
                if (red == 1) {
                    await bot('send_group_msg', { group_id: data.group_id, message: "战斗即将开始" })
                    jjc(qqsred,qqsblue)
                    red = 0
                    blue = 0
                    qqsred = [];
                    qqsblue = [];
                } else {
                    await bot('send_group_msg', { group_id: data.group_id, message: "报名成功,等待对方选手入场……" })
                }
            }

        }
    }
}



function arrIndex(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            return i;
        }
    }
    return -1;
}