import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <section className="nf-hero grid-bg">
        <Navbar active="" />

        <div className="container nf-content">
          <p className="nf-code">404</p>
          <h1>
            The page you are looking for doesn’t exist
          </h1>
          <p className="nf-text">Try to use a correct url or go back to homepage to start again</p>
          <a href="#/" className="btn btn-lime nf-btn">
            Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
