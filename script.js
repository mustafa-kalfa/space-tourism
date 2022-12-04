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
    $('.technology').hover(function(){
        $(this).css('border-bottom', 'solid 2px rgb(255, 255, 255, 0.5)');
        $('.technology-text').css('margin-bottom', '-2px');
    }, function(){
        $(this).css('border-bottom', '0px')
        $('.technology-text').css('margin-bottom', '0px');
    });

    $('.explore').hover(function(){
        $(this).css('cursor', 'pointer');
        $('.explore-container').css('background-color', 'rgb(255, 255, 255, .1)');
    }, function(){
        $('.explore-container').css('background-color', 'transparent');
    });

}

(function initialize(){
    setStyle();
    setHtml();
})();