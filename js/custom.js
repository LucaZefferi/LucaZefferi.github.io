(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  // SEND EMAIL
  $(function () {
    $('#SendEmail').click(function (event) {
      var name = $('#name').val();
      var surname = $('#surname').val();
      var subject = "Hi Luca, I'm " + name + " " + surname;
      var emailBody = $('#message').val();
      var email = 'zefferiluca@gmail.com';

      var fields = [name, surname, subject, emailBody];

      if (validate(fields)) {
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
      } 
    });
  });


  // VALIDATE CONTACT FORM

      function validate(fields) {
        var isValid = true;
        fields.forEach(function(field) {
            if (field == undefined || field == "") {
                $('#errorFormContact').show();
                isValid = false;
            }
        });
        if (isValid) {
            $('#errorFormContact').hide();
        }
        return isValid;
    }
        

    function downloadFile() {
  
      var a = document.createElement('a');

      a.href = 'file:../documents/Zefferi_Luca_CV.pdf';
    
      a.download = 'Zefferi_Luca_CV';
      
      a.target = '_blank';
      
      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
  }
  
 
  document.getElementById('downloadResume').addEventListener('click', downloadFile);
  

})(jQuery);
