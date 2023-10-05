const express=require('express');
const bodyParser=require('body-parser');
const app= express();
const port=3000;
const ejsexpresslayout=require('express-ejs-layouts');
app.use(express.urlencoded());
const mongoose=require('./config/mongoose');
    
    
app.use(express.static('./assets'));
app.use(ejsexpresslayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

const router=require('./routes/index');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log('error in running: ',err);
    }
    console.log('server is running in the port',port)
})