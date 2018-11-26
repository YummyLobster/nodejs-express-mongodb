var mongoose = require('mongoose');

//programs Schema
var programsSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    fullname:{
        type:String,
        required: true
    }
});

var Programs = module.exports = mongoose.model('Programs',programsSchema);

//get programs
module.exports.getPrograms = function(callback, limit){
    Programs.find(callback).limit(limit);
}
//get programs by id
module.exports.getProgramsById = function(id, callback){
    Programs.findById(id,callback);
}
//add programs
module.exports.addProgram = function(program, callback){
    Programs.create(program,callback);
}
//update programs
module.exports.updateProgram = function(id, program, options, callback){
    var query = {_id:id};
    var update = {
        name: program.name,
        fullname: program.fullname,
    }
    Programs.findOneAndUpdate(query,update,options,callback);
}
