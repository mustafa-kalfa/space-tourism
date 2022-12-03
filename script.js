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



function setHtml () {
    $('.mars').click(function(){
        $('.moon').css('border-bottom', '0px');
        $('.moon-text').css('margin-bottom', '0px');
        $('.europa').css('border-bottom', '0px');
        $('.europa-text').css('margin-bottom', '0px');
        $('.titan').css('border-bottom', '0px');
        $('.titan-text').css('margin-bottom', '0px');
        $('.mars').css('border-bottom', 'solid 2px #FFFFFF');
        $('.mars-text').css('margin-bottom', '-2px');
        $('.destination-title').html('<h1>MARS</h1>');
        $('.destination-info').html('<p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>');
        $('.distance').html('<h6>AVG. DISTANCE</h6><p>225 MIL. KM</p>');
        $('.time').html('<h6>EST. TRAVEL TIME</h6><p>9 DAYS</p>');
      });
}

(function initialize(){
    setStyle();
    setHtml();
})();