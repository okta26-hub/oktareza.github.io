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


// Fungsi untuk menyesuaikan tinggi elemen gap
function adjustGapHeight() {
  const gapElement = document.querySelector('.gap');

  if (gapElement) {
    // Ambil tinggi viewport dengan fallback
    const viewportHeight = window.visualViewport
      ? window.visualViewport.height
      : document.documentElement.clientHeight;

    console.log(`Viewport Height: ${viewportHeight}px`);

    if (window.innerWidth <= 480) {
      // Untuk perangkat kecil (mobile)
      gapElement.style.height = `${viewportHeight * 0.8}px`;
    } else if (window.innerWidth <= 768) {
      // Untuk tablet
      gapElement.style.height = `${viewportHeight * 0.1}px`;
    } else {
      // Untuk layar besar
      gapElement.style.height = '150px';
    }

    console.log(`Gap height set to: ${gapElement.style.height}`);
  }
}

// Event Listener: Panggil fungsi saat halaman dimuat atau ukuran layar berubah
window.addEventListener('resize', adjustGapHeight);
window.addEventListener('load', adjustGapHeight);


// Event Listener: Panggil fungsi saat halaman dimuat atau ukuran layar berubah
window.addEventListener('resize', adjustGapHeight);
window.addEventListener('load', adjustGapHeight);
