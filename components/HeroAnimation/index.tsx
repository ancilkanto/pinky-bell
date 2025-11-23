'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { debugError } from '@/utils/debug'
import Button from '@/components/Button'
import './style.css'

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const explosionsHolderRef = useRef<HTMLDivElement | null>(null)
  const explosion1Ref = useRef<HTMLDivElement | null>(null)
  const explosion2Ref = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLSpanElement | null>(null)
  const textImageContainerRef = useRef<HTMLSpanElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted state to trigger background change after a small delay
    // This ensures white background is visible initially
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let cleanup: (() => void) | undefined
    let isActive = true

    async function initFluid() {
      try {
        const { initHeroFluidAnimation } = await import('@/vendor/fluid.js')
        if (!isActive || !containerRef.current) return
        cleanup = initHeroFluidAnimation(containerRef.current)
      } catch (error) {
        debugError('Failed to initialise hero fluid animation', error)
      }
    }

    initFluid()

    return () => {
      isActive = false
      if (cleanup) cleanup()
    }
  }, [])

  // Explosion animations positioned around "Award Winning" text and exitement.png
  // Make them repeat at random timings
  useEffect(() => {
    if (!explosionsHolderRef.current || !explosion1Ref.current || !explosion2Ref.current || !textImageContainerRef.current) return

    // Track all timeouts so we can clean them up on unmount
    const timeouts: number[] = []

    const registerTimeout = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay)
      timeouts.push(id)
      return id
    }

    function triggerExplosion(
      explosion: HTMLDivElement | null, 
      offsetX: number, 
      offsetY: number, 
      delay: number,
      size: number,
      animationSpeed: string,
      lineHeight: number
    ): void {
      if (!explosion || !textImageContainerRef.current || !containerRef.current) return

      registerTimeout(() => {
        const textImageElement = textImageContainerRef.current
        if (!textImageElement || !containerRef.current) return

        // Get text and image container position relative to container
        const containerRect = containerRef.current.getBoundingClientRect()
        const textImageRect = textImageElement.getBoundingClientRect()
        
        // Calculate center position of the combined text and image area
        const centerX = textImageRect.left - containerRect.left + textImageRect.width / 2
        const centerY = textImageRect.top - containerRect.top + textImageRect.height / 2

        // Set position around the text and image with offset
        explosion.style.setProperty('--explosion-x', `${centerX + offsetX}px`)
        explosion.style.setProperty('--explosion-y', `${centerY + offsetY}px`)
        
        // Set size
        explosion.style.width = `${size}px`
        explosion.style.height = `${size}px`

        // Show the explosion
        explosion.style.display = 'block'
        
        // Reset and restart animations
        const lines = explosion.querySelectorAll('.explosion-animation-element__line')
        
        // Remove any inline styles that might conflict
        lines.forEach((line) => {
          const lineElement = line as HTMLElement
          lineElement.style.animation = 'none'
          lineElement.style.opacity = '0'
          lineElement.style.visibility = 'hidden'
          lineElement.style.height = `${lineHeight}px`
        })
        explosion.style.animation = 'none'
        
        // Force reflow to ensure animation reset
        void explosion.offsetWidth
        
        // Track animation completion
        let completedLines = 0
        const totalLines = lines.length
        const maxDelay = (totalLines - 1) * 0.05
        const animationDurationMs = parseFloat(animationSpeed) * 1000
        
        // Function to hide explosion and all lines after all animations complete
        const hideExplosion = () => {
          if (explosion) {
            // Explicitly hide all lines
            lines.forEach((line) => {
              const lineElement = line as HTMLElement
              lineElement.style.opacity = '0'
              lineElement.style.visibility = 'hidden'
              lineElement.style.animation = 'none'
            })
            explosion.style.display = 'none'
          }
        }
        
        // Set up animation end listeners for each line
        const handleAnimationEnd = () => {
          completedLines++
          if (completedLines === totalLines) {
            hideExplosion()
          }
        }
        
        // Restart animations with proper timing
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (explosion) {
              completedLines = 0
              
              explosion.style.setProperty('--animation-speed', animationSpeed)            
              
              lines.forEach((line, index) => {
                const lineElement = line as HTMLElement
                const lineDelay = index * 0.05
                
                // Remove previous listeners
                lineElement.removeEventListener('animationend', handleAnimationEnd)
                
                // Add new listener
                lineElement.addEventListener('animationend', handleAnimationEnd, { once: true })
                
                // Make visible and start animation
                lineElement.style.visibility = 'visible'
                lineElement.style.animation = `drawLine ${animationSpeed} ease-out ${lineDelay}s forwards`
              })
              
              // Fallback timeout to ensure everything is hidden
              registerTimeout(() => {
                if (explosion) {
                  hideExplosion()
                }
              }, animationDurationMs + maxDelay * 1000 + 300)
            }
          })
        })
      }, delay)
    }

    // Trigger a pair of explosions and then schedule the next pair
    const triggerExplosionPair = () => {
      const textImageElement = textImageContainerRef.current
      if (!textImageElement) return

      // Explosion 1: Top-left of text and image - Small, fast
      triggerExplosion(explosion1Ref.current, -80, -40, 0, 60, '1s', 25)
      // Explosion 2: Top-right of text and image - Medium, medium speed
      triggerExplosion(explosion2Ref.current, 80, -40, 300, 80, '1.5s', 30)
    }

    const scheduleNextPair = () => {
      // Random delay between 2s and 6s for the next explosion pair
      const nextDelay = 2000 + Math.random() * 4000
      registerTimeout(() => {
        triggerExplosionPair()
        scheduleNextPair()
      }, nextDelay)
    }

    // Initial delay to ensure elements are positioned, then start the loop
    registerTimeout(() => {
      triggerExplosionPair()
      scheduleNextPair()
    }, 500 + Math.random() * 500)

    return () => {
      // Clear all scheduled timeouts on unmount
      timeouts.forEach((id) => clearTimeout(id))
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen items-center justify-center overflow-visible pt-[240px] transition-colors duration-300 ${isMounted ? 'bg-black' : 'bg-white'}`}
      style={!isMounted ? { backgroundColor: '#FFFFFF' } : undefined}
      aria-label="Hero animation"
    >      
        <div className="big-cta__explosions-holder" ref={explosionsHolderRef}>
            <div 
              ref={explosion1Ref}
              className="explosion-animation-element explosion-animation-element--dark big-cta__explosion" 
              style={{ display: 'none' }}
            >
                <div className="explosion-animation-element__box">
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                </div>
            </div>
            <div 
              ref={explosion2Ref}
              className="explosion-animation-element explosion-animation-element--dark big-cta__explosion" 
              style={{ display: 'none' }}
            >
                <div className="explosion-animation-element__box">
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                    <div className="explosion-animation-element__line-outer">
                        <div className="explosion-animation-element__line"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative z-10 pointer-events-none mx-auto flex max-w-[1385px] flex-col items-center gap-6 text-center text-black hero-banner-content-wrapper">
            <h1 className="text-[75px] leading-[95px] display-flex flex-col items-center justify-center" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 400 }}>
                <span>Oman Web & Tech</span>
                <br />
                <span ref={textImageContainerRef} className="highlight-text">
                    Award Winning &nbsp;
                    <span ref={imageRef} className="inline-block relative">
                        <Image src="/exitement.png" alt="Exitement" width={75} height={75} className="inline-block" />
                    </span>
                </span>
                <br />
                <span>Web Design Company</span>                
            </h1>
            <p className="text-[17px] leading-[27px] text-gray-500 text-center" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, maxWidth: '625px' }}>
                We are an Oman Web & Tech Award Winning Web Design Company twith clients in USA, UK, Canada, Oman, UAE, Portugal, Saudi Arabia, Bahrain, Kuwait, Algeria, Australia and India.
            </p>
            <Button btnStyle="highlight" href="#contact">
              Contact Us
            </Button>
            <ul className="statistics-wrapper max-w-[1380px]max-w-[1380px] mx-auto w-full relative flex items-center justify-between pt-[135px]">
                <li className="statistic-item flex flex-row items-center py-2 px-6">
                    <div className="statistic-value gold-text text-[36px] pr-[20px]" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>17+</div>
                    <div className="statistic-label text-gray-700 text-[16px] leading-[26px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>Years of Experience</div>
                </li>
                <li className="statistic-item flex flex-row items-center py-2 px-6">
                    <div className="statistic-value gold-text text-[36px] pr-[20px]" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>700+</div>
                    <div className="statistic-label text-gray-700 text-[16px] leading-[26px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>Successful Projects</div>
                </li>
                <li className="statistic-item flex flex-row items-center py-2 px-6">
                    <div className="statistic-value gold-text text-[36px] pr-[20px]" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>500+</div>
                    <div className="statistic-label text-gray-700 text-[16px] leading-[26px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>Happy Clients</div>
                </li>
                <li className="statistic-item flex flex-row items-center py-2 px-6">
                    <div className="statistic-value gold-text text-[36px] pr-[20px]" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 600 }}>4.9/5.0</div>
                    <div className="statistic-label text-gray-700 text-[16px] leading-[26px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>Client Rating</div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

