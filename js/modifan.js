 /* buat close dropdown setiap click */
  $('nav ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });

  /* buat smooth scroll */
  $(function() {
    $('a.page-scroll').on('click', function(event) {
      var $anchor = $(this);
      var target = $($anchor.attr('href'));

      // Pastikan target ada sebelum melakukan scroll
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault(); // Mencegah aksi default (perpindahan langsung)
      }
    });
  });

  /* buat button pagetop */
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function() {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });

    $('#back-to-top').tooltip('show');
  });

$(document).ready(function() {
  // Get current year
  const currentYear = new Date().getFullYear();
  
  // Update the copyright year in footer
  $('#year').text(currentYear);  // Ganti dari '#footer-year' ke '#year'
  
  // Calculate age based on birthdate
  const birthDate = new Date(1994, 9, 26); // Month is 0-based, so 9 is October
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--; // Subtract one if the birthday hasn't occurred yet this year
  }

  // Update the age in the content
  $('#age').text(age);
});

  // JavaScript untuk mengubah tinggi gap saat ukuran layar berubah
  $(window).on('resize', function() {
    const gapElement = $('.gap');
    
    if ($(window).width() <= 480) {
      gapElement.css('height', '70px'); // Ubah untuk smartphone
    } else if ($(window).width() <= 768) {
      gapElement.css('height', '50px'); // Ubah untuk tablet
    } else {
      gapElement.css('height', '50px'); // Ubah untuk layar besar
    }
  }).trigger('resize'); // Trigger resize event saat halaman pertama kali dimuat