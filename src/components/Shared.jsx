import Icon from './Icon'
import { avatars } from '../data'
import './Shared.css'

export function Logo({ light = false }) {
  return (
    <a href="#" className="logo">
      <img src="/images/logo-mark.png" alt="" width="29" height="32" className="logo-mark" />
      <span className={light ? 'logo-text light' : 'logo-text'}>ByteSpace</span>
    </a>
  )
}

// variant: "lime" or "blue"
export function Button({ children, variant = 'lime', className = '', ...props }) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function AvatarStack({ count = 4, label, big = false }) {
  return (
    <div className={big ? 'avatar-stack big' : 'avatar-stack'}>
      {avatars.slice(0, count).map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
      <span>{label}</span>
    </div>
  )
}

export function SectionTitle({ title, text, className = '' }) {
  return (
    <div className={`section-title ${className}`}>
      <h2 className="heading-2">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function HappyStudents({ className = '' }) {
  return (
    <div className={`float-card happy-card ${className}`}>
      <p className="float-card-title">Happy Students</p>
      <p className="happy-rating">
        <b>4.5</b> (240)
        <Icon name="star" filled size={16} color="#c2e612" />
      </p>
      <AvatarStack count={7} label="2K+" big />
    </div>
  )
}

export function ProgressCard({ className = '' }) {
  return (
    <div className={`float-card progress-card ${className}`}>
      <p className="progress-label">Learning Progress</p>
      <p className="progress-value">55%</p>
      <div className="progress-bar">
        <div />
      </div>
    </div>
  )
}