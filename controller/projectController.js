const ProjectList=require('../models/projectModel');
const IssueList=require('../models/issue');


module.exports.createProject=function(req,res){
      return res.render('createproject',{
        title:"create project"
    })
}

// create project
module.exports.create= function(req,res){
    ProjectList.create(
        {
            projectname:req.body.projectname,
            projectauthor:req.body.projectauthor,
            projectdescription:req.body.projectdescription
        },function(err,project){
            if(err){
                return;
            }
            return res.redirect('/')
        }
    )
}

module.exports.projectIssue= async function(req,res){
    let project=await ProjectList.findById(req.query.projectid)
    let issuePro = await IssueList.find({ projectRef: req.query.projectid });
    let uniqueArray=[];
    for(i of issuePro){
        for(j of i.labels){
            uniqueArray.push(j);
        }
    }
    let uniqueSet = [...new Set(uniqueArray)]
    return res.render('projectDetailsPage',{
        project:project,
        issue:issuePro,
        labelSet:uniqueSet,
        showIssue:true,
        title:'project details page'
    })
}