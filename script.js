

window.onload = function () {
    document.querySelector('.preloader').classList.add('_un_active');
    var referrer_url = document.documentURI;
    let a = referrer_url.split('#')[referrer_url.split('#').length - 1];
    console.log('-----------');
    console.log(referrer_url);
    console.log(a);
    let id_1 = document.getElementById(a);
    console.log(id_1);
    // console.log(id_1);
    id_1.querySelector('.section__active').classList.toggle('_active');
    id_1.querySelector('.section__view').classList.toggle('_active');
    id_1.querySelector('.h3_box').classList.toggle('_active');
    // gsap.registerPlugin(Flip);

    // const dur = 2;
    // let lastItems = [];
    // let lastIndex = -1;

    // const listItems = gsap.utils.toArray('#a1 h3');
    // listItems.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         // Get all content within the clicked item
    //         const itemTargets = gsap.utils.toArray(item.querySelectorAll('*'));
    //         console.log(itemTargets);
    //         // Check to see if the item is the same one as the last time
    //         const isSameAsLast = i === lastIndex && listItems[lastIndex];
            
    //         // Get all the items that are changing this click
    //         const targets = isSameAsLast ? 
    //         listItems.concat(itemTargets) 
    //         : listItems.concat(itemTargets.concat(lastItems));
            
    //         // grab the current state of the targets (before changing)
    //         const state = Flip.getState(targets);
            
    //         // Animate out the last clicked item if it's not the same as the current
    //         if(!isSameAsLast && listItems[lastIndex]) {
    //         listItems[lastIndex].classList.remove('active');
    //         }

    //         // Toggle the display on the clicked item
    //         listItems[i].classList.toggle('active');
            
    //         Flip.from(state, {
    //         duration: dur,
    //         ease: "power1.inOut",
    //         absolute: true, // make things position: absolute during the flip
    //         nested: true,   // we've got nested flipping elements (more expensive processing)
    //         // Fade in or out the elements within the item
    //         onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, duration: dur / 2, delay: dur / 2}),
    //         onLeave: elements => gsap.fromTo(elements, {opacity: (i, el) => state.getProperty(el, "opacity")}, {opacity: 0, duration: dur / 2}),
    //         });
            
    //         // Update our variables
    //         lastItems = itemTargets;
    //         lastIndex = i;
    //     });
    // });

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
