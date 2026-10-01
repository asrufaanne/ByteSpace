import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import Icon from '../components/Icon'
import { courses } from '../data'
import './SearchPage.css' 
import './CreatorPage.css'



function SmallIcon({ name }) {
  const icons = {
    box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
    users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4" /></>,
    filter: <path d="M4 5h16l-6 7.5V18l-4 2v-7.5z" />,
    category: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><circle cx="17" cy="17" r="3" /></>,
    sort: <><path d="M4 7h16" /><path d="M7 12h10" /><path d="M10 17h4" /></>,
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      {icons[name]}
    </svg>
  )
}

export default function CreatorPage() {
  return (
    <>
      <section className="cr-hero grid-bg">
        <Navbar active="Creators" />

        <div className="container cr-content">
          <div className="cr-head">
            <img src="/images/avatar-purepearl.png" alt="PurePearl Studio" className="cr-avatar" />
            <div>
              <h1>
                PurePearl Studio <span className="cr-badge">Creator</span>
              </h1>
              <p className="cr-role">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <p className="cr-bio">
            Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and
            inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative
            portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each
            piece tells a unique story. Explore the world of creativity with me.
          </p>

          <div className="cr-actions">
            <div className="cr-stats">
              <span>
                <b>3</b> Products
              </span>
              <span>
                <b>12</b> Followers
              </span>
            </div>
            <button className="btn btn-lime">Follow</button>
          </div>
        </div>
      </section>

      {/* ---------- Creator's courses ---------- */}
      <main className="cr-main">
        <div className="container">
          <div className="search-filters">
            <div className="search-filters-left">
              <button className="outline-btn">
                <SmallIcon name="filter" /> Filter
              </button>
              <button className="outline-btn">
                <Icon name="signal" size={20} strokeWidth={2.2} /> Level
              </button>
              <button className="outline-btn">
                <SmallIcon name="category" /> Category
              </button>
            </div>
            <button className="outline-btn">
              <SmallIcon name="sort" /> Most relevant
            </button>
          </div>

          <div className="search-grid cr-grid">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
