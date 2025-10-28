$(document).ready(function() {
  $('.burger-menu').on('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    $(this).toggleClass('active');
    $('#nav_menu').slideToggle(300); // Анимация открытия/закрытия меню
  });

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.burger-menu, #nav_menu').length) {
      if ($('#nav_menu').is(':visible')) {
        $('.burger-menu').removeClass('active');
        $('#nav_menu').slideUp(300); // Закрытие меню
      }
    }
  });
});



//переход по иконкам
$('#znachki1').on('click', function() {
   window.location.href = 'https://wa.me/79038741898';
});

$('#znachki2').on('click', function() {
   window.location.href = "https://t.me/+79038741898";
});

$('#znachki3').on('click', function() {
   window.location.href = 'https://vk.com/id222603101';
});


//-------------
//крутятся значки






//див3 делаем увеличение текста
$('.div31, .div32').hover(function(){
    $(this).find('h2, p').css({
        'transform': 'scale(1.05)',
        'transition': 'all 0.2s'
    });
}, function(){
    $(this).find('h2, p').css({
        'transform': 'scale(1)',
        'transition': 'all 0.2s'
    });
});


//увеличение текста при наведении в навбвре
$('nav ul li a').hover(
    function() {
        
$(this).css({'transform':'scale(1.3)', 'transition':'all 0.3s','fontSize': '17px', 'overflow': 'hidden' });
    },
    function() {
        
$(this).css({'transform':'scale(1)'});
    }
);

//увеличение текста при наведении
$('#div4 p').hover(
function() {
$(this).css({'fontSize': '17px', 'transition': 'all 0.3s'});
    },
function() {
$(this).css({'fontSize': '16px', 'transition': 'all 0.2s'});
    }
);















