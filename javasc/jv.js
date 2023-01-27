$('.button-king').on('click', function(e) {
  let id = $('.alert').val();
  if(id. length > 0){
    $('.red-alert').css('visibility', 'hidden');
  } else {
    e.preventDefault()
    $('.red-alert').attr('style','visibility:visible');
  } 
})


// $('.button-king').on('click', function() {
//   var a = 5;
//   var b = 10;
//   if(id > a && id < b){
//     $('.red-alert').text('멋진 아이디네요!');
//   } else{
//     $('.red-alert').text('5~20자의 영문소문자만 사용가능합니다.');
//   }
// }) 
