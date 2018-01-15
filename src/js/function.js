$(document).ready(function(){
  $(window).scroll(function() {
    if($(this).scrollTop()>50){
      $(".navbar").addClass('sticky').animate({
        top: 0
      });    
    } else {
      $(".navbar").removeClass('sticky');
    }  
  })
});
