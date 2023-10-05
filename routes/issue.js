const express=require('express')
const router=express.Router();
const issueController= require('../controller/issueController')

router.get('/issuePage/:projectId',issueController.issuepage)
router.post('/create',issueController.create);
router.post('/filterIssue',issueController.filterIssue);
module.exports=router;