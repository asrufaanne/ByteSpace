import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import Courses from './components/Courses'
import LearningPaths from './components/LearningPaths'
import Features from './components/Features'
import CreatorCTA from './components/CreatorCTA'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import SearchPage from './pages/SearchPage'
import CourseDetails from './pages/CourseDetails'
import CreatorPage from './pages/CreatorPage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'

                  
function getRoute() {
  return window.location.hash
    .replace(/^#\/?/, '')  
    .split('?')[0]          
    .replace(/\/+$/, '')    
    .toLowerCase()
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'courses') {
    return <SearchPage />
  }

  
  if (route === 'course' || route.startsWith('course/')) {
    return <CourseDetails />
  }

  if (route === 'creator') {
    return <CreatorPage />
  }

  if (route === 'login') {
    return <Login />
  }

  if (route === 'register') {
    return <Register />
  }

  if (route !== '') {
    return <NotFound />
  }

  return (
    <>
      <Hero />
      <main>
        <LogoStrip />
        <Courses />
        <LearningPaths />
        <Features />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}