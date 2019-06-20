$(document).ready(function(){
  $('.middleText').fadeIn(1200, function(){
    $('.scroll-downs').addClass('anim');
  });

  $('.navbar-toggle').click(function(){
    console.log('Clicked');
    $(this).toggleClass('change');
    $('#myNavbar').slideToggle();
    $('.mobOverlay').toggleClass('show');
    $('body').toggleClass('noscroll');
    if($('.mobOverlay').hasClass('show')){
      $.scrollify.disable();
    }else{
      $.scrollify.enable();
    }    
  });

  $('.mobOverlay').click(function(){
    $(this).removeClass('show');
    $('.navbar-toggle').removeClass('change');
    $('#myNavbar').slideUp();
    $('body').removeClass('noscroll');
    $.scrollify.enable();
  });


  $('input').focus(function(){
    $(this).parents('.formgroup').addClass('focused');
  });
  
  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.formgroup').removeClass('focused');  
    } else {
      $(this).addClass('filled');
    }
  });

  $('#send').click(function () {
    var emailid = $("#ctemail").val();

    if ($('#ctname').val().length == 0) {
      $('#ctsuccess').html("<div class='red'>Please fill your name</div>");
    }

    else if (emailid.length == 0) {
      document.getElementById("ctsuccess").innerHTML = "<div class='red'>Please provide your email.</div>";
    }
    else if (!validateEmail(emailid)) {
      document.getElementById("ctsuccess").innerHTML = "<div class='red'>Invalid email.</div>";
    }

    else if ($('#ctmessage').val().length == 0) {
      $('#ctsuccess').html("<div class='red'>Message cannot be empty </div>");
    }
    else {
      $.ajax({
        url: $('form').attr('action'),
        data: $('form').serialize(),
        type: "POST",
        success:function(data){
            $("#ctsuccess").html(data);
            console.log('success');
            $('.formFeilds').fadeOut('fast');
            // document.getElementById("contactus").reset();
            // $('#ctsuccess').delay(1000).fadeOut("slow", function(){
            //   location.reload();
            // });
        },
        error:function (){}
      });
    }
  });

});

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

$(function() {
    $.scrollify({
        section:".panelBox",
      scrollbars:false,
      updateHash: false,
      before: function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        console.log('Reference===========', ref);
        console.log('Before===========');
        $('.navbar').show();
        if(ref==="home") {
          $(".design .content").removeClass("moved");
          $('.scroll-downs').removeClass('hide');
          $('.scroll-downs').addClass('anim');
        }
        if(ref==="design") {
          $(".design .content").addClass("moved");
          $(".design .textRot").addClass("fadeIn");
          $(".design .textRot .textc1").css('opacity','1');
          $(".design .textRot .textc2").css('opacity','0');
          $(".design .textRot .textc2").css('opacity','0');
          $(".design1 .content").removeClass("moved");
          $('.scroll-downs').removeClass('hide');
          $('.scroll-downs').removeClass('anim');
          if(isMobile()){
            $('.scroll-downs').addClass('hide');
            $('.scroll-downs').removeClass('anim');
          }
        }
        if(ref==="design1") {
          $(".design1 .content").addClass("moved");
          $(".design .textRot .textc1").css('opacity','0');
          $(".design .textRot .textc2").css('opacity','1');
          $(".design .textRot .textc3").css('opacity','0');
          $(".design2 .content").removeClass("moved");
          $('.scroll-downs').removeClass('hide');
          $('.scroll-downs').removeClass('anim');
          if(isMobile()){
            $('.scroll-downs').addClass('hide');
            $('.scroll-downs').removeClass('anim');
          }
        }
        if(ref==="design2") {
          $(".design2 .content").addClass("moved");
          $(".design .textRot .textc1").css('opacity','0');
          $(".design .textRot .textc2").css('opacity','0');
          $(".design .textRot .textc3").css('opacity','1');
          $(".design .gallery0").removeClass('mobanim');
          $('p').removeClass('fd');
          $('.icons').removeClass('zoom');
          $('.textarea').removeClass('op');
          $('.scroll-downs').removeClass('hide');
          $('.scroll-downs').removeClass('anim');
          if(isMobile()){
            $('.scroll-downs').addClass('hide');
            $('.scroll-downs').removeClass('anim');
          }
        }
        if(ref==="dwload") {
          $(".design .gallery0").addClass('mobanim');
          $('.navbar').hide();
          $('p').addClass('fd');
          $('.icons').addClass('zoom');
          $('.textarea').addClass('op');  
          $('.scroll-downs').addClass('hide'); 
          $('.scroll-downs').removeClass('anim'); 
        }
      },
      after:function(i,panels) {
        console.log('After===========');
        var ref = panels[i].attr("data-section-name");
        if(ref==="home"){
          
        }else{
          
        }
      },
      afterResize:initialPosition,
      afterRender:initialPosition
      });
  
    $(".scroll-downs").on("click",function(e) {
        e.preventDefault();
		    $.scrollify.next();
    });

    $('.navbar-brand').click(function(){
      $.scrollify.move("#home");
    });
  
    function initialPosition() {
  
      var current = $.scrollify.current();

      console.log('current', current);
  
    }
  });


// On every refresh page load from top

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

function isMobile() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }