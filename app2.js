const CQHttp = require('cqhttp');
const axios = require('axios')
const getcj = require('./getcj')

const bot = new CQHttp({
    apiRoot: 'http://127.0.0.1:5700/',
});

bot.on('message', async context => {
    console.log(context);
    if (context.group_id&&context.raw_message.split(' ')[1]=="成就") {
        let keyword = context.raw_message.split(' ')[2]
        resmsg = await getcj(keyword)
        await bot('send_group_msg', {
            ...context,
            group_id:1093354528,
            message: resmsg
        });
    }
    
});

bot.listen(8080, '127.0.0.1');