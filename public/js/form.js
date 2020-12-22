//////////////// Form ///////////////////



const btn = document.querySelector('.form__btn');
const form = document.getElementById('form');
const formInputs = document.querySelectorAll('.form__input');

// const emptyTexts = document.querySelectorAll('.form__empty');


form.addEventListener('keydown', (e) => {
    const id = e.target.dataset.id;


    formInputs.forEach(input => {


        if(!input.value) {
            input.classList.add("form__invalid")
            input.parentNode.classList.add("form__item--invalid")
        } else {
            input.classList.remove("form__invalid")
            input.parentNode.classList.remove("form__item--invalid")
        }
    });
    
})




// function validateForm() {
//     var formName = document.forms["contact-form"]["name"].value;
//     var formEmail = document.forms["contact-form"]["email"].value;
//     var formMessage = document.forms["contact-form"]["message"].value;



//     if (formName == "") {
//         let nameInput = document.getElementById("form-name");
//         nameInput.classList.add("form__invalid")
//         return false;

//     } else if (formEmail == "") {

//         let emailInput = document.getElementById("form-email");
//         console.log(emailInput);
//         emailInput.classList.add("form__invalid")
//         return false;

//     } else if (formMessage == "") {
//         let emailInput = document.getElementById("form-text");
//         emailInput.classList.add("form__invalid")
//         return false;
//     }
// }