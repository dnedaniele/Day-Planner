
// date on the title
var dateOfToday = moment().format('MMMM Do YYYY, h:mm a'); 
var timeControl = moment().format('LT').value;
$('#currentDay').append('<p>').text(dateOfToday);


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
        $("#input").append(getInput);
    }
});

