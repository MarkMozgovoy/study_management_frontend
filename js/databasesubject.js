// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/listofstudies.db', autoload: true });

// Adds a person
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
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};

// Returns all persons
exports.getPersons = function(fnc) {

  // Get all persons from the database
  db.find({}, function(err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}
