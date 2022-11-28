function addQuestion() {

  var newQuestion = document.getElementById("questionSection");

  newQuestion.innerHTML += "<label for='question'>Question: </label><br />"; // ADDS THE QUESTION LABEL 
  newQuestion.innerHTML += "<input type='text' id='question' name='question' /><br />"; // ADDS THE INPUT TEXT

}
