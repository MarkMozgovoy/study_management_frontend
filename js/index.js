const database = require('./js/database');

window.onload = function() {

  // Populate the table
  populateTable();


}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getStudies(function(studies) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < studies.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td><a href="view.html" onclick="return viewStudy(\'' + studies[i]._id + '\');">' + studies[i]._id + '</td>';
      tableBody += '  <td>' + studies[i].studyname + '</td>';
      tableBody += '  <td>' + studies[i].studyowner + '</td>';
      tableBody += '  <td>' + studies[i].status + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deleteStudy(\'' + studies[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function deleteStudy(id) {

  // Delete the person from the database
  database.deleteStudy(id);

  // Repopulate the table
  populateTable();
}
function viewStudy(id) {

// store id to local storage
localStorage.setItem('love', id);

}
