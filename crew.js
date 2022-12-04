var classes = {

}

var selectors = {};

Object.keys(classes).forEach(function (key) {
    selectors[key] = '.' + classes[key];
});

function setStyle () {
    $(selectors.myCustomStyleClass).remove();

    var css ='';

    $('<style/>').html(css).addClass(classes.myCustomStyleClass).appendTo('head');

}

var crew = [
    {
      "name": "Douglas Hurley",
      "image": "image-douglas-hurley.png",
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "image": "image-mark-shuttleworth.png",
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "image": "image-victor-glover.png",
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "image": "image-anousheh-ansari.png",
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ];

function setHtml () {

  $('.destination').hover(function(){
    $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
    $('.destination-text').css('margin-bottom', '-2px');
}, function(){
    $(this).css('border-bottom', '0px');
    $('.destination-text').css('margin-bottom', '0px');
});
$('.home').hover(function(){
    $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
    $('.home-text').css('margin-bottom', '-2px');
}, function(){
    $(this).css('border-bottom', '0px');
    $('.home-text').css('margin-bottom', '0px');
});
$('.technology').hover(function(){
    $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
    $('.technology-text').css('margin-bottom', '-2px');
}, function(){
    $(this).css('border-bottom', '0px');
    $('.technology-text').css('margin-bottom', '0px');
});



  $('.point1').click(function(){
    $('main').css({'width': '1138px','margin-right': '137px'});
    $('.main-image').css({'background-image': 'url('+crew[0].image+')', 'width': '518px', 'height': '712px', 'margin-top': '0px'});
    $('.rank').html(crew[0].role.toUpperCase());
    $('h1').html(crew[0].name.toUpperCase()).css('width', '488px');
    $('.crew-info').html(crew[0].bio).css('margin-bottom', '120px');

    $('.point1').css('background-color', '#FFFFFF');
    $('.point2').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point3').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point4').css('background-color', 'rgba(255, 255, 255, .17)');

    $('.point2').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point3').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point4').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });

  });

  $('.point2').click(function(){
    $('main').css({'width': '1088px','margin-right': '186px'});
    $('.main-image').css({'background-image': 'url('+crew[1].image+')', 'width': '453px', 'height': '654px', 'margin-top': '34px'});
    $('.rank').html(crew[1].role.toUpperCase());
    $('h1').html(crew[1].name.toUpperCase()).css('width', '614px');
    $('.crew-info').html(crew[1].bio).css('margin-bottom', '120px');

    $('.point2').css('background-color', '#FFFFFF');
    $('.point1').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point3').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point4').css('background-color', 'rgba(255, 255, 255, .17)');

    $('.point1').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point3').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point4').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
  });

  $('.point3').click(function(){
    $('main').css({'width': '1132px','margin-right': '142px'});
    $('.main-image').css({'background-image': 'url('+crew[2].image+')', 'width': '554px', 'height': '681px', 'margin-top': '34px'});
    $('.rank').html(crew[2].role.toUpperCase());
    $('h1').html(crew[2].name.toUpperCase()).css('width', '433px');
    $('.crew-info').html(crew[2].bio).css('margin-bottom', '88px');

    $('.point3').css('background-color', '#FFFFFF');
    $('.point1').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point2').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point4').css('background-color', 'rgba(255, 255, 255, .17)');

    $('.point1').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point2').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point4').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
  });

  $('.point4').click(function(){
    $('main').css({'width': '1185px','margin-right': '89px'});
    $('.main-image').css({'background-image': 'url('+crew[3].image+')', 'width': '615px', 'height': '607px', 'margin-top': '82px'});
    $('.rank').html(crew[3].role.toUpperCase());
    $('h1').html(crew[3].name.toUpperCase()).css('width', '532px');
    $('.crew-info').html(crew[3].bio).css('margin-bottom', '120px');
    
    $('.point4').css('background-color', '#FFFFFF');
    $('.point1').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point2').css('background-color', 'rgba(255, 255, 255, .17)');
    $('.point3').css('background-color', 'rgba(255, 255, 255, .17)');

    $('.point1').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point2').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });
    $('.point3').hover(function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .5)');
    }, function(){
      $(this).css('background-color', 'rgba(255, 255, 255, .17)');
    });

  });
}

(function initialize(){
    setStyle();
    setHtml();
})();