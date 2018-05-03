$(document).ready(() => {
    $('.--js_dropdown').hover(
        function () {
            var isTarget = $(this).find('.--sub_drop')
            $(isTarget).addClass('active');
            var i = 0;
            let callOp = setInterval(function () {
                if (i < 1) {
                    $(isTarget).attr('style', `opacity: ${i}`)
                    i += .3;
                } else {
                    $(isTarget).removeAttr('style');
                    $(isTarget).addClass('show');
                    clearInterval(callOp)
                }
            }, 50)
        },
        function () {
            var isTarget = $(this).find('.--sub_drop')
            $(isTarget).removeClass('active show');
        }
    );

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
    if ($('[selectbox]')) {
        slcBtn('[selectbox]')
    }
})

var galleryTop = new Swiper('.slider-top', {
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var galleryThumbs = new Swiper('.slider-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

function slcBtn(target) {
    $(target).hover(
        function(){
            var idTarget = this.attributes[1].nodeValue
            $(this).click( (e) => {
                $(this).addClass('active')
            })
            selInput(idTarget, $(this).find('.--select_content').find('li a'))
        },
        function(){
            $(this).removeClass('active')
        }
    )
}
function selInput(id, target){
   target.click((e) => {
        let val = $(e)[0].target.attributes[1].nodeValue
        $(id).val(val)
    })
}