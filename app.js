const Koa = require('koa')
const http = require("./http");
//const axios = require('axios')
var bodyParser = require('koa-bodyparser');
const CQHttp = require('cqhttp');
const ModelDb = require('./db')
const getcj = require('./getcj')
const choosefn =require('./choosefn') ;
const app = new Koa();
const bot = new CQHttp({
    apiRoot: 'http://127.0.0.1:5700/',
});


app.use(bodyParser());
app.use(async (ctx, next) => {
    //console.log(ctx)
    console.log(ctx.request.body)
    const data = ctx.request.body

    
    let resmsg;
    let resarrmsg=[];
    // console.log(ctx.res)
    //  console.log(ctx.socket)
    if (data.raw_message) {
        choosefn(data)
        // let mgdata = {
        //     "title":data.group_id,
        //     'body': JSON.stringify(data),
        //     'date': '2020-1'
        // }
        // await ModelDb.save(mgdata)
        // let mgdata2 = await ModelDb.query()
        // console.log(mgdata2);
        console.log('====================================');
        console.log(data.raw_message.indexOf("鸡小璇"));
        console.log('====================================');
        if (data.raw_message.split(' ').length > 2) {
            //console.log(data.raw_message.split(' '));
            if (data.raw_message.split(' ')[1]=="成就") {
                resmsg =await getcj(data.raw_message.split(' ')[2])
            }
                
            //    console.log(resmsg);                    
        } 
        else {
            if (data.raw_message.indexOf("鸡小璇") > 0) {
                resmsg = await chat(data.raw_message)
            }
        }
    }
    await next();
    //let url = 'http://127.0.0.1:5700/send_group_msg'
    //await axios.get(url,{params:{ group_id: data.group_id, message: resmsg }} )
    if (data.raw_message) {
        if (data.raw_message.split(' ').length > 2) {
            if (data.raw_message.split(' ')[1]=="成就") {
                resarrmsg.push({"type":'text',"data":{"text":resmsg.contents}})
                for (let index = 0; index < resmsg.pic.length; index++) {
                    let item = {"type":"image","data":{"file":resmsg.pic[index]}}
                    resarrmsg.push(item)
                }
                await bot('send_group_msg_async', { group_id: data.group_id, message: resarrmsg })
            }
            
        }
        else{
            if (data.raw_message.indexOf("鸡小璇") > 0) {
                await bot('send_group_msg', { group_id: data.group_id, message: resmsg })
            }
        }
    }

    
});

function chat(msg) {
    return new Promise((resolve, reject) => {
        http.post('/nlp/nlp_textchat ', {
            session: 'text',
            question: msg,
        })
            .then(data => {
                console.log(data);
                resolve(data.data.answer)
            })
            .catch(err => { });
    })

}

app.listen(8080);