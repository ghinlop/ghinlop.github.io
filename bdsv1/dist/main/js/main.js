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

    if ($('[selectbox]')) {
        slcBtn('[selectbox]')
    }

    
    if($('[getImgHeader]').length > 0){
        const allImgContent = $('[getImgHeader]').find('img')
        $('[imgHeaderJS]').append(
            `<img src="${allImgContent[0].currentSrc}" alt="${allImgContent[0].currentSrc}" />`
        )
    }

    var currentID = null;
    $('[tabs-role]').find('[tab-action]').click((e) => {
      e.preventDefault();
      let id = e.currentTarget.hash.split('#')[1];
      var isTarget = $('#'+id);
      var op = 0;
      if(isTarget && id !== currentID){
        var tabContent = $('[tabs-content]').find('#'+id);
      $('[tab-action]').removeClass('active show');
      $('[tabs-content]').find(`.active.show`).removeClass('active show');
      $(tabContent).addClass('active');
        $(isTarget).addClass('active')
        setTimeout(()=>{
         $(isTarget).addClass('show')
          var opSet =  setInterval(() => {
           if(op <= 1){
             $(tabContent).attr('style', 'opacity:'+ op);
             op = op + 0.3;
           }else{
             $(tabContent).removeAttr('style');
             clearInterval(opSet);
            $(tabContent).addClass('show');
           }
         },50);
        },400)
        currentID = id;
      }
    });
    if($('[slider]')){
        const sliderTarget = $('[slider]');
        for(let val of sliderTarget){
            let sliderTarget = null
            ,   thumbTarget = null
            for(let atr of val.attributes){
                // console.log(atr)
                if(atr.nodeName === 'slider'){
                    sliderTarget = atr.nodeValue
                }
                if(atr.nodeName === 'sliderthumb'){
                    thumbTarget = atr.nodeValue
                }
            }
            // console.log(sliderTarget, thumbTarget)
            getSlider(sliderTarget, thumbTarget)
        }
    }
})

function getSlider(sliderTarget, thumbTarget = null){
    var galleryTop = new Swiper(sliderTarget, {
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

    if(thumbTarget !== null){
        var galleryThumbs = new Swiper(thumbTarget, {
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
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }
}

var map;
if($('[mapcontent]').length > 0){
    function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 15
        });
    }
}






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