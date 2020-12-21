/////////// Tabs //////////////

const btns = document.querySelectorAll('.slider__num');
const about = document.querySelector('.slider')
const sliders = document.querySelectorAll('.slider__content')


about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    console.log(btns);

    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        sliders.forEach((slider) => {
            slider.classList.remove('open')
        })

        const element = document.getElementById(id)
        element.classList.add('open')
    }
})

//////////////// Form ///////////////////

function validateForm() {
    var formName = document.forms["contact-form"]["name"].value;
    var formEmail = document.forms["contact-form"]["email"].value;
    var formMessage = document.forms["contact-form"]["message"].value;



    if (formName == "") {
        let nameInput = document.getElementById("form-name");
        nameInput.classList.add("form__invalid")
        return false;

    } else if (formEmail == "") {

        let emailInput = document.getElementById("form-email");
        console.log(emailInput);
        emailInput.classList.add("form__invalid")
        return false;

    } else if (formMessage == "") {
        let emailInput = document.getElementById("form-text");
        emailInput.classList.add("form__invalid")
        return false;
    }
}