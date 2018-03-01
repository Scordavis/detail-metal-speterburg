	// forms

  // first screen form




  $(function() {

  // E-mail Ajax Send
  // http://denis-creative.com/contact-form-with-attached-file/
  // http://shpargalkablog.ru/2014/05/email-file-php.html
  // http://shpargalkablog.ru/2014/05/feedback-form-file.html
  document.getElementById('first-form-attach').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
    http.send(new FormData(f));
  }, false);

});



//   $(function() {


//   document.getElementById('first-form-attach').addEventListener('submit', function(evt){
//     var http = new XMLHttpRequest(), f = this;
//     var th = $(this);
//     evt.preventDefault();
//     http.open("POST", "js/mail.php", true);
//     http.onreadystatechange = function() {
//       if (http.readyState == 4 && http.status == 200) {
//         $('.vertical-form__form, .vertical-form__thanks').addClass('active');
//         setTimeout(function() {
//           // Done Functions
//           th.trigger("reset");
//           $.fancybox.close();
//         }, 5000);
//       }
//     }
//     http.onerror = function() { alert('Извините, данные не были переданы'); }
//     http.send(new FormData(f));
//   }, false);

// });


//     // second screen form

//   $(function() {


//   document.getElementById('second-form-attach').addEventListener('submit', function(evt){
//     var http = new XMLHttpRequest(), f = this;
//     var th = $(this);
//     evt.preventDefault();
//     http.open("POST", "js/mail.php", true);
//     http.onreadystatechange = function() {
//       if (http.readyState == 4 && http.status == 200) {
//         $('.vertical-form__form, .vertical-form__thanks').addClass('active');
//         setTimeout(function() {
//           // Done Functions
//           th.trigger("reset");
//           $.fancybox.close();
//         }, 5000);
//       }
//     }
//     http.onerror = function() { alert('Извините, данные не были переданы'); }
//     http.send(new FormData(f));
//   }, false);

// });

//     // third screen form

//   $(function() {


//   document.getElementById('third-form-attach').addEventListener('submit', function(evt){
//     var http = new XMLHttpRequest(), f = this;
//     var th = $(this);
//     evt.preventDefault();
//     http.open("POST", "js/mail.php", true);
//     http.onreadystatechange = function() {
//       if (http.readyState == 4 && http.status == 200) {
//         $('.vertical-form__form, .vertical-form__thanks').addClass('active');
//         setTimeout(function() {
//           // Done Functions
//           th.trigger("reset");
//           $.fancybox.close();
//         }, 5000);
//       }
//     };
//     http.onerror = function() { alert('Извините, данные не были переданы'); }
//     http.send(new FormData(f));
//   }, false);

// });


//     // third screen form

//   $(function() {


//   document.getElementById('form-modal').addEventListener('submit', function(evt){
//     var http = new XMLHttpRequest(), f = this;
//     var th = $(this);
//     evt.preventDefault();
//     http.open("POST", "js/mail.php", true);
//     http.onreadystatechange = function() {
//       if (http.readyState == 4 && http.status == 200) {
//         $('.vertical-form__thanks').addClass('active');
//         setTimeout(function() {
//           // Done Functions
//           th.trigger("reset");
//           $.fancybox.close();
//         }, 5000);
//       }
//     }
//     http.onerror = function() { alert('Извините, данные не были переданы'); }
//     http.send(new FormData(f));
//   }, false);

// });
