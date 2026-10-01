import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Icon from './Icon'
import { Button, HappyStudents, ProgressCard } from './Shared'
import './Hero.css'


const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 1043


function getLayout() {
  const width = document.documentElement.clientWidth
  return {
    desktop: width >= 768,
    scale: Math.min(width, FRAME_WIDTH) / FRAME_WIDTH,
  }
}

export default function Hero() {
  const [{ desktop, scale }, setLayout] = useState(getLayout)

  useEffect(() => {
    const onResize = () => setLayout(getLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sectionStyle = desktop ? { height: FRAME_HEIGHT * scale } : undefined
  const stageStyle = desktop
    ? { width: scale < 1 ? FRAME_WIDTH : '100%', transform: `scale(${scale})` }
    : undefined

  return (
    <section className={desktop ? 'hero grid-bg hero-desktop' : 'hero grid-bg'} style={sectionStyle}>
      <Navbar />

      <div className="hero-stage" style={stageStyle}>
        <img src="/images/hero-spring-lime.png" alt="" className="hero-shape hero-spring-lime" />
        <img src="/images/hero-squiggle-white.png" alt="" className="hero-shape hero-squiggle-white" />
        <img src="/images/hero-ring-white.png" alt="" className="hero-shape hero-ring-white" />
        <img src="/images/hero-cylinder-lime.png" alt="" className="hero-shape hero-cylinder-lime" />
        <img src="/images/hero-cone-white.png" alt="" className="hero-shape hero-cone-white" />
        <img src="/images/hero-spring-white.png" alt="" className="hero-shape hero-spring-white" />

        <div className="container hero-content">
          <h1>Get Access to Hundreds Courses Available</h1>
          <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <label>
              <Icon name="search" size={20} color="#6b6c72" />
              <input type="text" placeholder="Course, topic, creator" />
            </label>
            <Button>Search</Button>
          </form>
        </div>

        <div className="hero-visual">
          <div className="hero-circle" />
          <img src="/images/hero-student.png" alt="Student with laptop" className="hero-student" />

          <div className="float-card hero-uiux">
            <p className="float-card-title">UI/UX Design</p>
            <p>200 Courses&nbsp;&nbsp;•&nbsp;&nbsp;1000+ Students</p>
          </div>
          <ProgressCard className="hero-progress" />
          <HappyStudents className="hero-happy" />
        </div>
      </div>
    </section>
  )
}
