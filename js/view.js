const database = require('./js/db');
const path = require('path')
const url = require('url')

window.onload = function() {

  // Populate the table
  populateTable();
  populateTablex();

  // document.getElementsByTagName("th")[0].innerHTML = localStorage.getItem('scanner');

}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getStudies(function(studies) {
    //
    // Generate the table body
    var tableBody = '';
    for (i = 0; i < studies.length; i++) {
      document.getElementById('id').innerHTML = studies[i]._id;
      document.getElementById('name').innerHTML = studies[i].studyname;
      document.getElementById('owner_id').innerHTML = studies[i].studyowner;
      document.getElementById('type').innerHTML = studies[i].type;
      document.getElementById('date_created').innerHTML = studies[i].date_created;
      document.getElementById('date_modified').innerHTML = studies[i].date_modified;
      document.getElementById('equipment_required').innerHTML = studies[i].equipment_required;
      document.getElementById('status').innerHTML = studies[i].status;
      document.getElementById('archived').innerHTML = studies[i].archived;

    }
  });
}


// Populates the persons table
function populateTablex() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td><a href="vdeployment.html" onclick="return viewDeploy(\'' + persons[i]._id + '\');">' + persons[i]._id + '</td>';
      tableBody += '  <td>' + persons[i].t_demogra + '</td>';
      var statuscheck = localStorage.getItem(persons[i]._id);
      tableBody += '  <td>' + statuscheck + '</td>';// change to status
      tableBody += '  <td>' + persons[i].date_started + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;

  });
}

// Deletes a study
function deleteStudy(id) {

  // Delete the study from the database
  database.deleteStudy(id);

  // Repopulate the table
  populateTable();
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the tablex
  populateTablex();
}

// view vdeployment
function viewDeploy(id) {

// store id to local storage, different key and filter using id
localStorage.setItem('deployid', id);

}
