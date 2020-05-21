/*
    Name : Md Sumon Ali
    ID   : 11096
    Email: sumon.ali@bjitgroup.com

*/

function ParentAnswer() {
    this.singleLineAnswer;
    this.mcqAnswer;
    this.mrqAnswer;
    this.multiLineAnswer;
}

ParentAnswer.prototype.getSingleLineAnswer = function() {
    this.singleLineAnswer = document.getElementById('name').value;
    return this.singleLineAnswer;
}

ParentAnswer.prototype.getMcqAnswer = function() {

    var departments = document.getElementsByName('department');
    var departmentLength = departments.length;
    for (let i = 0; i < departmentLength; i++) {
        if (departments[i].checked === true) {
            this.mcqAnswer = departments[i].value;
        }
    }

    return this.mcqAnswer;
}

ParentAnswer.prototype.getMrqAnswer = function() {

    var allCheckbox = document.getElementsByName('check');
    var len = allCheckbox.length;
    var multiAns = [];
    for (let i = 0; i < len; i++) {
        if (allCheckbox[i].checked == true) {
            multiAns.push(allCheckbox[i].value);
        }
    }
    this.mrqAnswer = multiAns;
    return this.mrqAnswer;
}

ParentAnswer.prototype.getMultiLineAnswer = function() {
    this.multiLineAnswer = document.getElementById("opinion").value;
    return this.multiLineAnswer;
}


function DisplayAnswer() {
    ParentAnswer.call(this);
}

DisplayAnswer.prototype = Object.create(ParentAnswer.prototype);

DisplayAnswer.prototype.answerDisplay = function(singleLineAnswer, mcqAnswer, mrqAnswer, multiLineAnswer) {

    document.querySelector('.name').innerText = this.singleLineAnswer;
    document.querySelector('.department').innerText = this.mcqAnswer;

    var multiAnswer = "";
    console.log(this.mrqAnswer.length);
    this.mrqAnswer.forEach(element => {
        multiAnswer = multiAnswer + " " + element;
    });
    document.querySelector('.language').innerText = multiAnswer;

    document.querySelector('.opinion').innerText = this.multiLineAnswer;
}



function handleSubmit() {

    var displayAnswer = new DisplayAnswer();

    var singleLineAnswer = displayAnswer.getSingleLineAnswer();
    var mcqAnswer = displayAnswer.getMcqAnswer();
    var mrqAnswer = displayAnswer.getMrqAnswer();
    var multiLineAnswer = displayAnswer.getMultiLineAnswer();

    if (singleLineAnswer != "" && mcqAnswer != "" && mrqAnswer.length != 0 && multiLineAnswer != "") {

        var questionSection = document.querySelector('.qa-section');
        questionSection.style.display = "none";

        var answerSection = document.querySelector('.answer-section');
        answerSection.style.display = "block";

        displayAnswer.answerDisplay(singleLineAnswer, mcqAnswer, mrqAnswer, multiLineAnswer);

    } else {
        alert("Please Complete your Information");
    }

}



function handleReset() {
    window.location.reload(true);
}