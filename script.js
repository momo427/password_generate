// Assignment Code
//the links to the DOM 
const passwordEl = document.querySelector("#password");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const generateBtn = document.querySelector("#generate");


//Put function in object 
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Add event listener to generate button to get the values
generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  //function that does the actual password generation 
  passwordEl.innerText = writePassword(length, hasUpper, hasLower, hasNumber, hasSymbol,);

});

//Generate password function

function writePassword(length, upper, lower, number, symbol) {
  //1.Have a string that built with value types
  //2.Filter out unchecked types
  //3.Loop over length call generator function for each type
  //4.Add final pw to the pw var and return 
  let writePassword = '';


  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }
  //for loop, if i is less than to length; i increments with variable types
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];

      writePassword += randomFunction[functionName]();
    });
  }
  const finalPassword = writePassword;

  return finalPassword;

}

//Generate functions using fromCharCode to pull characters
//Math.random to generate random decimal and the Math.floor to get whole number
// Use of mutiplication(*26)and addition(+97)to get desired characters
//fot 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbol = '!@#$%^&*(){}"?+_';
  return symbol[Math.floor(Math.random() * symbol.length)];
}



