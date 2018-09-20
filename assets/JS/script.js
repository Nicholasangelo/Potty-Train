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
var firstConvert = moment(firstTime, "hh:mm").subtract(1, "years");
console.log("first: " + moment(firstConvert).format("hh:mm a"));
console.log("first: " + firstConvert);
          currentTime = moment();
          diffTime = moment().diff(moment(firstConvert), "minutes");
          tRemainder = diffTime % frequency;
          minutesTillTrain = frequency - tRemainder;
          nextTrain = moment().add(minutesTillTrain, "minutes");
          nextTrainFormatted = moment(nextTrain).format("hh:mm a");

//converts frequency into data speak
// var freqConvert = moment(frequency, "mm");
// console.log("frequency Converted= " + moment(freqConvert).format("mm"));




// end -- MATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH
// MATHMATHMATHMMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATHMATH
    var newRow = $("<tr>").append(
        $("<td>").text(childName),
        $("<td>").text(firstTime),
        $("<td>").text(frequency),
        $("<td>").text(nextTrainFormatted),
        $("<td>").text(minutesTillTrain)
    )

    $("#table").append(newRow);

})

$("#dogLink").on("click", function() {
    // var toddler = $("div");
    // toddler.text("Click here for toddlers!'");
    // toddler.attr('id', 'toddlerLink');
    // console.log(toddler);

    $("header").css('background-image', 'url("images/trainDog.png")');
    $(".firstTimeVisit").html("First walk of the day");
    $(".freqWalks").html("Frequency of walks");
    $(".nextWalk").html("Next walk");
    
    $("#firstTimeVisit").html("First walk of the day");
    $("#freqWalks").html("Frequency of walks");
    $(".nextWalkTime").html("Mins to next walk");
    $("#dogLink").html("Click here for Toddlers!");

    $("#dogLink").on("click", function() {
        $("header").css('background-image', 'url("images/trainWboyColor.png")');
    $(".firstTimeVisit").html("First trip to the Potty");
    $(".freqWalks").html("Frequency");
    $(".nextWalk").html("Next trip");
    
    $("#firstTimeVisit").html("First trip to the Potty");
    $("#freqWalks").html("Frequency");
    $(".nextWalkTime").html("Mins to next trip");
    $("#dogLink").html("Click here for pets");
    })

})

setInterval(1000 * 60);