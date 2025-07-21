const SliderCoffee = new Swiper ('.swiper-coffee',{
    slidesPerView: '4',
    spaceBetween: '0',
    allowTouchMove: false,
    allowSlideNext: true,
    allowSlidePrev: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type:	'bullets', 
        dynamicBullets: true,
    },

    navigation:{
        nextEl: '.button-next-coffee',
        prevEl: '.button-prev-coffee',
    }

});
const SliderDessert = new Swiper ('.swiper-dessert',{
    slidesPerView: '4',
    spaceBetween: '0',
    allowTouchMove: false,
    allowSlideNext: true,
    allowSlidePrev: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type:	'bullets', 
        dynamicBullets: true,
    },

    navigation:{
        nextEl: '.button-next-dessert',
        prevEl: '.button-prev-dessert',
    }

});