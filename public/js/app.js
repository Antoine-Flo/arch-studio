function slide(id) {

    let allSlides = Array.from(document.getElementsByClassName('slider__content'));
    let targetSlide = document.getElementById("slide-" + id);
    let button = document.getElementById(id);

    console.log(button);

    allSlides.forEach(slide => {
        if (slide.id === targetSlide.id) {
            slide.classList.add('open')
            slide.classList.remove('hide')
            // slide.style.opacity = 0;
        } else {
            // console.log("nope " + slide.id + " " + targetSlide.id);
            slide.classList.add('hide')
            slide.classList.remove('open')
        }

    });

    // function hide(elements) {
    //     elements = elements.length ? elements : [elements];
    //     for (var index = 0; index < elements.length; index++) {
    //         elements[index].style.display = 'none';
    //     }
    // }

}