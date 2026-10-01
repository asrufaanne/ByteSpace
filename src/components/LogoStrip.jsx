import './LogoStrip.css'

const marks = [
  <path key="a" d="M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M4 9h16M4 15h16" />,
  <><circle cx="12" cy="12" r="3" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>,
  <><circle cx="12" cy="12" r="9" /><path d="m13 6-4 7h4l-2 5 4-7h-4z" /></>,
  <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="8" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="12" cy="16" r="2" /></>,
  <><circle cx="12" cy="12" r="9" /><path d="M5 9c4 0 10 2 14 6M4 13c4 0 9 2 12 6M7 5c4 1 9 4 12 8" /></>,
]

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="container logo-strip-inner">
        {marks.map((m, i) => (
          <div key={i} className="logo-item">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {m}
            </svg>
            <span>Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  )
}
