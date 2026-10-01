# ByteSpace Landing Page (React + Vite + plain CSS)

## Run
npm install
npm run dev      # http://localhost:5173

## Structure
src/data.js            -> page er shob text, course list, testimonial
src/index.css          -> global CSS: color variable (--blue, --lime), font, container
src/components/*.css   -> protiti component er nijer CSS file (Hero.jsx -> Hero.css)
src/components/        -> protiti section alada component
  Navbar, Hero, LogoStrip, Courses + CourseCard, LearningPaths,
  Features (Professional Growth + Create & Manage), CreatorCTA,
  Testimonials, Footer, Decor (3D shape), Shared (button, card), Icon
public/images/         -> image gula

## Image replace korte hobe (Figma -> select -> Export -> PNG 2x)
hero-student.svg     -> hero er student (transparent PNG)
growth-student.svg   -> "Your Path to Professional Growth" er student
creator-woman.svg    -> "Create & Manage" er meye
course-1..6.jpg      -> course thumbnail (ekhon screenshot theke kata, tai jhapsa)
avatar-*.jpg         -> testimonial ar avatar photo
Notun file er nam/extension alada hole data.js ba component e path bodlao.
