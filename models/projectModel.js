const mongoose =require('mongoose');
// project list schema
const projectSchema= new mongoose.Schema(
    {
        projectname:{
            type:String,
            required:true
        },
        projectdescription:{
            type:String,    
            required:true
        },
        projectauthor:{
            type:String,
            required:true
        },
        issue:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'issueSchema'
            },
        ],

    },
    {
        timestamps:true
    }
)

const ProjectList=mongoose.model('ProjectList',projectSchema);
module.exports=ProjectList;