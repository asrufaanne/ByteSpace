import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle } from '../components/Icon'
import './CourseDetails.css'


const sideLessons = [
  { no: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
  { no: '02', title: 'Design Principles for Impacts', time: '21 mins' },
  { no: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' },
]

const includes = [
  { icon: 'book', text: 'Learning Resources' },
  { icon: 'video', text: 'Quality Lesson Videos' },
  { icon: 'certificate', text: 'Certificate of Completion' },
  { icon: 'chat', text: 'Private Consultation' },
]

const description =
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation. In the initial modules, you\'ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm. As you progress through the course, you\'ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.'

const sneakPeek = ['/images/peek-1.png', '/images/peek-2.png', '/images/peek-3.png', '/images/peek-4.png']

const keyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
]

const modules = [
  {
    title: 'Module 1: Introduction to Digital Assets',
    text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: 'Module 2: Design Principles for Impact',
    text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: 'Module 4: User-Centric Design Strategies',
    text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: 'Module 5: Interactive Media and Engagement',
    text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: 'Module 6: Project Showcase and Critique',
    text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
]

// Figma: bar 282px, fills 260 / 103 / 27 / 10 / 15
const ratingBars = [
  { stars: 5, count: 720, fill: 260 },
  { stars: 4, count: 120, fill: 103 },
  { stars: 3, count: 21, fill: 27 },
  { stars: 2, count: 12, fill: 10 },
  { stars: 1, count: 16, fill: 15 },
]

const reviews = [
  {
    name: 'PurePearl Studio',
    avatar: '/images/avatar-purepearl.png',
    stars: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: 'Albert Flores',
    avatar: '/images/avatar-albert.png',
    stars: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: 'Cody Fisher',
    avatar: '/images/avatar-cody.png',
    stars: 5,
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    name: 'Brooklyn Simmons',
    avatar: '/images/avatar-brooklyn.png',
    stars: 5,
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
]

function PageIcon({ name, size = 20 }) {
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
    level: <><path d="M6 19v-3" /><path d="M12 19v-7" /><path d="M18 19V6" /></>,
    users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4" /><path d="M18.5 14.8c1.6.8 2.6 2.5 3 5.2" /></>,
    share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3z" /></>,
    certificate: <><rect x="3" y="4" width="18" height="13" rx="2" /><circle cx="12" cy="10" r="2.5" /><path d="m10 17-1 4 3-1.5 3 1.5-1-4" /></>,
    chat: <><path d="M4 5h16v10H9l-5 4z" /><path d="M8 9h8M8 12h5" /></>,
  }
  return <svg {...common}>{icons[name]}</svg>
}

function Star({ filled = true, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"
        fill={filled ? '#242528' : '#d9dadf'}
      />
    </svg>
  )
}

function Stars({ count = 5, size }) {
  return (
    <span className="cd-stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} filled={n <= count} size={size} />
      ))}
    </span>
  )
}

function AboutTab() {
  return (
    <>
      <h3>Description</h3>
      <p className="cd-text">{description}</p>

      <h3>Sneak Peak</h3>
      <div className="cd-peek">
        {sneakPeek.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>

      <h3>Key Points</h3>
      <ul className="cd-points">
        {keyPoints.map((point) => (
          <li key={point}>
            <CheckCircle size={24} />
            {point}
          </li>
        ))}
      </ul>
    </>
  )
}

function LessonsTab() {
  return (
    <>
      <h3>Explore the Modules</h3>
      <p className="cd-text">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
        practical insights and hands-on experiences.
      </p>

      <h3>Lesson List</h3>
      <ul className="cd-modules">
        {modules.map((m) => (
          <li key={m.title}>
            <span className="cd-module-icon">
              <PageIcon name="video" size={40} />
            </span>
            <div>
              <p className="cd-module-title">{m.title}</p>
              <p className="cd-module-text">{m.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3>Lesson Content</h3>
      <p className="cd-text">
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive
        elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>

      <h3>Lesson Progress Tracking</h3>
      <p className="cd-text">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through
        your learning journey.
      </p>
      <div className="cd-progress">
        <p className="cd-progress-label">Learning Progress</p>
        <p className="cd-progress-value">55%</p>
        <div className="cd-progress-bar">
          <div />
        </div>
      </div>
    </>
  )
}

function ReviewsTab() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? reviews : reviews.filter((r) => r.stars === filter)

  return (
    <>
      <h3>What Learners Are Saying</h3>
      <p className="cd-text">
        Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive
        Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of
        mastering digital asset creation.
      </p>

      <div className="cd-rating-box">
        <div className="cd-rating-score">
          <span>Ratings</span>
          <strong>4.7</strong>
        </div>
        <div className="cd-rating-bars">
          {ratingBars.map((r) => (
            <div key={r.stars} className="cd-rating-row">
              <div className="cd-bar">
                <div style={{ width: `${(r.fill / 282) * 100}%` }} />
              </div>
              <Stars count={r.stars} size={24} />
              <span className="cd-rating-count">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <h3>Individual Reviews:</h3>
      <div className="cd-review-filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button key={n} className={filter === n ? 'active' : ''} onClick={() => setFilter(n)}>
            <Star size={24} /> {n}
          </button>
        ))}
      </div>

      <div className="cd-reviews">
        {shown.length === 0 && <p className="cd-text">No reviews with {filter} stars yet.</p>}
        {shown.map((r) => (
          <article key={r.name} className="cd-review">
            <div className="cd-review-head">
              <div className="cd-review-who">
                <div className="cd-review-person">
                  <img src={r.avatar} alt={r.name} />
                  <div>
                    <p className="cd-review-name">{r.name}</p>
                    <p className="cd-review-role">UI/UX Designer</p>
                  </div>
                </div>
                <Stars count={r.stars} size={24} />
              </div>
              <span className="cd-review-time">a year ago</span>
            </div>
            <p className="cd-review-text">{r.text}</p>
          </article>
        ))}
      </div>
    </>
  )
}

const tabs = ['About', 'Lesson', 'Reviews'] 

export default function CourseDetails() {
  const [tab, setTab] = useState('About')

  return (
    <>
      <section className="cd-hero grid-bg">
        <Navbar active="Courses" />

        <div className="container cd-title-row">
          <div>
            <h1>Build Digital Asset: A Comprehensive Guide</h1>
            <p className="cd-subtitle">Unlock the Power of Digital Creation with Expert Guidance</p>
            <p className="cd-by">
              by <span>purepearl studio</span>
            </p>
            <div className="cd-meta">
              <span>
                <PageIcon name="level" size={24} /> Intermediate
              </span>
              <span>
                <Star size={24} /> 4.8 (172 reviews)
              </span>
              <span>
                <PageIcon name="users" size={24} /> 199 Students
              </span>
            </div>
          </div>
          <button className="cd-share">
            <PageIcon name="share" size={24} /> Share
          </button>
        </div>
      </section>

      <main className="cd-body">
        <div className="container cd-layout">
          <div className="cd-main">
            <div className="cd-video">
              <img src="/images/course-video.png" alt="Course preview video" />
              <button className="cd-play" aria-label="Play video" />
            </div>

            <div className="cd-tabs">
              {tabs.map((t) => (
                <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                  {t}
                </button>
              ))}
            </div>

            <div className="cd-tab-content">
              {tab === 'About' && <AboutTab />}
              {tab === 'Lesson' && <LessonsTab />}
              {tab === 'Reviews' && <ReviewsTab />}
            </div>
          </div>

          <aside className="cd-side">
            <p className="cd-side-title">112 Lessons (24 hours)</p>
            <ul className="cd-side-lessons">
              {sideLessons.map((l) => (
                <li key={l.no}>
                  <span className="cd-side-lesson">
                    <span className="cd-side-no">{l.no}</span>
                    <span className="cd-side-name">{l.title}</span>
                  </span>
                  <span className="cd-side-time">{l.time}</span>
                </li>
              ))}
            </ul>
            <p className="cd-side-more">99 more videos</p>

            <p className="cd-side-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <p className="cd-side-price">
              <strong>$25</strong>
              <span>/lifetime</span>
            </p>
            <button className="btn btn-lime cd-enroll">Enroll Now</button>

            <p className="cd-side-title cd-include-title">This course include</p>
            <ul className="cd-include">
              {includes.map((item) => (
                <li key={item.text}>
                  <PageIcon name={item.icon} size={24} />
                  {item.text}
                </li>
              ))}
            </ul>

            <hr className="cd-line" />

            <div className="cd-creator">
              <div className="cd-creator-head">
                <img src="/images/avatar-purepearl.png" alt="PurePearl Studio" />
                <div>
                  <p className="cd-creator-name">PurePearl Studio</p>
                  <p className="cd-creator-role">Professional Creator</p>
                </div>
              </div>
              <p className="cd-side-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
              <a href="#/creator" className="cd-profile">See Full Profile</a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}
