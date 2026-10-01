import { useEffect, useState } from 'react'
import { Button } from './Shared'
import './CreatorCTA.css'


const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 488


function getLayout() {
  const width = document.documentElement.clientWidth
  return {
    desktop: width >= 1024,
    scale: Math.min(width, FRAME_WIDTH) / FRAME_WIDTH,
  }
}

export default function CreatorCTA() {
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
    <section className={desktop ? 'cta grid-bg cta-desktop' : 'cta grid-bg'} style={sectionStyle}>
      <div className="cta-stage" style={stageStyle}>
       
        <img src="/images/cta-spring-lime-left.png" alt="" className="cta-shape cta-spring-lime-left" />
        <img src="/images/hero-squiggle-white.png" alt="" className="cta-shape cta-squiggle-white" />
        <img src="/images/cta-cone-white.png" alt="" className="cta-shape cta-cone-white" />
        <img src="/images/cta-ring-lime.png" alt="" className="cta-shape cta-ring-lime" />
        <img src="/images/cta-cone-lime.png" alt="" className="cta-shape cta-cone-lime" />
        <img src="/images/cta-cylinder-white.png" alt="" className="cta-shape cta-cylinder-white" />
        <img src="/images/cta-spring-lime-right.png" alt="" className="cta-shape cta-spring-lime-right" />

        <div className="cta-content">
          <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
          <p>
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
            become a part of a community comprising over 10,000 local and international creators. Utilize our Course
            Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button>Join as Creator</Button>
        </div>
      </div>
    </section>
  )
}
