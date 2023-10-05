// require the library
const mongoose=require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/issueTracker');

// acquire the connection to check if it is successfully
const db=mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running the print the msg
db.once('open',function(){
    console.log('Successfully connected to a database');
})

