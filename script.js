"use strict";
// Simulating a loading delay
window.onload = function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden'); // Start the fade-out transition
        // Wait for the transition to finish before hiding the element
        setTimeout(function () {
            loadingScreen.style.display = 'none'; // Hide it completely
            // document.getElementById('content')!.style.display = 'block'; // Show content
        }, 1500); // Match this delay with the transition duration
    }, 2000); // 2000 milliseconds = 2 seconds
};
const buttons = document.querySelectorAll('.showHideButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        // Toggle the display property
        if (targetDiv?.style.display === 'none') {
            targetDiv.style.display = 'block';
        }
        else {
            targetDiv.style.display = 'none';
        }
    });
});
// Get the color input and the div element
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('main');
// Add an event listener to the color input
colorPicker?.addEventListener('input', function () {
    // Change the background color of the div based on the selected color
    colorBox.style.backgroundColor = colorPicker.value;
});
// Fuction to create br Element
function createBrElement() {
    const addBrElement = document.createElement('br');
    return addBrElement;
}
// Adding Education in Form
const addEducationButton = document.querySelector('.addEducationButton');
addEducationButton?.addEventListener('click', () => {
    const targetId = document.getElementsByClassName('educationInfo')[0];
    // Getting Fieldset Element
    const fieldsetElement = targetId.getElementsByTagName('fieldset')[0].getElementsByClassName('addEducationButton')[0];
    const addEducationLevelLabelElement = document.createElement('label');
    addEducationLevelLabelElement.setAttribute('for', 'formEducationLevel');
    addEducationLevelLabelElement.innerHTML = 'Qualification';
    const addEducationLevelInputElement = document.createElement('input');
    addEducationLevelInputElement.setAttribute('class', 'qualification');
    addEducationLevelInputElement.setAttribute('type', 'text');
    addEducationLevelInputElement.setAttribute('title', 'formEducationLevel');
    const addEducationInstituteLabelElement = document.createElement('label');
    addEducationInstituteLabelElement.setAttribute('for', 'formEducationLevel');
    addEducationInstituteLabelElement.innerHTML = 'Name of School / College / University';
    const addEducationInstituteInputElement = document.createElement('input');
    addEducationInstituteInputElement.setAttribute('class', 'institute');
    addEducationInstituteInputElement.setAttribute('type', 'text');
    addEducationInstituteInputElement.setAttribute('title', 'formEducationInstitute');
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addEducationLevelLabelElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addEducationLevelInputElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addEducationInstituteLabelElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addEducationInstituteInputElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
});
// Adding Skill in Form
const addSkillButton = document.querySelector('.addSkillButton');
addSkillButton?.addEventListener('click', () => {
    const targetID = document.getElementsByClassName('skillInfo')[0];
    const fieldsetElement = targetID.getElementsByTagName('fieldset')[0].getElementsByClassName('addSkillButton')[0];
    const skillInputElement = document.createElement('input');
    skillInputElement.setAttribute('type', 'text');
    skillInputElement.setAttribute('title', 'formSkills');
    targetID.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetID.getElementsByTagName('fieldset')[0].insertBefore(skillInputElement, fieldsetElement);
    targetID.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
});
// Adding Language in Form
const addSLanguageButton = document.querySelector('.addLanguageButton');
addSLanguageButton?.addEventListener('click', () => {
    const targetID = document.getElementsByClassName('languageInfo')[0];
    const fieldsetElement = targetID.getElementsByTagName('fieldset')[0].getElementsByClassName('addLanguageButton')[0];
    const languageInputElement = document.createElement('input');
    languageInputElement.setAttribute('type', 'text');
    languageInputElement.setAttribute('title', 'formSkills');
    targetID.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetID.getElementsByTagName('fieldset')[0].insertBefore(languageInputElement, fieldsetElement);
    targetID.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
});
// Adding Experience in Form
const addExperienceButton = document.querySelector('.addExperienceButton');
addExperienceButton?.addEventListener('click', () => {
    const targetId = document.getElementsByClassName('experienceInfo')[0];
    // Getting Fieldset Element
    const fieldsetElement = targetId.getElementsByTagName('fieldset')[0].getElementsByClassName('addExperienceButton')[0];
    const addExperienceYearLabelElement = document.createElement('label');
    addExperienceYearLabelElement.setAttribute('for', 'formExperienceYear');
    addExperienceYearLabelElement.innerHTML = 'Year';
    const addExperienceYearInputElement = document.createElement('input');
    addExperienceYearInputElement.setAttribute('class', 'formYear');
    addExperienceYearInputElement.setAttribute('type', 'date');
    addExperienceYearInputElement.setAttribute('title', 'formExperienceYear');
    const addExperienceCompanyLabelElement = document.createElement('label');
    addExperienceCompanyLabelElement.setAttribute('for', 'formCompanyName');
    addExperienceCompanyLabelElement.innerHTML = 'Company / Organization';
    const addExperienceCompanyInputElement = document.createElement('input');
    addExperienceCompanyInputElement.setAttribute('class', 'formCompany');
    addExperienceCompanyInputElement.setAttribute('type', 'text');
    addExperienceCompanyInputElement.setAttribute('title', 'formCompanyName');
    const addExperiencePositionLabelElement = document.createElement('label');
    addExperiencePositionLabelElement.setAttribute('for', 'formExperiencePosition');
    addExperiencePositionLabelElement.innerHTML = 'Position';
    const addExperiencePositionInputElement = document.createElement('input');
    addExperiencePositionInputElement.setAttribute('class', 'formPosition');
    addExperiencePositionInputElement.setAttribute('type', 'text');
    addExperiencePositionInputElement.setAttribute('title', 'formExperiencePosition');
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperienceYearLabelElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperienceYearInputElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperienceCompanyLabelElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperienceCompanyInputElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperiencePositionLabelElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(addExperiencePositionInputElement, fieldsetElement);
    targetId.getElementsByTagName('fieldset')[0].insertBefore(createBrElement(), fieldsetElement);
});
// Upload Image Function Starts
// HTML Elements
const imageInput = document.getElementById('image');
const profileImage = document.querySelector('.profile');
// Function to handle image upload and storage
function handleImageUpload(event) {
    const target = event.target;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        // When file is successfully read
        reader.onload = function (e) {
            const base64Image = e.target?.result;
            // Update the profile image src
            if (profileImage) {
                profileImage.src = base64Image;
            }
            // Store the image in localStorage
            localStorage.setItem('profileImage', base64Image);
        };
        // Read the file as a data URL (base64 encoded)
        reader.readAsDataURL(file);
    }
}
// Load the stored image from localStorage (if any)
function loadStoredImage() {
    const storedImage = sessionStorage.getItem('profileImage');
    if (storedImage && profileImage) {
        profileImage.src = storedImage;
    }
}
// Event listener for image upload input
if (imageInput) {
    imageInput.addEventListener('change', handleImageUpload);
}
// Load the image on page load
window.addEventListener('DOMContentLoaded', loadStoredImage);
// Upload Image Function Ends
function validateEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Test the email against the regex
    return emailRegex.test(email);
}
// Example usage:
document.getElementById('formEmail')?.addEventListener('input', function () {
    const emailInput = document.getElementById('formEmail');
    const errorMessage = document.getElementById('errorMessage');
    if (emailInput.validity.valid) {
        errorMessage.textContent = ''; // Clear error message
    }
    else {
        // Show error message if the email is invalid
        if (emailInput.value === '') {
            errorMessage.textContent = 'Email is required.';
        }
        else if (!validateEmail(emailInput.value)) {
            errorMessage.textContent = 'Please enter a valid email address.';
        }
    }
});
// Print the CV
document.getElementById('downloadButton')?.addEventListener('click', () => {
    window.print();
});
// Submit CV Button
const formSubmitButton = document.querySelector('.formSubmitButton');
formSubmitButton?.addEventListener('click', () => {
    const name1 = document.getElementsByClassName('formName')[0].value;
    const niche = document.getElementsByClassName('formNiche')[0].value;
    const email = document.getElementsByClassName('formEmail')[0].value;
    if (validateEmail(email) && niche && name1) {
        {
            // Adding Name to CV
            const formName = document.querySelector('.formName').value;
            const cvName = document.getElementsByClassName('cvName')[0];
            cvName.innerHTML = formName;
            // Adding Niche to CV
            const formNiche = document.querySelector('.formNiche').value;
            const cvNiche = document.getElementsByClassName('cvNiche')[0];
            cvNiche.innerHTML = formNiche;
            // Adding About to CV
            const formAbout = document.querySelector('.formAbout').value;
            const cvAbout = document.getElementsByClassName('cvDescription')[0];
            cvAbout.innerHTML = formAbout;
            // Adding Contact Number to CV
            const formNumber = document.querySelector('.formNumber').value;
            const cvNumber = document.getElementById('cvContactNumber');
            cvNumber.innerHTML = formNumber;
            // Adding Contact Number to CV
            const formAddress = document.querySelector('.formAddress').value;
            const cvAddress = document.getElementById('cvContactAddress');
            cvAddress.innerHTML = formAddress;
            // Adding Contact Number to CV
            const formEmail = document.getElementsByClassName('formEmail')[0].value;
            const cvAEmail = document.getElementById('cvContactEmail');
            cvAEmail.innerHTML = formEmail;
            // Adding Skills to CV
            const formSkills = document.getElementsByClassName('skillInfo')[0].getElementsByTagName('input');
            for (const element of formSkills) {
                const cvSkillElement = document.querySelector('#cvSkills');
                const newEl = document.createElement('li');
                newEl.innerHTML = element.value;
                cvSkillElement?.append(newEl);
            }
            // Adding Languages to CV
            const formLanguages = document.getElementsByClassName('languageInfo')[0].getElementsByTagName('input');
            for (const element of formLanguages) {
                const cvLanguageElement = document.querySelector('#cvLanguages');
                const newEl = document.createElement('li');
                newEl.innerHTML = element.value;
                cvLanguageElement?.append(newEl);
            }
            function returnGreaterForTwo(a, b) {
                if ((a.length > b.length)) {
                    return a;
                }
                else {
                    return b;
                }
            }
            // Adding Academics to CV
            const formQualifications = document.querySelectorAll('.qualification');
            const formInstitutes = document.querySelectorAll('.institute');
            const cvEducationDiv = document.querySelector('#cvEducationDiv');
            for (let element = 0; element < returnGreaterForTwo(formInstitutes, formQualifications).length; element++) {
                const cvBElement = document.createElement('b');
                cvBElement.setAttribute('id', 'cvEducationLevel');
                const cvPElement = document.createElement('p');
                cvPElement.setAttribute('id', 'cvEducationInstitute');
                const formQualificationValue = formQualifications[element].value;
                cvBElement.append(formQualificationValue);
                const formInstituteValue = formInstitutes[element].value;
                cvPElement.append(formInstituteValue);
                cvEducationDiv?.appendChild(cvBElement);
                cvEducationDiv?.appendChild(cvPElement);
                cvEducationDiv?.appendChild(createBrElement());
            }
            // Adding Academics to CV
            const formYear = document.querySelectorAll('.formYear');
            const formCompany = document.querySelectorAll('.formCompany');
            const formPosition = document.querySelectorAll('.formPosition');
            const cvExperienceDiv = document.querySelector('#Experience');
            function returnGreaterForThree(a, b, c) {
                if ((a.length > b.length) && (a.length > c.length)) {
                    return a;
                }
                else if ((b.length > a.length) && (b.length > c.length)) {
                    return b;
                }
                else {
                    return c;
                }
            }
            for (let element = 0; element < returnGreaterForThree(formYear, formCompany, formPosition).length; element++) {
                const cvYearElement = document.createElement('li');
                cvYearElement.setAttribute('class', 'cvExperienceYear');
                const cvCompanyElement = document.createElement('li');
                cvCompanyElement.setAttribute('class', 'cvExperienceCompany');
                const cvPositionElement = document.createElement('li');
                cvPositionElement.setAttribute('class', 'cvExperiencePosition');
                const formYearValue = formYear[element].value;
                cvYearElement.append(formYearValue);
                const formCompanyValue = formCompany[element].value;
                cvCompanyElement.append(formCompanyValue);
                const formPositionValue = formPosition[element].value;
                cvPositionElement.append(formPositionValue);
                cvExperienceDiv?.appendChild(cvYearElement);
                cvExperienceDiv?.appendChild(cvCompanyElement);
                cvExperienceDiv?.appendChild(cvPositionElement);
                cvExperienceDiv?.appendChild(createBrElement());
            }
        }
        document.getElementById('resume').style.display = 'block';
    }
    else {
        alert('Please Enter Name, Niche, and Valid Email');
        window.location.reload();
    }
});
