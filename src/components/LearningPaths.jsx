import { SectionTitle } from './Shared'
import { learningPaths } from '../data'
import './LearningPaths.css'

const pathIcons = {
  Design: '/images/icon-design.png',
  Development: '/images/icon-development.png',
  'IT & Software': '/images/icon-it-software.png',
  Business: '/images/icon-business.png',
  Marketing: '/images/icon-marketing.png',
  Photography: '/images/icon-photography.png',
}

export default function LearningPaths() {
  return (
    <section className="paths">
      <div className="container">
        <SectionTitle
          className="paths-title"
          title="Explore Diverse Learning Paths at Bytespace"
          text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="paths-grid">
          {learningPaths.map((path) => (
            <a key={path.name} href="#" className="path-card">
              <img src={pathIcons[path.name]} alt="" className="path-icon" />
              <span>{path.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}