var currentQuestion = 0;
var initialsInput = $("#initials-text");
var initialsArray = [];
var secondsLeft = (questions.length) * 10;
var xInterval = null;
var newInitials = null;

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


