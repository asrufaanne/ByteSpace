import { Button, Logo } from './Shared'
import { footerLinks } from '../data'
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-intro">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <Button>Search</Button>
            </form>
            <p className="footer-note">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((col, i) => (
              <ul key={i}>
                {col.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
