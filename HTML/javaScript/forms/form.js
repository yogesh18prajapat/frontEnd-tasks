
// let a = 10;
    //    let val = countryCode(country);
    //    document.getElementById("country").addEventListener(onchange,countryCode);

// Assigning coungtry code on selecying country
function countryCode() {
 let country = document.getElementById("country").value;
//  console.log(country,'country')
  let code;
switch (country) {
  case 'india':
 code = "+91";
    break;
  case 'pakistan':
  code  = "+92";
    break;
  case 'nepal':
  code = "+977";
    break;
  case 'bangladesh':
  code = "+880";
    break;
  case 'japan':
  code = "+81";
    break;
  case 'srilanka':
  code = "+94";
    break;
    default:
        code ="+91";
}
 document.getElementById('countrycode').innerHTML = code;
//  console.log(code,'code')
}


// Main validaion to return true or false on submit
function validate() {
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
// let email = document.getElementById('email').value;
let phnum = document.getElementById("phnum").value;

let boolean = findnum(fname);
boolean += findnum(lname);
boolean += num(phnum);
if(boolean != 0){
    // console.log('input fields are not correct');
    return false;
}

alert('submitted');
return true;


}


// function to validate Text inputs
function findnum(data) {
var output = "";
if (data.length <= 2 || data.trim() == "") {
  output = "name is too short. ";
  return 1; // returning 1, if the statement is false
} else if (name(data) != null) {
  output += " Numbers or special characters are not allowed";
  return 1; // returning 1, if the statement is false
}
return 0; // returning 0, if the statement is true

}


//Function to find if there are any special characters or numbers in a string
function name(element) {
return element.match(/[0-9]/g);
}


//Function to validate Number input
function num(data) {
if (data.length != 10 || isNaN(data)) {
    return 1; // returning 1, if the statement is false
}
return 0; // returning 0, if the statement is true
}



