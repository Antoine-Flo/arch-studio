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