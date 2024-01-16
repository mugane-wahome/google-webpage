//QUESTION 1
function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = prompt("Guess a number between 1 and 10:");
    if (userGuess === randomNumber) {
      alert("correct!!.");
    } else {
      alert("Not matched! The correct number was " + randomNumber);
    }
   }
   guessNumber();

//QUESTION 2
function exam_status(totalmarks, is_final) {
    if (is_final) {
      return totalmarks >= 90;
    } else {
      return totalmarks >= 89 && totalmarks <= 100;
    }
  }
  
  
  console.log(exam_status(78, ""));
  console.log(exam_status(89, "true"));  
  console.log(exam_status(99, "true"));  

  //QUESTION 3
//Output
One
String One
false

//Explanation
let obj = {}; creates an empty object named obj.
obj[1] = 'One'; adds a property with a numeric key (1) and the value 'One' to the object.
obj['1'] = 'String One'; adds a property with a string key ('1') and the value 'String One' to the object.
