const ProjectList=require('../models/projectModel');
// controller for main page or home page
module.exports.home=function(req,res){
    ProjectList.find({},function(err,projectDet){
        if(err){
            return;
        }
        return res.render('home',{
            project:projectDet,
            title:'home page'
        })
    })
}