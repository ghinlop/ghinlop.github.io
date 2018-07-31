$(document).ready(function () {
})

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    mousewheel: {
        invert: true,
      },
      forceToAxis: true
  });

  swiper.on('slideChange', function(){
    _log($('.swiper-slide-active'))
  })

function product_filter() {
    let _search = $('[gh-filter]').val().toUpperCase();
    let _iTarget = $('[gh-filter]').attr('gh-filter');
    let items_arr = $(_iTarget).find('[gh-item]')
    for (let i = 0; i < items_arr.length; i++) {
        let _txt = $(items_arr[i]).text().toUpperCase().indexOf(_search);
        if (_txt > -1) {
            $(items_arr[i]).parent().parent().removeClass('d-none').addClass('d-block')
        } else {
            $(items_arr[i]).parent().parent().removeClass('d-block').addClass('d-none')
        }
    }
}


function _log(val) {
    console.log(val);
}