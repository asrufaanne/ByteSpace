import { useState } from 'react'
import CourseCard from './CourseCard'
import { SectionTitle } from './Shared'
import { categories, courses } from '../data'
import './Courses.css'


const chipRows = [categories.slice(0, 8), categories.slice(8, 14), categories.slice(14)]

export default function Courses() {
  const [active, setActive] = useState('Featured')

  return (
    <section className="courses">
      <div className="container">
        <SectionTitle
          className="courses-title"
          title={<>Discover Your Passion,<br />Build Your Skills</>}
          text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        
        <div className="chips">
          {chipRows.map((row, i) => (
            <div key={i} className="chip-row">
              {row.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)} className={active === cat ? 'chip active' : 'chip'}>
                  {cat}
                </button>
              ))}
              {i === chipRows.length - 1 && <button className="chip-more">+ More</button>}
            </div>
          ))}
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
