import { useState } from 'react'
import Icon from './Icon'
import { Logo } from './Shared'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Courses', href: '#/courses' },
  { label: 'Creators', href: '#/creator' },
]


export default function Navbar({ active = 'Home' }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo light />

        <nav className="navbar-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={link.label === active ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="#/login">Sign In</a>
          <a href="#/register">Join Us</a>
          <button aria-label="Cart">
            <Icon name="bag" />
          </button>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? 'close' : 'menu'} size={28} />
        </button>
      </div>

      {open && (
        <div className="container navbar-mobile">
          <div className="navbar-mobile-menu">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#/login">Sign In</a>
            <a href="#/register">Join Us</a>
          </div>
        </div>
      )}
    </header>
  )
}