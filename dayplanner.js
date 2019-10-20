
// date on the title
var dateOfToday = moment().format('LLLL');; 
console.log(dateOfToday);
$('#currentDay').append('<p>').text(dateOfToday);

