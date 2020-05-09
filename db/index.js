// db/index.js
const mongoose = require('./db')
const Schema = mongoose.Schema;

const jx3userDb = new Schema({
  cardname: String,
  qq: Number,
  record: Number,
  daily: Boolean,//是否完成日常
  signin: Boolean,//是否注册
  specialjjcrate: Number,//jjc胜率加成点
  jjcrate: Number,//jjc基础点
  specialqyrate: Number,//奇遇点加成点
  qyrate: Number,//其余基础点
  specialmcrate: Number,//摸宠加成点
  mcrate: Number,//摸宠基础点
  knowleage: Number,//智慧值
  sect: String//门派
});

const skillDb = new Schema({
  skillname:String,
  sect:String,
  innate:String,
  ratio:{kz:Number,yd:Number,fy:Number,sh:Number,my:Number},
})
const skillModel = mongoose.model('skilldb', skillDb);
const jx3Model = mongoose.model('jx3userdb', jx3userDb);

class Mongodb {
  constructor() {

  }
  //条件查询
  findByqq(qq) {
    return new Promise((resolve, reject) => {
      jx3Model.findOne({qq:qq}, (err, res) => {
        if (err) {

          reject(err)
        }

        resolve(res)
      })
    })
  }
  // 查询
  query() {
    return new Promise((resolve, reject) => {
      jx3Model.find( (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
    // 查询
    querybysect(sect) {
      return new Promise((resolve, reject) => {
        skillModel.find({sect:sect} ,(err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
      })
    }
        // 查询
        querybyinnate(innate) {
          return new Promise((resolve, reject) => {
            skillModel.find({innate:innate} ,(err, res) => {
              if (err) {
                reject(err)
              }
              resolve(res)
            })
          })
        }
                // 查询
                querybyskill(skillname) {
                  return new Promise((resolve, reject) => {
                    skillModel.findOne({skillname:skillname} ,(err, res) => {
                      if (err) {
                        reject(err)
                      }
                      resolve(res)
                    })
                  })
                }
  // 查询
  // isExist(qq) {
  //   return new Promise((resolve, reject) => {
  //     jx3Model.findOne({ 'qq': qq }, (err, res) => {
  //       if (err) {
  //         console.log("isExist-err\n" + err);

  //         reject(false)
  //       }
  //       console.log("isExist-res\n" + res);

  //       resolve(res)
  //     })
  //   })
  // }
  //更新
  update(id, userdata) {
    return new Promise((resolve, reject) => {
      jx3Model.findByIdAndUpdate(id, { $set: { cardname:userdata.cardname,sect:userdata.sect } },(err, res) => {
        if (err) {
          reject(err)
          console.log("更新失败")
        }
        resolve(res)
        console.log("更新成功")
      })
    })
  }
  //
  importdata(data){
    const s = new skillModel(data)
    return new Promise((resolve, reject) => {
      s.save((err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
        console.log("导入成功")
      })
    })
  }
  // 注册
  res(obj) {
    const m = new jx3Model(obj)
    return new Promise((resolve, reject) => {
      m.save((err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
        console.log("注册成功")
      })
    })


 }

}
module.exports = new Mongodb()