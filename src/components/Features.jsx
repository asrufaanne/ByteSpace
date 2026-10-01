import { useEffect, useState } from 'react'
import { CheckCircle } from './Icon'
import CourseCard from './CourseCard'
import { HappyStudents, ProgressCard } from './Shared'
import { stats, creatorPoints, courses } from '../data'
import './Features.css'


const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 1460


function getLayout() {
  const width = document.documentElement.clientWidth
  return {
    desktop: width >= 1024,
    scale: Math.min(width, FRAME_WIDTH) / FRAME_WIDTH,
  }
}

export default function Features() {
  const [{ desktop, scale }, setLayout] = useState(getLayout)

  useEffect(() => {
    const onResize = () => setLayout(getLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sectionStyle = desktop ? { height: FRAME_HEIGHT * scale } : undefined
  const stageStyle = desktop
    ? { transform: `scale(${scale})`, left: scale < 1 ? 0 : 'calc(50% - 720px)' }
    : undefined

  return (
    <section className={desktop ? 'features features-desktop' : 'features'} style={sectionStyle}>
      <div className="glow glow-lime features-glow-1" />
      <div className="glow glow-blue features-glow-2" />
      <div className="glow glow-blue features-glow-3" />
      <div className="glow glow-lime features-glow-4" />
      <div className="glow glow-blue features-glow-5" />

      <div className="container features-stage" style={stageStyle}>
        {/* Row 1: Your Path to Professional Growth */}
        <div className="feature-row">
          <div className="growth-text">
            <h2 className="features-heading">Your Path to Professional Growth Starts Here!</h2>
            <p className="features-text">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="growth-visual">
            <div className="growth-course">
              <CourseCard course={courses[0]} />
            </div>
            <img src="/images/hero-student.png" alt="Student learning" className="growth-student" />
            <ProgressCard className="growth-progress" />
            <img src="/images/squiggle-lime.png" alt="" className="growth-squiggle" />
          </div>
        </div>

        
        <div className="feature-row">
          <div className="creator-visual">
            <div className="stat-card revenue-card">
              <p className="stat-card-title">Total Revenue</p>
              <p className="stat-card-sub">July 1-28</p>
              <div className="stat-card-row">
                <p className="stat-card-value">$120.29</p>
                <span className="stat-card-badge">+12$</span>
              </div>
              <div className="stat-card-bar">
                <div />
              </div>
            </div>

            <img src="/images/creator-woman.png" alt="Course creator" className="creator-woman" />

            <div className="stat-card year-card">
              <p className="stat-card-title">Year to Date</p>
              <p className="stat-card-sub">2023</p>
              <p className="stat-card-value">$1,200.38</p>
              <span className="stat-card-badge">+12$</span>
            </div>

            <img src="/images/squiggle-lime.png" alt="" className="creator-squiggle" />
            <HappyStudents className="creator-happy" />
          </div>

          <div className="creator-text">
            <h2 className="features-heading">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="features-text">
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="check-list">
              {creatorPoints.map((point) => (
                <li key={point}>
                  <CheckCircle size={24} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
