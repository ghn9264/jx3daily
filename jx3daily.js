let str = "[CQ:at,qq=441550253] \r\n[CQ:image,file=8AE48CCAE34120C2580E11149053C29A.jpg]\r\n本群第3位 签到完成\r\n排名：9161\r\n资历 +10\r\n运势：大战 攒人品"
let qq;
let ys1;//运势：摸玄晶 科举 大战 攒人品 收徒 传功 养马 竞技场 摸宠 钓鱼 刷挂件 奇遇 劫镖 炸烟花 撩情缘 福星高照 抓马 许愿 截图 买买买 护镖 巡山 大战 战场 跑商 抄书 采集 看风景 
let ys2;
let a = str.split(' ')
console.log(a);
qq = a[0].replace(/[^0-9]/ig,"");
console.log(qq);
ys1 = a[3].split("：")[1]
ys2 = a[4]
console.log(ys1,ys2);