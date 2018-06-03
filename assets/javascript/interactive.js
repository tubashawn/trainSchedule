$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyB_zj9DDElFhcjBsnG5NUgLE5MmSzcz49E",
        authDomain: "trainschedule-7677d.firebaseapp.com",
        databaseURL: "https://trainschedule-7677d.firebaseio.com",
        projectId: "trainschedule-7677d",
        storageBucket: "",
        messagingSenderId: "521959198118"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var trainName = "";
    var trainDestination = ""; 
    var trainStart ="";
    var trainFrequency = ""; 


    function sendUserInfo() {
        $(".submitButton").on("click", function (event) {
            event.preventDefault();

            trainName = $("#userTrainName").val().trim();
            trainDestination = $("#userDestination").val().trim();
            trainStart = $("#userFirstTrain").val().trim();
            trainFrequency = $("#userFrequency").val().trim();
            database.ref().push({
                trainName: trainName,
                trainDestination: trainDestination,
                trainStart: trainStart,
                trainFrequency: trainFrequency
            });
        });
    }

    function retrieveData() {
        database.ref().on("child_added", function(snapshot) {
            console.log(snapshot.val().trainName);
            var newTableItem = $("<td>");
            
            trainName = (snapshot.val().trainName);
            trainDestination = (snapshot.val().trainDestination);
            trainStart = (snapshot.val().trainStart);
            trainFrequency = (snapshot.val().trainFrequency);
            
        });
    }

    sendUserInfo();
    retrieveData();
});