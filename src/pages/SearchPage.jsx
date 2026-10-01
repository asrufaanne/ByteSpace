import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import Icon from '../components/Icon'
import { courses } from '../data'
import './SearchPage.css'


const tabs = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking',
]

const allCourses = [...courses, ...courses, ...courses]

function PageIcon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: { flexShrink: 0 },
  }
  const icons = {
    filter: <path d="M4 5h16l-6 7.5V18l-4 2v-7.5z" />,
    category: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><circle cx="17" cy="17" r="3" /></>,
    sort: <><path d="M4 7h16" /><path d="M7 12h10" /><path d="M10 17h4" /></>,
    left: <path d="m15 6-6 6 6 6" />,
    right: <path d="m9 6 6 6-6 6" />,
  }
  return <svg {...common}>{icons[name]}</svg>
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10h10l-5 6z" fill="currentColor" />
    </svg>
  )
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('Featured')
  const [page, setPage] = useState(1)

  const shown = allCourses.filter((c) => c.title.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <>
      <section className="search-header grid-bg">
        <Navbar active="Courses" />

        <div className="container search-header-content">
          <h1>Find Your Next Course</h1>

          <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
            <label>
              <Icon name="search" size={24} color="#242528" />
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <button type="button" className="search-type">
              Courses <ChevronDown />
            </button>
          </form>
        </div>
      </section>

      <main className="search-main">
        <div className="container">
          <div className="search-filters">
            <div className="search-filters-left">
              <button className="outline-btn">
                <PageIcon name="filter" /> Filter
              </button>
              <button className="outline-btn">
                <Icon name="signal" size={24} strokeWidth={2.2} /> Level
              </button>
              <button className="outline-btn">
                <PageIcon name="category" /> Category
              </button>
            </div>
            <button className="outline-btn">
              <PageIcon name="sort" /> Most relevant
            </button>
          </div>

          <div className="search-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={tab === activeTab ? 'search-tab active' : 'search-tab'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          
          {shown.length > 0 ? (
            <div className="search-grid">
              {shown.map((course, i) => (
                <CourseCard key={i} course={course} />
              ))}
            </div>
          ) : (
            <p className="search-empty">No courses found for “{query}”.</p>
          )}

      
          <nav className="pagination" aria-label="Pages">
            <button className="page-arrow" onClick={() => setPage(Math.max(1, page - 1))} aria-label="Previous page">
              <PageIcon name="left" />
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} className={n === page ? 'page-number active' : 'page-number'} onClick={() => setPage(n)}>
                {n}
              </button>
            ))}
            <button className="page-arrow" onClick={() => setPage(Math.min(5, page + 1))} aria-label="Next page">
              <PageIcon name="right" />
            </button>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  )
}
