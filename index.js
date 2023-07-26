const strengther = document.querySelector('.meter');
const passwordInput = document.querySelector('input[type="text"]');
const passwordCheck = document.querySelector('.password-check');

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
    strengther.computedStyleMap.setProperty('--meter-amount', strength);
}