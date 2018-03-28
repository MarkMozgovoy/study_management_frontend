const database = require('./js/databasesubject');
const path = require('path')
const url = require('url')

window.onload = function() {

  // Populate the table

myFunction(localStorage.getItem('owner'));
  function myFunction(y) {
  document.getElementsByTagName("th")[0].innerHTML = y;
}
  populateTable();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var mediasseen = document.getElementById('mediasseen');

    // Save the person in the database
    database.addPerson(firstname.value, lastname.value, mediasseen);

    // Reset the input fields
    firstname.value = '';
    lastname.value = '';
    mediasseen.value = '';

    // Repopulate the table
    populateTable();
  });
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td>' + persons[i]. mediasseen + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table
  populateTable();
}

// view a case study
function view(id) {

    // Load the view.html file
const { remote } = require('electron')
remote.getCurrentWindow().loadURL(url.format({
    pathname: path.join(__dirname, 'view.html'),
    protocol: 'file:',
    slashes: true
  }))

}
