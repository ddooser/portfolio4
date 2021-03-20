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

    const a = document.querySelector('.phone')
    if (a !== null) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            a.setAttribute("href", "tel:8950700028")
        } else {
            a.setAttribute("href", "contacts.html")
        }
    }
});
