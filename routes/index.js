const express= require('express');
const router=express.Router();
const homeController=require('../controller/homeController');

router.get('/',homeController.home);
router.use('/project',require('./project'));
router.use('/issue',require('./issue'));

module.exports=router;