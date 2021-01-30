'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.initialize = initialize;
function initialize(slider) {
   var startScroll = 0;
   var startX = null;

   var mouseMoveCb = function mouseMoveCb(e) {
      if (!startX) {
         startX = e.clientX;
         startScroll = slider.element.scrollLeft;
      }

      var dif = (e.clientX - startX) * slider.options.dragSpeed;
      var toScrollTo = startScroll - dif;
      var scrollMax = slider.element.scrollWidth;

      if (toScrollTo >= scrollMax) {
         toScrollTo = scrollMax;
      } else if (toScrollTo < 0) {
         toScrollTo = 0;
      }

      slider.element.scrollTo(toScrollTo, 0);
   };

   var mouseUpCb = function mouseUpCb() {
      slider.element.removeEventListener('mousemove', mouseMoveCb);

      startX = null;
      slider.element.classList.remove('dragging');
   };

   var mouseDownCb = function mouseDownCb() {
      slider.element.classList.add('dragging');

      slider.element.addEventListener('mousemove', mouseMoveCb);
   };

   slider.element.addEventListener('mousedown', mouseDownCb);

   slider.element.addEventListener('mouseup', mouseUpCb);
}