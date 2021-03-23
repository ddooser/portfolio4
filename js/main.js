$(document).ready(function () {

    $('.catalog__nav a').click(function (e) {
        e.preventDefault();
        $('.catalog__nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('.catalog__main').hide()
    $('.category-rolls').show()

    $('.cat-rolls').click(function () {
        $('.catalog__main').hide()
        $('.category-rolls').show()
    });
    $('.cat-pizza').click(function () {
        $('.catalog__main').hide()
        $('.category-pizza').show()
    });
    $('.cat-burger').click(function () {
        $('.catalog__main').hide()
        $('.category-burger').show()
    });
    $('.cat-salat').click(function () {
        $('.catalog__main').hide()
        $('.category-salat').show()
    });
    $('.cat-hot').click(function () {
        $('.catalog__main').hide()
        $('.category-hot').show()
    });
    const burgerMenu = document.querySelector('.header__burger-menu')
    const navMenu = document.querySelector('.header__navigation')

    burgerMenu.addEventListener('click', function (e) {
        e.preventDefault()
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active')
        navMenu.classList.toggle('_active')
    })

    const a = document.querySelectorAll('.phone')
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== null) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                a[i].setAttribute("href", "tel:+79507000028")
            } else {
                a[i].setAttribute("href", "contacts.html")
            }
        }
    }
});
