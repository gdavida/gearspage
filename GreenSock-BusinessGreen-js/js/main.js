// When the DOM is ready - MORPH1 triangle to hex
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle = document.getElementById("triangle");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle, 1, {morphSVG:"#hexagon"})
  
  

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



// When the DOM is ready - MORPH3 almost gears to gears
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle = document.getElementById("triangle");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle, 1, {morphSVG:"#almostGear"})
  
  

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





// When the DOM is ready - MORPH3 almost gears to gears
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic(),
  triangle = document.getElementById("triangle");
  // Create Animation for 0.5s
  var tween1 = TweenLite.to(triangle, 1, {morphSVG:"#completeGear"})
  
  

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


