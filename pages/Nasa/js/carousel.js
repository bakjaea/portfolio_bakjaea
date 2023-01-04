var carousel = document.querySelector('.carousel');
var carouselPivot = carousel.querySelector('.carousel-pivot');

var carouselRadius = 520;
var carouselRotation = 0;
var carouselTilt = 0;
var carouselVelocity = 10;
var carouselIsDragging = false;
var carouselDragPosition;

function start() {
   var items = carouselPivot.children;
   var arc = 360 / items.length;
   for(var i = 0; i<items.length; i++) {
     var item = items[i];
     item.style.transform = 'translate3d(-50%, -50%, 0) rotateY(' + (i * arc) + 'deg) translateZ(' + (carouselRadius * 2) + 'px)'
   }
}

function dragStart(position) {
  carouselIsDragging = true;
  carouselVelocity = 0;
  carouselDragPosition = position.x;
}

function dragMove(position) {
    carouselVelocity = Math.atan2(position.x - carouselDragPosition, carouselRadius * 2) * 180 / Math.PI;
    carouselDragPosition = position.x;
}

function dragEnd(position) {
  carouselIsDragging = false;
}

function update() {
  carouselRotation += carouselVelocity;
  
  if(!carouselIsDragging) {
    carouselVelocity *= 0.95;
  }
  
  carouselTilt += (carouselVelocity * 0.1 - carouselTilt) / 10;
  
  carouselPivot.style.transform = 'translateZ(-'+ carouselRadius * 2 +'px) rotateX(' + -carouselTilt + 'deg) rotateY(' + carouselRotation + 'deg) ';
}

(function(){
  var location = function(evt) {
    var t1 = evt.touches, t2 = evt.changedTouches;
    var s = (t1 && t1[0]) || (t2 && t2[0]) || evt;
    return {x:s.pageX, y:s.pageY};
  };
  var prevent = function(evt) {
    evt.preventDefault();
  };
  var handler = function(evt) {
    switch(evt.type) {
      case 'mousedown':
        add(document, ['mousemove', 'mouseup']);
      case 'mousedown':
      case 'touchstart':
        prevent(evt);
        dragStart(location(evt));
        break;
      case 'mousemove':
      case 'touchmove':
        dragMove(location(evt));        
        break;
      case 'mouseup':
        remove(document, ['mousemove', 'mouseup']);
      case 'mouseup':
      case 'touchend':
      case 'touchcancel':
        dragEnd(location(evt));
        break;
    }
  };
  var add = function(target, events) {
    for(var i = 0; i<events.length; i++) {
      target.addEventListener(events[i], handler);
    }
  };
  var remove = function(target, events) {
    for(var i = 0; i<events.length; i++) {
      target.removeEventListener(events[i], handler);
    }
  };
 
  add(carousel, ['mousedown', 'touchstart', 'touchmove', 'touchend', 'touchcancel']);
  carousel.ondragstart = function() { return false; };
})();

(function() {
  var timestamp = window.performance ? function(){return window.performance.now()/1000;} : function(){return new Date().getTime()/1000;};
  var requestFrame = window.requestAnimationFrame || function(callback) {setTimeout(callback, 16);};
  start();
  var time = timestamp();
  var enterFrame = function() {
    var now = timestamp();
    var delta = now - time;
    time = now;
    update(delta);
    requestFrame(enterFrame);
  };
  requestFrame(enterFrame);
})();