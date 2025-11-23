import { generateCanvasHome } from './fluid-core'

let canvasInitialized = false

export function initHeroFluidAnimation(container, options = {}) {
  if (!container) return () => {}
  if (canvasInitialized) return () => {}

  const { removeExistingGradient = false } = options

  const canvas = document.createElement('canvas')
  canvas.className = 'hero-bg'
  canvas.style.position = 'absolute'
  canvas.style.inset = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  

  if (removeExistingGradient) {
    const gradient = container.querySelector('.gradient')
    if (gradient) {
      gradient.remove()
    }
  }

  container.appendChild(canvas)
  generateCanvasHome(canvas)
  canvasInitialized = true

  return () => {
    canvasInitialized = false
    try {
      canvas.remove()
    } catch (error) {
      // ignore
    }
  }
}