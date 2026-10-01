

export const navLinks = ['Home', 'Courses', 'Creators']

export const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration',
  'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design',
  'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking',
]


export const avatars = [
  '/images/avatar-brooklyn.png',
  '/images/avatar-cody.png',
  '/images/avatar-sarah.jpg',
  '/images/avatar-alex.jpg',
  '/images/avatar-purepearl.png',
  '/images/avatar-albert.png',
  '/images/avatar-james.jpg',
]

export const courses = [
  { title: 'Learn Figma from Basic', image: '/images/course-1.jpg' },
  { title: 'Build Digital Asset', image: '/images/course-2.jpg' },
  { title: 'the Power of Big Data', image: '/images/course-3.jpg' },
  { title: 'Balancing Productivity and Self-Care', image: '/images/course-4.jpg' },
  { title: 'Mastering Money Management', image: '/images/course-5.jpg' },
  { title: 'From Idea to Startup Success', image: '/images/course-6.jpg' },
].map((c) => ({
  ...c,
  author: 'by purepearl studio',
  level: 'Beginner',
  rating: 4.5,
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  students: '26+',
  price: '$25',
}))

export const learningPaths = [
  { name: 'Design', icon: 'design' },
  { name: 'Development', icon: 'code' },
  { name: 'IT & Software', icon: 'monitor' },
  { name: 'Business', icon: 'business' },
  { name: 'Marketing', icon: 'marketing' },
  { name: 'Photography', icon: 'camera' },
]

export const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export const creatorPoints = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/images/avatar-sarah.jpg',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/images/avatar-james.jpg',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/images/avatar-alex.jpg',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

export const footerLinks = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]
