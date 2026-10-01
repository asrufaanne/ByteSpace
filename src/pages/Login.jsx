import { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import { HappyStudents } from '../components/Shared'
import { courses } from '../data'
import './Login.css'



const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 1024

function getLayout() {
  const width = document.documentElement.clientWidth
  return {
    desktop: width >= 1024,
    scale: Math.min(width, FRAME_WIDTH) / FRAME_WIDTH,
  }
}

export default function Login() {
  const [{ desktop, scale }, setLayout] = useState(getLayout)

  useEffect(() => {
    const onResize = () => setLayout(getLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sectionStyle = desktop ? { height: FRAME_HEIGHT * scale } : undefined
  const stageStyle = desktop ? { transform: `translateX(-50%) scale(${scale})` } : undefined

  return (
    <section className={desktop ? 'auth grid-bg auth-desktop' : 'auth grid-bg'} style={sectionStyle}>
      <div className="auth-stage" style={stageStyle}>
        <header className="auth-header">
          <a href="#/" aria-label="ByteSpace home">
            <img src="/images/logo-mark.png" alt="ByteSpace" width="29" height="32" />
          </a>
        </header>

        <div className="auth-intro">
          <h2>Sign in with ease</h2>
          <p>
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        <div className="auth-visual" aria-hidden="true">
          <div className="auth-card auth-card-1">
            <CourseCard course={courses[1]} />
          </div>
          <div className="auth-card auth-card-2">
            <CourseCard course={courses[2]} />
          </div>
          <HappyStudents className="auth-happy" />
          <img src="/images/hero-squiggle-white.png" alt="" className="auth-shape auth-squiggle" />
          <img src="/images/auth-ring-lime.png" alt="" className="auth-shape auth-ring" />
          <img src="/images/cta-cone-lime.png" alt="" className="auth-shape auth-cone" />
        </div>

        
        <div className="auth-box">
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-heading">
              <p>Sign In</p>
              <h1>Welcome Back</h1>
            </div>

            <div className="auth-fields">
              <label className="auth-field">
                <span>Email</span>
                <input type="email" placeholder="designer@example.com" />
              </label>
              <label className="auth-field">
                <span>Password</span>
                <input type="password" placeholder="********" />
              </label>
              <button type="submit" className="btn btn-lime auth-submit">
                Sign In
              </button>
            </div>
          </form>

          <div className="auth-social">
            <p className="auth-or">
              <span>or</span>
            </p>
            <div className="auth-social-buttons">
              <button type="button" className="auth-social-btn" aria-label="Sign in with Google">
                <img src="/images/icon-google.png" alt="" width="33" height="34" />
              </button>
              <button type="button" className="auth-social-btn auth-social-facebook" aria-label="Sign in with Facebook">
                <img src="/images/icon-facebook.png" alt="" width="72" height="72" />
              </button>
            </div>
          </div>

          <p className="auth-switch auth-switch-login">
            New user? <a href="#/register">Create an account</a>
          </p>
        </div>
      </div>
    </section>
  )
}