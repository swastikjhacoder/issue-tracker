const express=require('express')
const router=express.Router();
const projectController=require('../controller/projectController');

router.get('/createproject',projectController.createProject)
router.post('/create',projectController.create);
router.get('/issue',projectController.projectIssue);

module.exports=router;