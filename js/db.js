// Initialize the database
var Datastore = require('nedb');
db = {};
db.persons = new Datastore({ filename: 'db/persons.db', autoload: true });
db.listofstudies = new Datastore({ filename: 'db/listofstudies.db', autoload: true });

// Adds a person
exports.addStudy = function(id,studyname, studyowner, nickname) {

  // Create the person object
  var study = {
    "_id": id,
    "studyname": studyname,
    "studyowner": studyowner,
    "nickname": nickname,

  };

  // Save the person to the database
  db.persons.insert(study, function(err, newDoc) {
    // Do nothing
  });
};

// Returns all persons
exports.getStudies = function(fnc) {

  // Get all persons from the database
  var pass = localStorage.getItem('love');
  db.persons.find({_id: pass}, function(err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deleteStudy = function(id) {

  db.persons.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing^ opposites
  });
}


///// -- db.listofstudies -- /////


exports.addPerson = function(id, previd, t_demogra, t_samplesize, date_started) {

  // Create the person object
  var person = {
    "_id": id,
    "previd": previd,
    "t_demogra": t_demogra,
    "t_samplesize": t_samplesize,
    "date_started": date_started,
  };

  // Save the person to the database
  db.listofstudies.insert(person, function(err, newDoc) {
    // Do nothing
  });
};

// Returns all persons
exports.getPersons = function(fnc) {

  // Get all persons from the database
  var connecterid = localStorage.getItem('love');
  db.listofstudies.find({previd: connecterid}, function(err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

exports.getPerson = function(fnc) {

  // Get all persons from the database
  var connecteridd = localStorage.getItem('deployid');
  db.listofstudies.find({_id: connecteridd}, function(err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function(id) {

  db.listofstudies.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing^ opposites
  });
}
