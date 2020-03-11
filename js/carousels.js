$(function(){

  


  // vars for clients list carousel

  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script

  var $clientcarousel = $('#clients-list');


  var clients = $clientcarousel.children().length;

  var clientwidth = (clients * 1000); // 140px width for each client item

  $clientcarousel.css('width',clientwidth);


  var rotating = true;

  var clientspeed = 15000;

  var seeclients = setInterval(rotateClients, clientspeed);



  $(document).on({

    mouseenter: function(){

      rotating = false; // turn off rotation when hovering

    },

    mouseleave: function(){

      rotating = true;

    }

  }, '#clients');

  

  function rotateClients() {

        if(rotating != false) {

            var $first = $('#clients-list li:first');

            $first.animate({ 'margin-left': '-160px' }, 70, function() {

                $first.remove().css({ 'margin-left': '0px' });

                $('#clients-list li:last').after($first);

            });

        }

    }


});

$(function(){




    // vars for clients list carousel

    // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script

    var $clientcarousel2 = $('#clients-list2');

    var clients2 = $clientcarousel2.children().length;

    var clientwidth2 = (clients2 * 1000); // 140px width for each client item

    $clientcarousel2.css('width',clientwidth2);



    var rotating = true;

    var clientspeed = 15000;

    var seeclients2 = setInterval(rotateClients2, clientspeed);



    $(document).on({

        mouseenter: function(){

            rotating = false; // turn off rotation when hovering

        },

        mouseleave: function(){

            rotating = true;

        }

    }, '#clients');



    function rotateClients2() {

        if(rotating != false) {

            var $first2 = $('#clients-list2 li:first');

            $first2.animate({ 'margin-right': '160px' }, 70, function() {

                $first2.remove().css({ 'margin-right': '0px' });

                $('#clients-list2 li:last').after($first2);

            });

        }

    }


});