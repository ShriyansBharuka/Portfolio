import { useEffect, useRef } from 'react'

const Cursor = () => {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const over = (e) => {
      const el = e.target.closest('a, button, [data-hover]')
      if (ringRef.current) {
        ringRef.current.classList.toggle('hovering', !!el)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)

    let raf
    const followRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      raf = requestAnimationFrame(followRing)
    }
    followRing()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}

export default Cursor
