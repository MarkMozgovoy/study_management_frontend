const database = require('./js/database');

window.onload = function() {

  document.getElementById('date_created').value = Date();
  document.getElementById('date_modified').value = Date();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var id = document.getElementById('id');
    var studyname = document.getElementById('studyname');
    var studyowner = document.getElementById('studyowner');
    var nickname = document.getElementById('nickname');
    var type = document.getElementById('type');
    var date_created = document.getElementById('date_created');
    var date_modified = document.getElementById('date_modified');
    var equipment_required = document.getElementById('equipment_required');
    var status = document.getElementById('status');

    // Save the person in the database
    database.addStudy(id.value, studyname.value, studyowner.value, nickname.value, type.value, date_created.value, date_modified.value, equipment_required.value, status.value);

    // Reset the input fields
    id.value = '';
    studyname.value = '';
    studyowner.value = '';
    nickname.value = '';
    type.value = '';
    date_created.value = '';
    date_modified.value = '';
    equipment_required.value = '';
    status.value = '';
    // Repopulate the table

  });
}
