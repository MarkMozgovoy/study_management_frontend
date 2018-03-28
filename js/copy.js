const database = require('./js/databasesubject');

window.onload = function() {

  document.getElementById('date_started').value = Date();
  var passs = localStorage.getItem('love');
  document.getElementById('previd').value = passs;

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var id = document.getElementById('id');
    var idd = document.getElementById('id').value;
    localStorage.setItem(idd,'created');
    var previd = document.getElementById('previd');
    var t_demogra = document.getElementById('t_demogra');
    var t_samplesize = document.getElementById('t_samplesize');
    var date_started = document.getElementById('date_started');

    // Save the study in the database
    database.addPerson(id.value, previd.value, t_demogra.value, t_samplesize.value, date_started.value);

    // Reset the input fields
    id.value = '';
    previd.value = '';
    t_demogra.value = '';
    t_samplesize.value = '';
    date_started.value = '';

    // Repopulate the table
	// back to table
   // populateTable();
  });
}
