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


}

(function initialize(){
    setStyle();
    setHtml();
})();