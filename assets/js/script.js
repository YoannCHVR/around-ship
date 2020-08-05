window.onload = init;

var viewportWidth = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;

var documentWidth = document.body.clientWidth;
var documentHeight = document.body.clientHeight;

function init() {
  if (window.Event) {
    document.captureEvents(Event.MOUSEMOVE);
  }

  //starting on center of the map
  window.addEventListener("beforeunload", function () {
    window.scrollTo((documentWidth / 2) - (viewportWidth / 2), (documentHeight / 2) - (viewportHeight / 2));
  });

  //disable arrow and space keys
  window.addEventListener("keydown", function(e) {
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  });

  //disable right click menu
  window.addEventListener('contextmenu', event => event.preventDefault());

  //call cursor position on mouse move
  window.onmousemove = getCursorXY;
}

function getCursorXY(e) {
  let x = (window.Event) ? e.pageX : 0;
  let y = (window.Event) ? e.pageY : 0;

  console.log("x:" + x + "; y:" + y);
}

console.log(documentWidth);
console.log(viewportHeight);
