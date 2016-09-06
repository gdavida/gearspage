// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle1 = document.getElementById("triangle1");

  var tween1 = TweenLite.to(triangle1, 1, {morphSVG:"#square1"});
      TweenMax.to('.gearItem', 5, {rotation:-360, transformOrigin: '53.3% 54.7%', ease:Linear.easeNone, repeat:-1});
  

  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#morph1',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween1)
  .addTo(scrollMagicController)
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
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
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
});






