$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/slide/arow_left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide/arow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
        $(this)
          .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    ///Modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

  

    $('.button_mini').each(function(i){
        $(this).on('click',function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

  
    
    function valideForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                } ,
    
                phone: 'required',
    
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:{
                    required:  "Пожалуйста введите имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                  
                },
                phone: 'Пожалуйста введите свой телефон',
    
                email:{
                  required: "Пожалуйста введите свой email",
                  email: "неправильно введен адрес почты name@domain.com"
                }
              }
        });
    };
    

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

$('input[name=phone]').mask("+7 (999) 999-9999")


});