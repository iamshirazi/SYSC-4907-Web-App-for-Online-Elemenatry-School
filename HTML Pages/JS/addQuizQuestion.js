divName = 2;
qName = 1;
sName = 1;
mName = 1;

function addQuestion() {

  var newQuestion = document.getElementById("questionSection");
  var newName = "Question" + qName; // CHANGES THE NAME OF THE ELEMENT SO THAT ALL QUESTIONS ARE INDEPENDENT OF ONE ANOTHER

  newQuestion.innerHTML += "<label>Question: </label> <br />"; // ADDS THE QUESTION LABEL 
  newQuestion.innerHTML += "<input type='radio' name='" + newName +  "' value='1' onclick=" + "addSingle('choice" + divName +"') />Multiple Choice (single)<br />"; // ADDS THE FIRST RADIO BUTTON  
  newQuestion.innerHTML += "<input type='radio' name='" + newName + "' value='2' onclick=" + "addMultiple('choice" + divName +"') />Multiple Choice (multiple)<br />"; // ADDS THE SECOND RADIO BUTTON        
  newQuestion.innerHTML += "<input type='radio' name='"+ newName + "' value='3' onclick=" + "addShort('choice" + divName + "') />Short Answer<br />"; // ADDS THE THIRD RADIO BUTTON 
  newQuestion.innerHTML += "<div id='choice" + divName + "'></>"; // NEW DIV 

  qName += 1;
  divName += 1;

}

//// FOR SELECTING MULTIPLE CHOICE QUESTIONS OR SHORT ANSWER /////

function addSingle(div) {
    var newQuestion = document.querySelector('#' + div);

    newQuestion.innerHTML = "<label>Multiple Choices (single): </label><br />"; // ADDS A QUESTION LABEL 
    newQuestion.innerHTML += "Correct Choice: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice B: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice C: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice D: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT

}

function addMultiple(div) {
    var newQuestion = document.querySelector('#' + div);

    newQuestion.innerHTML = "<label>Multiple Choices (multiple): </label><br />"; // ADDS A QUESTION LABEL 
    newQuestion.innerHTML += "Correct Choice: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice B: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice C: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT
    newQuestion.innerHTML += "Choice D: <input type='text' /><br />"; // ADDS THE INPUT TEXT ELEMENT

}

function addShort(div) {
    var newQuestion = document.querySelector('#' + div);

    newQuestion.innerHTML = "<label>Short Answer: </label><br />"; // ADDS A QUESTION LABEL 
    newQuestion.innerHTML += "<input type='text' name='shortAnswer' /><br />"; // ADDS THE INPUT TEXT ELEMENT
}
