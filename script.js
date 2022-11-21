

window.onload = function () {
    document.querySelector('.preloader').classList.add('_un_active');
    var referrer_url = document.URL;
    if (referrer_url.includes('#')) {
        let a = referrer_url.split('#')[referrer_url.split('#').length - 1];
        let id_1 = document.getElementById(a);

        id_1.querySelector('.section__active').classList.toggle('_active');
        id_1.querySelector('.section__view').classList.toggle('_active');
        id_1.querySelector('.h3_box').classList.toggle('_active');
    }

    document.addEventListener('click', documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        console.log(targetElement.classList)
        if (targetElement.closest('.section__1__active')) {
            document.querySelector('.section__1__active').classList.toggle('_active');
            document.querySelector('.section__1__view').classList.toggle('_active');
            document.querySelector('#a1 .h3_box').classList.toggle('_active');
        }else if (targetElement.closest('.section__2__active')) {
            document.querySelector('.section__2__active').classList.toggle('_active');
            document.querySelector('.section__2__view').classList.toggle('_active');
            document.querySelector('#a2 .h3_box').classList.toggle('_active');

        }else if (targetElement.closest('.section__3__active')) {
            document.querySelector('.section__3__active').classList.toggle('_active');
            document.querySelector('.section__3__view').classList.toggle('_active');
            document.querySelector('#a3 .h3_box').classList.toggle('_active');

        }else if (targetElement.closest('.section__4__active')) {
            document.querySelector('.section__4__active').classList.toggle('_active');
            document.querySelector('.section__4__view').classList.toggle('_active');
            document.querySelector('#a4 .h3_box').classList.toggle('_active');

        }else if (targetElement.closest('.section__5__active')) {
            document.querySelector('.section__5__active').classList.toggle('_active');
            document.querySelector('.section__5__view').classList.toggle('_active');
            document.querySelector('#a5 .h3_box').classList.toggle('_active');

        }
    }

}
