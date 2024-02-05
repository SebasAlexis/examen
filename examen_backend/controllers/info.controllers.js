// backend/controllers/infoController.js
const Info = require('../models/info');
const infoController = {};

infoController.getAllInfo = async(req,res)=>{
  let info = await Info.find();
  console.log(info);
  return res.status(200).json(info);
};

module.exports = infoController;