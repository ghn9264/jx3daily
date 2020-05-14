let redwin = "蓝方屡败屡战，江湖知上终究会有你们的传说。"
let bluewin = "红方诸位武学有待磨练。"
if (red + redfen > blue + bluefen) {
    if (red + redfen > utils.randomNum(1, 300)) {
        await bot('send_group_msg', { group_id: data.group_id, message: redwin })
    }

} else {
    if (blue + bluefen > utils.randomNum(1, 300)) {
        await bot('send_group_msg', { group_id: data.group_id, message: bluewin })
    }
}



