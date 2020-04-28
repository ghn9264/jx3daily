let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
let fn = "战场 竞技场"//攒人品 收徒 传功 养马 摸宠 钓鱼 刷挂件 奇遇 劫镖 炸烟花 撩情缘 福星高照 抓马 许愿 截图 买买买 护镖 巡山 大战 跑商 抄书 采集 看风景 摸玄晶 科举
let str2;
let ys1;
let a = str.split(" ")
let qq = a[0].replace(/[^0-9]/ig,"");

fn = fn.split(" ")

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log(random(0, fn.length));
ys1 = fn[random(0, fn.length)]
console.log(ys1);


//签到对应加成进行
switch (ys1) {
    case "战场":
        console.log("战场");
        break;
    case "竞技场":
        console.log("竞技场");
        break;
    default:
        break;
}

//判断消息来源决定功能
if (data.group_id) {
    if (str.includes("签到完成")) {
        if(data.sender.userid=="123123123"){
            console.log("执行签到流程");
        }
    }
    if (str.includes("本职业|")) {
        if(data.sender.userid=="123123123"){
            console.log("执行签到流程");
        }
    }
    if (str.includes("加入竞技场红方")) {
        //截取字符串，计算三个qq，并将qq添加到数组，数组长度小于3提示人数不对，只能三人参加。足三个标记红方ready:1，遍历自身数组，检查是否对方数组中存在，若存在，提示@qq已经在对方队伍了，请找其他人。若不存在判断对方ready，满足1则开始，不满足则发消息，报名成功，正在为您匹配对手……。

        console.log("执行jjc流程");
    }
    if (str.includes("加入竞技场蓝")) {

        console.log("执行jjc流程");
    }
}