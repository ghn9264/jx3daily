let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
let fn = "战场 竞技场"//攒人品 收徒 传功 养马 摸宠 钓鱼 刷挂件 奇遇 劫镖 炸烟花 撩情缘 福星高照 抓马 许愿 截图 买买买 护镖 巡山 大战 跑商 抄书 采集 看风景 摸玄晶 科举
let str2;
let ys1;

fn = fn.split(" ")

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log(random(0, fn.length));
ys1 = fn[random(0, fn.length)]
console.log(ys1);



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
        console.log("执行签到流程");
    }
    if (condition) {
        
    }
}