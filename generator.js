var password = document.getElementById("password");
const range = document.getElementById("length-slider");
const number = document.getElementById("length-number");
const passwordContainer = document.querySelector(".pass-container");

// charcater code array
const UPPERCASE = generateNumbersArray(65, 90);
const LOWERCASE = generateNumbersArray(97, 122);
const NUMBERS = generateNumbersArray(48, 57);
const SYMBOLS = generateNumbersArray(34, 47).concat(
  generateNumbersArray(58, 64)
);
let passwordLength = 12;

function generateNumbersArray(LowNumber, HighNumber) {
  let characterCodeArray = [];
  for (let i = LowNumber; i <= HighNumber; i++) {
    characterCodeArray.push(i);
  }
  return characterCodeArray;
}

function genPassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  let characterCodes = [];
  if (includeLowerCase) characterCodes = characterCodes.concat(LOWERCASE);
  if (includeUpperCase) characterCodes = characterCodes.concat(UPPERCASE);
  if (includeNumbers) characterCodes = characterCodes.concat(NUMBERS);
  if (includeSymbols) characterCodes = characterCodes.concat(SYMBOLS);

  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    let characterCode =
      characterCodes[Math.floor(Math.random() * characterCodes.length)];
    password += String.fromCharCode(characterCode);
    console.log(characterCode);
  }
  return password;
}

function updatePasswod() {
  passwordLength = number.value;
  const includeUpperCase = document.getElementById("uppercase").checked;
  const includeLowerCase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  passwordContainer.value = genPassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("password copied");
}
range.value = number.value = passwordLength;

range.addEventListener("input", (e) => {
  number.value = e.target.value;
});

number.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value > 20) {
    value = 20;
  }
  e.target.value = value;
  range.value = value;
});
