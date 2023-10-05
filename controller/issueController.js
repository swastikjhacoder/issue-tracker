const IssueList=require('../models/issue');
const ProjectList=require('../models/projectModel');

// issue page controller
module.exports.issuepage=function(req,res){
    ProjectList.findById(req.params.projectId,function(err,projectDetail){
        return res.render('issuePage',{
            title:'create issue',
            projectId:req.params.projectId,
            projectDet:projectDetail
        })
    })
}

// create issue 
module.exports.create= async function(req,res){
    let newIssue = await IssueList.create({
        title:req.body.title,
        description:req.body.description,
        author:req.body.author,
        projectRef: req.body.projectRef,
        labels:req.body.labels
    })
    let project = await ProjectList.findById(req.body.projectRef);
    newIssue.save();
    project.issue.push(newIssue);
    project.save();
    return res.redirect("/");
}

// filter the issue
module.exports.filterIssue= async function(req,res){
    let projectData= await ProjectList.findById(req.body.projectId).populate('issue')
    let filterdata = new Set();
    if(req.body.searchAuthor){
        for(i of projectData.issue){
            if(i.author === req.body.searchAuthor){
                filterdata.add(i)
            }
        }
    }else if(req.body.searchTitleDesc){
        for(i of projectData.issue){
            if(i.title === req.body.searchTitleDesc || i.description === req.body.searchTitleDesc){
                filterdata.add(i)
            }
        }
    }
    else{
        for(i of projectData.issue){
            for(j of i.labels){
                if(j === req.body.label1 || j === req.body.label2){
                    filterdata.add(i)
                }
            }
        }
    }
    let issueRleToPro= await IssueList.find({projectRef: req.body.projectId})
    return res.render('projectDetailsPage',{
        title:'filter issue',
        showIssue:false,
        filterdata:filterdata,
    })
}