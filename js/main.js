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

});