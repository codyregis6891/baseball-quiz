var questions = [
    {
        title: "How many players are on defense at one time?",
        options: ["six", "eight", "nine", "eleven"],
        answer: "nine",
    },

    {
        title: "Who has the record for most career homeruns?",
        options: ["Babe Ruth", "Willie Mays", "Barry Bonds", "Hank Aaron"],
        answer: "Barry Bonds",
    },

    {
        title: "Which team has won the most World Series?",
        options: ["Yankees", "Cubs", "Dodgers", "Cardinals"],
        answer: "Yankees",
    },

    {
        title: "What is the record for most Strikeouts in a Game?",
        options: ["twenty", "fifteen", "twelve", "seventeen"],
        answer: "twenty",
    },

    {
        title: "Who has the most basehits in MLB history?",
        options: ["Ichiro Suzuki", "Tony Gwinn", "Sammy Sosa", "Pete Rose"],
        answer: "Pete Rose",
    },
];

var currentQuestion = 0;
var initialsInput = $("#initials-text");
var initialsArray = [];
var secondsLeft = (questions.length) * 10;
var xInterval = null;
var newInitials = null;

$(".start").click(function () {
    setTimer();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
});

function setTimer() {
    xInterval = setInterval(function() {
        $('#timer').html(secondsLeft);
        secondsLeft--;
        if (secondsLeft <= 0) {
            clearInterval(xInterval);
            timeUp();
        }
    }, 1000);
}

function showQuestion() {
    var options = questions[currentQuestion].options;
    var question = questions[currentQuestion].title;
    $(".quiz h2").text(question);
    $(".quiz ul").html("");
    for (var i = 0; i < parseInt(options.length); i++) {
        var show = questions[currentQuestion].options[i];
        $(".quiz ul").append("<li>").append(show);
    }

    $("li").click(function() {
        var guessid = $(this).attr("id");
        var guess = questions[currentQuestion].options[guessid];
        var answer = questions[currentQuestion].answer;

        if (answer === guess) {
            currentQuestion++;
            showScorePage();
        } else {
            secondsLeft = secondsLeft - 10;
            currentQuestion++;
            showScorePage();
        }
    });
}

function showScorePage() {
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        $("#timer").remove();
        $(".quiz").hide();
        $(".scoreContainer").append(secondsLeft);
        $("#scoreNumber").append(secondsLeft);
        clearInterval(xInterval);
    }
}

function timeUp() {
    $("#timer").text("Times Up!");
    $(".quiz").hide();
    $(".scoreContainer").show();
    $("#scoreNumber").append(secondsLeft);
    clearInterval(xInterval);
}

$("#submit-initials").click(function(e) {
    e.preventDefault();
    loadScores();
    saveScores();
    showScores();
    highScoresPage();
});

function saveScores() {
    var scoreName = initialsInput.val();
    var highScores = scoreName + " : " + secondsLeft;
    initialsArray.push(highScores);
    initialsArray.sort(function(a, b){return b-a});
    localStorage.setItem("listOfItems", JSON.stringify(initialsArray));
}

function loadScores() {
    var savedScores = localStorage.getItem("listOfItems");
    var allScores = JSON.parse(savedScores);

    if (allScores != null) {
        initialsArray = allScores;
    }
}

function showScores() {
    for (i = 0; i < initialsArray.length; i++) {
        newInitials = $("<li></li>").append(initialsArray[i]);
        $("#scoreList").append(newInitials);
    }
}

function highScoresPage() {
    $(".highScorePage").show();
    $("#initialsArray").hide();
}

$("#view-highscores").click(function() {
    $(".highScorePage").toggle();
});

$("#go-back").click(function() {
    window.location.reload();
});

$("#clear").click(function(e) {
    e.preventDefault();
    $("#scoreList").css("display", "none");
    localStorage.clear();
});