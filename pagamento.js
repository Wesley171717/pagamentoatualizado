$(function() {
    $('#cardnumber').payment('formatCardNumber');
    $('#cardexpiration').payment('formatCardExpiry');
    $('#cardcvc').payment('formatCardCVC');
    
    $('#cardnumber').keyup(function(event) {
      $('#label-cardnumber').empty().append($(this).val());
    });
    
    $('#cardexpiration').keyup(function(event) {
      var data = $(this).val() + '<span>' + $('#cardcvc').val() + '</span>';
      $('#label-cardexpiration').empty().append(data);
    });
    
    $('#cardcvc').keyup(function(event) {
      var data = $('#cardexpiration').val() + '<span>' + $(this).val() + '</span>';
      $('#label-cardexpiration').empty().append(data);
    });
    
    $('.button-cta').on('click', function () { 
      var proceed = true;
      $(".field input").each(function(){
        $(this).parent().find('path').each(function(){
          $(this).attr('fill', '#dddfe6');
        });
        
        if(!$.trim($(this).val())){
          $(this).parent().find('path').each(function(){
            $(this).attr('fill', '#f1404b');
            proceed = false;
          });
          
          if(!proceed){
            $(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '1'}, "slow");
          }
        }
      });
         
      if(proceed) //everything looks good! proceed purchase...
      {
        $('.field').find('path').each(function(){
          $(this).attr('fill', '#3ac569');
        });
        $('.payment').fadeToggle('slow', function() {
          $('.paid').fadeToggle('slow', 'linear');
        });
      }
    });
  });










// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()