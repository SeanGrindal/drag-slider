import { initialize } from './core/initialize'

export default class DragSlider {
   constructor(element, options = {}) {
      if (typeof element === 'string') {
         element = document.querySelector(element)
      }

      if (!element || !element.nodeName) {
         throw new Error('No element was found to init DragSlider')
      }

      this.element = element

      this.options = {
         dragSpeed: options.dragSpeed || 2
      }
   }

   init() {
      initialize(this)

      return this
   }
}
