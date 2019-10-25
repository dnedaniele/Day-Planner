



// date on the title

var dateOfToday = moment().format('MMMM Do YYYY, h:mm a'); 
 var timeControl = moment().format('HH');
 console.log(timeControl)

$('#currentDay').append('<p>').text(dateOfToday);


 //$('.time-block').text(moment().format('HH'));

 var times = ['9','10','11','12','13','14','15','16','17']; 

for (i = 0; i < times.length; i++) {

}
   


$(document).ready(function() {
$('box[time=[i]]')
});

console.log($('box[time=10]'));

 parseInt

// jquery select by attribute and add 




function renderStored() {
    var getInput = JSON.parse(localStorage.getItem("input"));
    console.log(getInput)
    $(".appointment").val(getInput);
}


// Local Storage
var saveButton = document.querySelector("#myBtn");
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    var inputValue = document.getElementById("input").value;

    localStorage.setItem("input", JSON.stringify(inputValue));

    /// render the infos of the storage

  
  
});

renderStored();

