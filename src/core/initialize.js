export function initialize(slider) {
   let startScroll = 0
   let startX = null

   const mouseMoveCb = (e) => {
      if (!startX) {
         startX = e.clientX
         startScroll = slider.element.scrollLeft
      }

      let dif = (e.clientX - startX) * slider.options.dragSpeed
      let toScrollTo = startScroll - dif
      const scrollMax = slider.element.scrollWidth

      if (toScrollTo >= scrollMax) {
         toScrollTo = scrollMax
      } else if (toScrollTo < 0) {
         toScrollTo = 0
      }

      slider.element.scrollTo(toScrollTo, 0)
   }

   const mouseUpCb = () => {
      slider.element.removeEventListener('mousemove', mouseMoveCb)

      startX = null
      slider.element.classList.remove('dragging')
   }

   const mouseDownCb = () => {
      slider.element.classList.add('dragging')

      slider.element.addEventListener('mousemove', mouseMoveCb)
   }

   slider.element.addEventListener('mousedown', mouseDownCb)

   slider.element.addEventListener('mouseup', mouseUpCb)
}
