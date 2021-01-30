'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _initialize = require('./core/initialize');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragSlider = function () {
   function DragSlider(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DragSlider);

      if (typeof element === 'string') {
         element = document.querySelector(element);
      }

      if (!element || !element.nodeName) {
         throw new Error('No element was found to init DragSlider');
      }

      this.element = element;

      this.options = {
         dragSpeed: options.dragSpeed || 2
      };
   }

   _createClass(DragSlider, [{
      key: 'init',
      value: function init() {
         (0, _initialize.initialize)(this);

         return this;
      }
   }]);

   return DragSlider;
}();

exports.default = DragSlider;