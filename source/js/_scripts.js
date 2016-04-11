var viewportHeight = $(window).height();

$(document).ready(function() {
  $('#show_nav').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
  
  $('#show_beach').click(function(e) {
    e.preventDefault();
    $('#lifes_a_beach').toggleClass('is-active');
  });
  
  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
  coded = "yimeyLj@lLjpHmpF.m5"
  key = "S8ej2ow4rXZHz6PcvktVdFMW5nqiE1hANRuQJyalbD9OpsmYKBIGx7fCUL03gT"
  var shift = coded.length;
  var mail_to_link = "";

  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      mail_to_link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      mail_to_link += (key.charAt(ltr));
    }
  }

  var email = "tristam";
  var domain = "damnfine.io";
  $('.js-mailto-link').attr('href', 'mailto:'+mail_to_link).html(email+'@'+domain);
});
