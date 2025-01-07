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
//увеличение текста при наведении в навбвре
$('nav ul li a').hover(
    function() {
        
$(this).css({'transform':'scale(1.1)', 'transition':'all 0.3s'});
    },
    function() {
        
$(this).css({'transform':'scale(1)'});
    }
);






























