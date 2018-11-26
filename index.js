var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Programs = require('./models/programs');
Events = require('./models/events');

//Connect to mongoose
mongoose.connect('mongodb://localhost/scicafe');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.get('/api/programs',function(req,res){
    Programs.getPrograms(function(err,programs){
        if(err){
            throw err;
        }
        res.json(programs);
    })
});
app.get('/api/programs/:_id',function(req,res){
    Programs.getProgramsById(req.params._id, function(err,program){
        if(err){
            throw err;
        }
        res.json(program);
    })
});
app.post('/api/programs',function(req,res){
    var program = req.body;
    Programs.addProgram(program, function(err,programs){
        if(err){
            throw err;
        }
        res.json(programs);
    })
});
app.put('/api/programs/:_id',function(req,res){
    var id = req.params._id;
    var program = req.body;
    Programs.updateProgram(id, program, {}, function(err,programs){
        if(err){
            throw err;
        }
        res.json(programs);
    })
});

app.get('/api/events',function(req,res){
    Events.getEvents(function(err,events){
        if(err){
            throw err;
        }
        res.json(events);
    })
});
app.post('/api/events',function(req,res){
    var event = req.body;
    Events.addEvent(event, function(err,events){
        if(err){
            throw err;
        }
        res.json(events);
    })
});
app.put('/api/events/:_id',function(req,res){
    var id = req.params._id;
    var event = req.body;
    Events.updateEvent(id, event, {}, function(err,events){
        if(err){
            throw err;
        }
        res.json(events);
    })
});
app.listen(3000);
console.log('Running on port 3000...');
