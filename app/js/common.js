// $(function() {

// 	$('body').fadeOut(1500);

// });

$(document).ready(function() {

	// slick

	$('.customers__wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });

  // AOS init
  AOS.init({
    disable: function () {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  }
  });




  // masked input
  $(function () {
    $.mask.definitions['~'] = "[+-]";
    $(".form-group .masked-input").mask("8(999)-999-99-99", {
      placeholder: " "
    });
  });





	// forms

  // first screen form

  $(function() {


  document.getElementById('first-form-attach').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "js/mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('.vertical-form__form, .vertical-form__thanks').addClass('active');
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
          $.fancybox.close();
        }, 5000);
      }
    }
    http.onerror = function() {
      $('.vertical-form__form, .vertical-form__thanks').removeClass('active');
      $('.vertical-form__form').addClass('danger');
      th.trigger("reset");
      alert('Извините, данные не были переданы');
  }
    http.send(new FormData(f));
  }, false);

});


    // second screen form

  $(function() {


  document.getElementById('second-form-attach').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "js/mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('.vertical-form__form, .vertical-form__thanks').addClass('active');
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
          $.fancybox.close();
        }, 5000);
      }
    }
    http.onerror = function() { alert('Извините, данные не были переданы'); }
    http.send(new FormData(f));
  }, false);

});

    // third screen form

  $(function() {


  document.getElementById('third-form-attach').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "js/mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('.vertical-form__form, .vertical-form__thanks').addClass('active');
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
          $.fancybox.close();
        }, 5000);
      }
    };
    http.onerror = function() { alert('Извините, данные не были переданы'); }
    http.send(new FormData(f));
  }, false);

});


    // third screen form

  $(function() {


  document.getElementById('form-modal').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "js/mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('.vertical-form__form, .vertical-form__thanks').addClass('active');
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
          $.fancybox.close();
        }, 5000);
      }
    }
    http.onerror = function() { alert('Извините, данные не были переданы'); }
    http.send(new FormData(f));
  }, false);

});

















});


