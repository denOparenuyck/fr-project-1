const swiper = new Swiper('.gallery-list', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 12.5,
  speed: 1000,
});


new Swiper('.preview-list', {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  speed: 1000,
});




$('.info-more').on('click', function () {

  let fullHeight = document.querySelector('.info-text').scrollHeight;

  $(this).css('display', 'none');
  $('.info-text').css('height', fullHeight);
  $('.info-text').css('overflow-y', 'scroll');

});


$('.full-info__item-header').each(function (index) {
  $(this).on('click', function () {
    $('.full-info__item-text').eq(index).stop().slideToggle();
  });
});