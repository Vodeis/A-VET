"use strict";

document.querySelector('.header__burger-menu').addEventListener('click', () => {
    document.querySelector('.header__nav__container').classList.toggle('header__nav__container--active')
})
document.querySelector('.header--md__languages').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('.header--md__languages .header--md__nav__item').forEach(e => e.classList.toggle('lang--active'))
})
if (document.querySelector('.btn__all-services')) {
    document.querySelector('.btn__all-services').addEventListener('click', e => {
        document.querySelector('.all-services__arrow-down').classList.toggle('all-services__arrow-down--active');
        document.querySelector('.all-services__arrow-up').classList.toggle('all-services__arrow-up--active');
        document.querySelectorAll('.our-services__item--hide').forEach(e => {
            if (document.querySelector('.all-services__arrow-down').classList.contains('all-services__arrow-down--active')) {
                e.style.display = 'none';
            } else {
                e.style.display = 'block';
            }
        })
    })
}
if (document.querySelector('.chip__right-container__show-more')) {
    document.querySelector('.chip__right-container__show-more').addEventListener('click', e => {
        e.target.style.display = 'none';
        document.querySelector('.about-chip__section--hide').style.display = 'block';
    })
    document.querySelector('.btn-hide').addEventListener('click', () => {
        document.querySelector('.chip__right-container__show-more').style.display = 'block';
        document.querySelector('.about-chip__section--hide').style.display = 'none';
    })
}

// document.querySelector('.header--md__nav__container').addEventListener('click', (e)=> {
//     if (e.target.tagName === 'A') {
//         document.querySelector('.header--md__nav__item.header--md__nav__item--active').classList.remove('header--md__nav__item--active');
//         e.target.classList.add('header--md__nav__item--active');
//     }
// })

