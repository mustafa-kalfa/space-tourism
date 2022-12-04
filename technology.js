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

var technology = [
    {
      "name": "Launch vehicle",
      "image": "image-launch-vehicle-portrait.jpg",
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "image": "image-spaceport-portrait.jpg",
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "image": "image-space-capsule-portrait.jpg",
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

function setHtml () {

    $('.home').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.home-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.home-text').css('margin-bottom', '0px');
    });

    $('.destination').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.destination-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.destination-text').css('margin-bottom', '0px');
    });

    $('.crew').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.crew-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.crew-text').css('margin-bottom', '0px');
    });

    $('.point1').click(function(){
        $('h1').html(technology[0].name.toUpperCase());
        $('.terminology-info').html(technology[0].description).css('margin-bottom', '120px');
        $('.main-image').css('background-image', 'url('+technology[0].image+')');

        $('.point1').css({'background-color': '#FFFFFF','border': '1px solid rgba(255, 255, 255, .25)'});
        $('.point1-text').css('color','#0B0D17');
        $('.point2').css('background-color', 'transparent');
        $('.point2-text').css('color','#FFFFFF');
        $('.point3').css('background-color', 'transparent');
        $('.point3-text').css('color','#FFFFFF');
    });

    $('.point2').click(function(){
        $('h1').html(technology[1].name.toUpperCase());
        $('.terminology-info').html(technology[1].description).css('margin-bottom', '120px');
        $('.main-image').css('background-image', 'url('+technology[1].image+')');
        
        $('.point1').css({'background-color': 'transparent','border': '1px solid rgba(255, 255, 255, .25)'})
        $('.point1').hover(function(){
                $(this).css('border', '1px solid #FFFFFF')
            }, function(){
                $(this).css('border', '1px solid rgba(255, 255, 255, .25)')
            });
        $('.point1-text').css('color','#FFFFFF');
        $('.point2').css('background-color', '#FFFFFF');
        $('.point2-text').css('color','#0B0D17');
        $('.point3').css('background-color', 'transparent');
        $('.point3-text').css('color','#FFFFFF');
    });

    $('.point3').click(function(){
        $('h1').html(technology[2].name.toUpperCase());
        $('.terminology-info').html(technology[2].description).css('margin-bottom', '120px');
        $('.main-image').css('background-image', 'url('+technology[2].image+')');

        $('.point1').css({'background-color': 'transparent','border': '1px solid rgba(255, 255, 255, .25)'});
        $('.point1').hover(function(){
                $(this).css('border', '1px solid #FFFFFF')
            }, function(){
                $(this).css('border', '1px solid rgba(255, 255, 255, .25)')
            });
        $('.point1-text').css('color','#FFFFFF');
        $('.point2').css('background-color', 'transparent');
        $('.point2-text').css('color','#FFFFFF');
        $('.point3').css('background-color', '#FFFFFF');
        $('.point3-text').css('color','#0B0D17');
    });
}

(function initialize(){
    setStyle();
    setHtml();
})();