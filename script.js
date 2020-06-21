//$(document).ready(statement);

//* Display current day at the top of calendar
var rightNow = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(rightNow)


//* Add time blocks for standard business hours
var times = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
];

var event = {
    date: '06-20-2020',
    hour: '1:00 PM',
    description: 'Buy groceries'
}
dayEvents.push(event);
localStorage('dayEvents', JSON.stringify(dayEvents));


var container = $(".container");
var row, col;

for (var i = 0; i < times.length; i++) {
    //* Create a new row
    row = $('<div></div>').addClass('row');
    row.addClass('time-slot');

    //* TODO: call .addClass('past') or .addClass('current') based on time value
    //* Create left div with the time
    col = $('<div></div>').addClass('col');
    col.html(times[i]);
    //* Add to row
    row.append(col);



    //* Color-code time blocks; past, present, future
    var past = moment().isBefore(rightNow);
    var future = moment().isAfter(rightNow);

    // .time-slot = background-color: green
    // .past = background-color: gray
    // .current = background-color: red


    //* Enter events in time block
    var taskText = function (createTask)
    $("#textarea")


    //* Save event information in local storage
    $("#saveBtn").click(function () {
        taskText.push(createTask);
        localStorage('taskText', JSON.stringify(taskText));
    })


    //* Events saved upon refreshing page
    localStorage.getItem('taskText')