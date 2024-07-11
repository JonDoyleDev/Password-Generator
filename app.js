const passwordBox = document.getElementById("password")
const pswLength = Math.floor(Math.random() * 7) + 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWRXYZ';
const lowerCase = 'abcdefghijklmnaopqrstuvwxyz'
const number = '012345789'
const symbol = '!@#$%^&*=+-'
const allChars = upperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(pswLength > password.length){ 
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
}

function copyPassword(){
    const passwordBox = document.getElementById('password');
    const password = passwordBox.value;
    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy password. Please copy it manually.');
        });
}