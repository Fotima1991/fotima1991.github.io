window.onload = function () {

    /*** DARK_MODE ***/

    const btn = document.querySelector(".btn-toggle");
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    /*** PRELOADER ***/
    
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);

    /*** HEADER_FIXED ***/

    window.addEventListener('scroll', function () {
        const menuScroll = document.getElementById('menu');
        menuScroll.classList.toggle('fixed', window.scrollY > 5);
    });

    /*** SCROLL_SECTIONS_ACTIVE_LINK ***/
    
    const sections = document.querySelectorAll('section[id]');
    function scrollActive(){
        const scrollY = window.pageYOffset
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.menu__items a[href*=' + sectionId + ']').classList.add('active__link')
            } else {
                document.querySelector('.menu__items a[href*=' + sectionId + ']').classList.remove('active__link')
            }
        });
    };
    window.addEventListener('scroll', scrollActive);

    /*** HAMBURGER MENU ***/

    const hamburgerMenu = document.querySelector('header .menu .header__nav .menu__burger');
    const headerMenu = document.querySelector('header .menu .header__nav .menu__items');
    hamburgerMenu.addEventListener('click', function (e) {
        headerMenu.classList.toggle('show');
    });

    /*** BACK ***/

    const toTop = document.querySelector('.to__top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('active');
        } else {
            toTop.classList.remove('active');
        }
    });

    /*** SCROLL_REVEAL_ANIMATION ***/

    const sr = ScrollReveal({
        distance: '30px',
        duration: 1800,
        reset: false,
    });
    sr.reveal(`.services__card`, {
        origin: 'top',
        interval: 500,
    });
    sr.reveal(`.portfolio__card`, {
        origin: 'bottom',
        interval: 500,
    });
    sr.reveal(`.about__title, .description, .person__info__item`, {
        origin: 'right',
        interval: 500,
    });
    sr.reveal(`.me`, {
        origin: 'left',
        interval: 500,
    });
}