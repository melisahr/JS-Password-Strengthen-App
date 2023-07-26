const strengther = document.querySelector('.meter');
const passwordInput = document.querySelector('input[type="text"]');
const passwordCheck = document.querySelector('.password-check');


//Create password input eventlistener
passwordInput.addEventListener('input', updateStrengther)
function updateStrengther(){
    const assessments = calculatePasswordStrength(passwordInput.value);

    let strength = 100;
    passwordCheck.innerHTML = "";

    assessments.forEach(assessment => {
        if(assessment == null) return;

        strength -= assessment.strengthLost;
        const pwdCheckElem = document.createElement('p');
        pwdCheckElem.innerHTML = assessment.pwdCheck;
        passwordCheck.appendChild(pwdCheckElem);
    });
    strengther.style.setProperty("--meter-amount", strength);
}

//Function for calculating the password strength
function calculatePasswordStrength(password){
    const assessment = [];
    assessment.push(lengthAssessment(password));
    assessment.push(lowercaseAssessment(password));
    assessment.push(uppercaseAssessment(password));
    return assessment;
}
//Length Assessment function
function lengthAssessment(password){
    const length = password.length;
    //console.log(length);
    if(length <= 5){
        return{
            pwdCheck: "Password is too short",
            strengthLost: 40,
        };
    }
    if(length <= 10){
        return{
            pwdCheck:"Password could be longer",
            strengthLost:15,
        };
    }
}
//Lowercase character assessment function
function lowercaseAssessment(password){
    const charMatch = password.match(/[a-z]/g) || [];
    //console.log(charMatch);

    if(charMatch.length === 0){
        return{
            pwdCheck: "Password has no lowercase character",
            strengthLost: 20,
        };
    }
    if(charMatch.length <= 2){
        return{
            pwdCheck:"Password needs more lowercase character",
            strengthLost: 5,
        };
    }
}
//Uppercase character assessment function
function uppercaseAssessment(password){
    const charMatch = password.match(/[A-Z]/g) || [];

    if(charMatch.length === 0){
        return{
            pwdCheck: "Password has no uppercase character",
            strengthLost: 20,
        };
    }
    if(charMatch.length <= 2){
        return{
            pwdCheck:"Password needs more uppercase character",
            strengthLost: 5,
        };
    }
}