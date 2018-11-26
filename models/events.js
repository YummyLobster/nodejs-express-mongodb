var mongoose = require('mongoose');

//events Schema
var eventsSchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
	name:{
        type:String,
        required: true
    },
	dateTime: {
        type: Date,
        required: true
    },
    organizer:{
        type: String,
        required: true
    },
    attendees:{
        type: Array
    },
    status:{
        type: String,
        required: true,
        default: "SUBMITTED"
    }
});

var Events = module.exports = mongoose.model('Events',eventsSchema);

//get events
module.exports.getEvents = function(callback, limit){
    Events.find(callback).limit(limit);
}
//add events
module.exports.addEvent = function(event, callback){
    Events.create(event,callback);
}
//update programs
module.exports.updateEvent = function(id, event, options, callback){
    var query = {_id:id};
    var update = {
        status: event.status
    }
    Events.findOneAndUpdate(query,update,options,callback);
}
