new WOW().init();
$(function(){
    "use strict";
    var mainWindow = $(window);
    var height = mainWindow.height()/2;
    var bar = $("#side-bar");
    var old_value = mainWindow.scrollTop();
    $(window).scroll();
    $(window).scroll(function(e){
        var scrolltop = mainWindow.scrollTop();
    
        if(scrolltop > height && old_value <= scrolltop /*&& old_value < height*/){
            bar.removeClass('collapsed');
        }
        else if(scrolltop < height && old_value >= scrolltop /*&& old_value > height*/){
            bar.addClass('collapsed');
        }
        old_value = scrolltop;
    });
    var call = $('#call');
    var call_dropdown = $('#call_dropdown');
    call_dropdown.css('display', 'none');
    call.hover(
        function(){
            call_dropdown.css('display', 'block');
            call_dropdown.toggleClass('collapsed');
        },
        function(){
            call_dropdown.toggleClass('collapsed');
            setTimeout(function(){
                call_dropdown.css('display', 'none');
            }, 300);
        }
    )
});
ymaps.ready(init); 
var myMap; 
var PlaceMarks = []; 
var k = 0; 
function AddMark(name, source, coordinates) { 
    PlaceMarks[k] = new ymaps.Placemark(coordinates, { 
            hintContent: name, 
            balloonContent: name, 
            myID: k 
        }, { 
        iconLayout: 'default#image', 
        iconImageHref: source, 
        iconImageSize: [50, 71.3], 
        iconImageOffset: [-25, -71.3] 
    }); 
    k++; 
} 

function init() { 
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            float: 'none',
            position: {
                bottom: '60px',
                right: '60px'
            } 
        }
    }),
    myMap = new ymaps.Map("map", { 
        center: [55.697449, 37.579591], 
        zoom: 16,
        controls: [zoomControl] 
    }), 
    myPlacemark = AddMark('', '../Content/Images/Icons/placeholder.svg', [55.697449, 37.579591]);
    for (var i = 0; i < k; i++) { 
        myMap.geoObjects.add(PlaceMarks[i]); 
    }
    myMap.behaviors.disable('scrollZoom');
    
}


$("#main_caret_button").click(function(){
    $(".caret-container").addClass('visible');
});

$("#close_caret").click(function(){
    $(".caret-container").removeClass('visible');
});

$("#menu_button").click(function(){
    var navbar = $('#mainNav');
    var IsExpanded = $('#bs-example-navbar-collapse-1').attr('aria-expanded');
    var scrolltop = $(window).scrollTop();
    if((IsExpanded == 'false' || IsExpanded == undefined) && scrolltop == 0) {
        navbar.addClass('black');
    }
    else{
        navbar.removeClass('black');
    }
});

$('a.page-scroll').bind('click', function(event) {
    var currentScroll = $('html, body').scrollTop();
    var $anchor = $(this);
    var targetHeight = $($anchor.attr('href')).offset().top;
    if(targetHeight != 0){
        $('html, body').stop().animate({
            scrollTop: (targetHeight - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    }
    else{
        $('html, body').stop().animate({
            scrollTop: (0)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    }
});
