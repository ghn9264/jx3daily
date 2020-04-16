// db/index.js
const mongoose = require('./db')
const Schema = mongoose.Schema;

const ceshiSchema = new Schema({
  title: String,
  body: String,
  date: Date
});
const jx3userDb = new Schema({
    cardname: String,
    qq: String,
    record: Number,
    daily:Boolean,
    signin:Boolean,
    specialjjcrate:Number,
    jjcrate:Number,
    specialqyrate:Number,
    qyrate:Number,
    specialmcrate:Number,
    mcrate:Number,
    knowleage:Number
  });

const MyModel = mongoose.model('ceshi', ceshiSchema);


class Mongodb {
  constructor () {

  }
// 查询
  query () {
     return new Promise((resolve, reject) => {
       MyModel.find({}, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
// 保存
  save (obj) {
     const m = new MyModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
module.exports = new Mongodb()