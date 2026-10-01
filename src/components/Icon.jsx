
const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  bag: <><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  signal: <><path d="M6 19v-3" /><path d="M12 19v-7" /><path d="M18 19V6" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  design: <><path d="m4 20 4-1L19 8l-3-3L5 16z" /><path d="M14 7l3 3" /><path d="M4 4l6 6" /><path d="M14 14l6 6" /></>,
  code: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m10 9-3 3 3 3" /><path d="m14 9 3 3-3 3" /></>,
  monitor: <><rect x="3" y="5" width="18" height="11" rx="1.5" /><path d="M2 19h20" /></>,
  business: <><path d="M4 20V5h10v15" /><path d="M14 10h6v10" /><path d="M7 8h4M7 12h4M7 16h4" /></>,
  marketing: <><path d="M4 20 14 10" /><path d="m15 3 1 3 3 1-3 1-1 3-1-3-3-1 3-1z" /><path d="M19 13v4M17 15h4" /></>,
  camera: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="11" r="3" /><path d="M7 20c1-3 9-3 10 0" /></>,
}

export default function Icon({ name, size = 24, filled = false, strokeWidth = 1.8, className = '', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={filled ? color : 'none'}
      stroke={filled ? 'none' : color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {paths[name]}
    </svg>
  )
}


export function CheckCircle({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="11" fill="#003be2" />
      <path d="m7.5 12.2 3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
