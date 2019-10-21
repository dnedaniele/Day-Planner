
// issues:
// 1. not possible to have 2 moment.js at the same time
// 2. how to compare the time and the schedule
// 3. cant show the stored things 


// date on the title

var dateOfToday = moment().format('MMMM Do YYYY, h:mm a'); 
 var timeControl = moment().format('LT');
$('#currentDay').append('<p>').text(dateOfToday);



if (timeControl > '09:23 PM') {
    console.log('yes')
}
else{
    console.log('no')
};

// change colours: if it is time green future other colour
//console.log(timeControl);
// if (timeControl ==


// Local Storage
var saveButton = document.querySelector("#myBtn");
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    var inputValue = document.getElementById("input").value;

    localStorage.setItem("input", JSON.stringify(inputValue));

    /// render the infos of the storage

    renderStored();
      function renderStored() {
        var getInput = JSON.parse(localStorage.getItem("input"));
        $("#input").append('</p>').text(getInput);
    }
});

