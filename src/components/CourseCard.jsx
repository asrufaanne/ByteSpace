import Icon from './Icon'
import { AvatarStack } from './Shared'
import './CourseCard.css'



export default function CourseCard({ course }) {
  return (
    <a href="#/course" className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-tags">
          <span>{course.lessons}</span>
          <span>{course.duration}</span>
          <span>{course.comments}</span>
        </div>
      </div>

      <div className="course-head">
        <div className="course-title">
          <h3>{course.title}</h3>
          
          <p>
            by <span>{course.author.replace(/^by\s+/, '')}</span>
          </p>
        </div>
        <span className="course-rating">
          {course.rating}
          <Icon name="star" size={24} strokeWidth={1.6} color="#4f4f4f" />
        </span>
      </div>

      <div className="course-meta">
        <span className="course-level">
          <Icon name="signal" size={20} strokeWidth={2.4} color="#4b4c53" />
          {course.level}
        </span>
        <AvatarStack count={4} label={course.students} />
      </div>

      <p className="course-price">
        <strong>{course.price}</strong>
        <span>/lifetime</span>
      </p>
    </a>
  )
}
