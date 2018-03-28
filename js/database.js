// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/persons.db', autoload: true });

// Adds a person
exports.addStudy = function(id,studyname, studyowner, nickname, type, date_created, date_modified, equipment_required, status) {

  // Create the person object
  var study = {
    "_id": id,
    "studyname": studyname,
    "studyowner": studyowner,
    "nickname": nickname,
    "type": type,
    "date_created": date_created,
    "date_modified": date_modified,
    "equipment_required": equipment_required,
    "status": status,
  };

  // Save the person to the database
  db.insert(study, function(err, newDoc) {
    // Do nothing
  });
};

// Returns all persons
exports.getStudies = function(fnc) {

  // Get all persons from the database
  db.find({}, function(err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deleteStudy = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}
