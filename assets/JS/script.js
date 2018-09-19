function workingClock() {
    var clock = moment().format("h:mm:ss a");
    $("#time").html(clock);
}
setInterval(workingClock, 1000);

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCeje1XVuAE-phLQo81198Z5sE2oB9toGA",
    authDomain: "potty-train.firebaseapp.com",
    databaseURL: "https://potty-train.firebaseio.com",
    projectId: "potty-train",
    storageBucket: "potty-train.appspot.com",
    messagingSenderId: "559922799592"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#babyButton").on("click", function (event) {
    event.preventDefault();

    var childName = $("#childName").val().trim();
    var firstTime = $("#timeOfVisit").val().trim();
    var frequency = $("#frequency").val().trim();

    var newInput = {
        name: childName,
        firstVisit: firstTime,
        frequency: frequency,
    };

    console.log(newInput);

    database.ref().push(newInput);

    $("#childName").val("");
    $("#timeOfVisit").val("");
    $("#frequency").val("");

})

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var childName = childSnapshot.val().name;
    var firstTime = childSnapshot.val().firstVisit;
    var frequency = childSnapshot.val().frequency;

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().firstVisit);
    console.log(childSnapshot.val().frequency);


 //   start -- MATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH
// MATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH

// converts first arrival into data speak
var firstConvert = moment(firstTime, "hh:mm a").subtract(1, "years");
console.log("first: " + moment(firstConvert).format("hh:mm a"));
console.log("first: " + firstConvert);

//converts frequency into data speak
var freqConvert = moment(frequency, "mm");
console.log("frequency Converted= " + moment(freqConvert).format("mm"));


// end -- MATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH
// MATHMATHMATHMMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH
    var newRow = $("<tr>").append(
        $("<td>").text(childName),
        $("<td>").text(firstTime),
        $("<td>").text(frequency),
        // $("<td>").text
        // $("<td>").text
    )

    $("#table").append(newRow);

})
setInterval(1000 * 60);