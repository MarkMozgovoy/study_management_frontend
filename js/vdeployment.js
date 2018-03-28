const database = require('./js/db');
const path = require('path')
const url = require('url')

window.onload = function() {

// 1 -- check the status of the buttons by checking localStorage to get the current id of user
// ;using that to check localStorage what status it's in, then undergo if statements --  //
  var buttonChange = localStorage.getItem('deployid');
  var checkstat = localStorage.getItem(buttonChange);
    if (checkstat == "Stopped") {
        document.getElementById('stop').disabled = true;
    }
    if (checkstat == "Paused") {
        document.getElementById('pause').disabled = true;
    }
    if (checkstat == "active") {
        document.getElementById('reactivate').disabled = true;
    }
// 1 -- --  //


  // 2 -- Populate the table --  //
  populateTable();
  // 2 -- --  //


  // 3 -- change the status of the buttons by disabling to a bool(truth or false condition) when pressed on --  //

  document.getElementById('stop').addEventListener('click', () => {
    var statuschange = localStorage.getItem('deployid');
    localStorage.setItem(statuschange, 'Stopped');
  document.getElementById('stop').disabled = true;
  document.getElementById('reactivate').disabled = false;
  document.getElementById('pause').disabled = true;

  });
  document.getElementById('pause').addEventListener('click', () => {
    var statuschange = localStorage.getItem('deployid');
    localStorage.setItem(statuschange, 'Paused');
    document.getElementById('reactivate').disabled = false;
    document.getElementById('pause').disabled = true;

  });
  document.getElementById('reactivate').addEventListener('click', () => {
    var statuschange = localStorage.getItem('deployid');
    localStorage.setItem(statuschange, 'active');
    document.getElementById('stop').disabled = false;
    document.getElementById('pause').disabled = false;
    document.getElementById('reactivate').disabled = true;

  });
  // 3 -- --  //

// 3.5 -- back button resets the disability so it's not persistant --  //
document.getElementById('back').addEventListener('click', () => {
  document.getElementById('stop').disabled = false;
  document.getElementById('pause').disabled = false;
  document.getElementById('reactivate').disabled = false;
});
// 3.5 -- -- //
}


// 4 -- Populates the persons table --  //
function populateTable() {

  // 5 -- Retrieve the persons -- //
  database.getPerson(function(persons) {

    // 6 -- Generate the table body --  //
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      document.getElementById('id').innerHTML = persons[i]._id;
      document.getElementById('t_demogra').innerHTML = persons[i].t_demogra;
      document.getElementById('t_samplesize').innerHTML = persons[i].t_samplesize;
      document.getElementById('date_started').innerHTML = persons[i].date_started;
    }
    // 6 -- --  //

  });
  // 5 -- --  //

}
// 4 -- --  //



// 7 -- Deletes a study --  //
function deletePerson(id) {

  //  8 -- Delete the study from the database --  //
  database.deletePerson(id);
// 8 -- -- //

  //  2 -- Repopulate the table -- //
  populateTable();
  // 2 -- -- //
}
// 7 -- --  //
