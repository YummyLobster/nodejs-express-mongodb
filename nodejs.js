var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("mydb");

    dbo.collection("users").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });
    dbo.collection("events").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });


  var myobj = [
    { _id: 1, name: 'John', email: 'John@calstatela.edu'},
    { _id: 2, name: 'Jane', email: 'Jane@calstatela.edu'}
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
  });
  var myobj = [
    {
        _id: 1,
    	name: 'Hiking in LA',
    	dateTime: new Date(2018, 10, 1),
    	organizer: 1,
    	attendees: [{
    		id: 2
    	}]
    },
    {
        _id:2,
    	name: 'Board Game Night',
    	dateTime: new Date(2018, 10, 1),
    	organizer: 2,
    	attendees:[{
    		id: 1
    	}]
    }
  ];
  dbo.collection("events").insertMany(myobj, function(err, res) {
    if (err) throw err;
  });
  db.close();
});
