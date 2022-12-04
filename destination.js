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

var destinations = {
    moon : {
        image: 'image-moon.png',
        destinationTitle: 'MOON',
        destinationInfo: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 KM',
        time: '3 DAYS'
    },
    mars : {
        image: 'image-mars.png',
        destinationTitle: 'MARS',
        destinationInfo: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MİL. KM',
        time: '9 months'
    },
    europa : {
        image: 'image-europa.png',
        destinationTitle: 'EUROPA',
        destinationInfo: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '628 mil. km',
        time: '3 years'
    },
    titan : {
        image: 'image-titan.png',
        destinationTitle: 'TITAN',
        destinationInfo: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '1.6 bil. km',
        time: '7 years'
    }
}

function setHtml () {

    $('.home').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.home-text').css('margin-bottom', '-2px');
      }, function(){
        $(this).css('border-bottom', '0px')
        $('.home-text').css('margin-bottom', '0px');
      });
    $('.crew').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.crew-text').css('margin-bottom', '-2px');
      }, function(){
        $(this).css('border-bottom', '0px')
        $('.crew-text').css('margin-bottom', '0px');
      });
    $('.technology').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.technology-text').css('margin-bottom', '-2px');
      }, function(){
        $(this).css('border-bottom', '0px')
        $('.technology-text').css('margin-bottom', '0px');
      });

    $('.mars').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.mars-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.mars-text').css('margin-bottom', '0px');
    });
    $('.europa').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.europa-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.europa-text').css('margin-bottom', '0px');
    });
    $('.titan').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.titan-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.titan-text').css('margin-bottom', '0px');
    });

    $('.moon').click(function(){

        $('.destination-image').css('background-image', 'url('+destinations.moon.image+')');

        $('.mars').css('border-bottom', '0px');
        $('.mars-text').css('margin-bottom', '0px');
        $('.europa').css('border-bottom', '0px');
        $('.europa-text').css('margin-bottom', '0px');
        $('.titan').css('border-bottom', '0px');
        $('.titan-text').css('margin-bottom', '0px');
        
        $('.moon').css('border-bottom', 'solid 2px #FFFFFF');
        $('.moon-text').css('margin-bottom', '-2px');
        $('.destination-title').html('<h1>MOON</h1>');
        $('.destination-info').html('<p>'+ destinations.moon.destinationInfo +'</p>');
        $('.distance').html('<h6>AVG. DISTANCE</h6><p>'+ destinations.moon.distance.toUpperCase() +'</p>');
        $('.time').html('<h6>EST. TRAVEL TIME</h6><p>'+ destinations.moon.time.toUpperCase() +'</p>');
      });

    $('.mars').click(function(){

        $('.destination-image').css('background-image', 'url('+destinations.mars.image+')');

        $('.moon').css('border-bottom', '0px');
        $('.moon-text').css('margin-bottom', '0px');
        $('.europa').css('border-bottom', '0px');
        $('.europa-text').css('margin-bottom', '0px');
        $('.titan').css('border-bottom', '0px');
        $('.titan-text').css('margin-bottom', '0px');
        
        $('.mars').css('border-bottom', 'solid 2px #FFFFFF');
        $('.mars-text').css('margin-bottom', '-2px');
        $('.destination-title').html('<h1>MARS</h1>');
        $('.destination-info').html('<p>'+ destinations.mars.destinationInfo +'</p>');
        $('.distance').html('<h6>AVG. DISTANCE</h6><p>'+ destinations.mars.distance.toUpperCase() +'</p>');
        $('.time').html('<h6>EST. TRAVEL TIME</h6><p>'+ destinations.mars.time.toUpperCase() +'</p>');

        $('.moon').hover(function(){
            $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
            $('.moon-text').css('margin-bottom', '-2px');
        }, function(){
            $(this).css('border-bottom', '0px')
            $('.moon-text').css('margin-bottom', '0px');
        });
    
      });

      $('.europa').click(function(){

        $('.destination-image').css('background-image', 'url('+destinations.europa.image+')');

        $('.moon').css('border-bottom', '0px');
        $('.moon-text').css('margin-bottom', '0px');
        $('.mars').css('border-bottom', '0px');
        $('.mars-text').css('margin-bottom', '0px');
        $('.titan').css('border-bottom', '0px');
        $('.titan-text').css('margin-bottom', '0px');
        
        $('.europa').css('border-bottom', 'solid 2px #FFFFFF');
        $('.europa-text').css('margin-bottom', '-2px');
        $('.destination-title').html('<h1>EUROPA</h1>');
        $('.destination-info').html('<p>'+ destinations.europa.destinationInfo +'</p>');
        $('.distance').html('<h6>AVG. DISTANCE</h6><p>'+ destinations.europa.distance.toUpperCase() +'</p>');
        $('.time').html('<h6>EST. TRAVEL TIME</h6><p>'+ destinations.europa.time.toUpperCase() +'</p>');
        
        $('.moon').hover(function(){
            $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
            $('.moon-text').css('margin-bottom', '-2px');
        }, function(){
            $(this).css('border-bottom', '0px')
            $('.moon-text').css('margin-bottom', '0px');
        });
      });

      $('.titan').click(function(){

        $('.destination-image').css('background-image', 'url('+destinations.titan.image+')');

        $('.moon').css('border-bottom', '0px');
        $('.moon-text').css('margin-bottom', '0px');
        $('.mars').css('border-bottom', '0px');
        $('.mars-text').css('margin-bottom', '0px');
        $('.europa').css('border-bottom', '0px');
        $('.europa-text').css('margin-bottom', '0px');
        
        $('.titan').css('border-bottom', 'solid 2px #FFFFFF');
        $('.titan-text').css('margin-bottom', '-2px');
        $('.destination-title').html('<h1>TITAN</h1>');
        $('.destination-info').html('<p>'+ destinations.titan.destinationInfo +'</p>');
        $('.distance').html('<h6>AVG. DISTANCE</h6><p>'+ destinations.titan.distance.toUpperCase() +'</p>');
        $('.time').html('<h6>EST. TRAVEL TIME</h6><p>'+ destinations.titan.time.toUpperCase() +'</p>');
        
        $('.moon').hover(function(){
            $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
            $('.moon-text').css('margin-bottom', '-2px');
        }, function(){
            $(this).css('border-bottom', '0px')
            $('.moon-text').css('margin-bottom', '0px');
        });
      });
}


(function initialize(){
    setStyle();
    setHtml();
})();