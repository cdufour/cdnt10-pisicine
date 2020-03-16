// Exo 2

(function() {

// Constants
const NAME_MIN_LEN  = 3;
const PWD_MIN_LEN   = 6;

// DOM targetting
let txtName         = document.getElementById('txtName');
let txtPwd          = document.getElementById('txtPwd');
let btnSubmit       = document.getElementById('btnSubmit');

// Events
txtName.addEventListener('keyup', e => checkConditions(e))
txtPwd.addEventListener('keyup', e => checkConditions(e))

// Functions
function checkConditions(e) {
    let disabled = true; // bouton désactivé par défaut
    let isNameLengthOk  = txtName.value.length >= NAME_MIN_LEN;
    let isPwdLengthOk   = txtPwd.value.length >= PWD_MIN_LEN;

    if (isNameLengthOk && isPwdLengthOk) {
        console.log('hasANumberValue', hasANumberValue(txtPwd.value));
        console.log('HasAUpperCaseValue', HasAUpperCaseValue(txtPwd.value));
        disabled =  !(hasANumberValue(txtPwd.value) && HasAUpperCaseValue(txtPwd.value));
    }

    btnSubmit.disabled = disabled;
}

function hasANumberValue(str) {
    for(let i=0; i<str.length; i++)
        if (!isNaN(str[i])) return true;
    return false;
}

function HasAUpperCaseValue(str) {
    for(let i=0; i<str.length; i++)
        if (isUpperCase(str[i])) return true;
    return false;
}

// Variante sytaxique. La fonction est ici assignée à une variable. 
// La fonction exécute une expression régulière (regexp) renvoyant
// true si la totalité de la chaîne est en haut de casse.
const isUpperCase = (str) => /^[A-Z]*$/.test(str);


})()