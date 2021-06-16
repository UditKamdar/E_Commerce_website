const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/super_market',
{useNewUrlParser:true},(err) => {
    if(!err){console.log("connection sucessfull")}
    else{console.log('no connection :' +err )}
});

// require('./employee.model');