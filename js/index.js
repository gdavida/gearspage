
(function ( $ ) {
	'use strict';
   $.fn.heightFull = function() {
	var totalHeight = $('window').height();
	var heightMinus = totalHeight;
	$(this).css('height', heightMinus);
  };
}( jQuery ));

$(".main .item").heightFull();
$(window).resize(function() {
  $(".main .item").heightFull();
});

$(".main").onepage_scroll({
   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "cubic-bezier(0.175, 0.885, 0.420, 1.210)", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000, // AnimationTime let you define how long each section takes to animate
   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 600 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
});

// 
// Should remove the class of "hidden" from the #animation div when the #payments div is near the house
// 

var visibilePoint = document.getElementById("payments");
var animation = document.getElementById("animation");

function myFunction() {
    if (visibilePoint.position < 50) {
        $('animation').removeClass( "hidden" );
    } 
}


// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle1 = document.getElementById("triangle1");

  var tween1 = TweenLite.to(triangle1, 1, {morphSVG:"#square1"});
      TweenMax.to('.gearItem', 5, {rotation:-360, transformOrigin: '53.3% 54.7%', ease:Linear.easeNone, repeat:-1});
  
  var animation = document.getElementById("animation");

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph1',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});

// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle3 = document.getElementById("triangle2");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle2, 1, {morphSVG:"#square2"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph1',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});
// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle2 = document.getElementById("triangle3");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle3, 1, {morphSVG:"#square3"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph1',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});











// 
// 
// 
// 
// v v v v v MORPH 2 v v v v v
// 


// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  square1 = document.getElementById("square1");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle1, 1, {morphSVG:"#hexagon1"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph2',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});

// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
 square2 = document.getElementById("square2");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle2, 1, {morphSVG:"#hexagon2"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph2',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});
// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  square3 = document.getElementById("square3");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle3, 1, {morphSVG:"#hexagon3"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph2',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});










// 
// 
// 
// 
// v v v v v MORPH 3 v v v v v
// 


// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  hexagon1 = document.getElementById("hexagon1");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle1, 1, {morphSVG:"#completeGear1"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph3',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});

// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
 hexagon2 = document.getElementById("hexagon2");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle2, 1, {morphSVG:"#completeGear2"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph3',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});
// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  hexagon3 = document.getElementById("hexagon3");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle3, 1, {morphSVG:"#completeGear3"})
  
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph3',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
  
});






