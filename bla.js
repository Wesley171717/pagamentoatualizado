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
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}