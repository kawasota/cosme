
// ハンバーガーメニューをクリックしたり画面をスクロールした際に、色を変える
$('.js-btn').on('click', function () {

  $('.header-menu , .btn-line').toggleClass('open');
  $('.btn').toggleClass('active');

  let scroll = $(window).scrollTop();

    if( $('.btn').hasClass('active') ){
      $('.btn').css('background-color','transparent'); 

    } else if( !$('.btn').hasClass('active') ) {
      $('.btn').css('background-color','#ffffff');
      
      if ( scroll > 80 ) {
      $('.btn').css('background-color','transparent');
      }
    }
})

// スクロールした時にハンバーガーボタンの色を変える
$(window).on('scroll', function () { 

  let scroll = $(window).scrollTop();
  
  if( scroll > 80 ) {
    $('.btn').css('background-color','transparent');

  } else if ( scroll < 80 ) {
    $('.btn').css('background-color','#ffffff');

    if( $('.btn').hasClass('active') ){
      $('.btn').css('background-color','transparent');
    }
  }
})


// window.addEventListener("scroll",function(){

//   let scroll = window.pageYOffset;
  
//   if( scroll > 80) {
//     document.querySelector('.btn').style.backgroundColor = 'transparent';
//   } else if ( scroll < 80 ) {
//     document.querySelector('.btn').style.backgroundColor = '#ffffff';
//   }
// });
