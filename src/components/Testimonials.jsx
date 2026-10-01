import { testimonials } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="glow glow-lime testimonials-glow-1" />
      <div className="glow glow-blue testimonials-glow-2" />

      <div className="container testimonials-inner">
        <div className="testimonials-head">
          <h2 className="heading-2">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="text">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <img src={t.avatar} alt={t.name} />
              <figcaption>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </figcaption>
              <blockquote>“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
