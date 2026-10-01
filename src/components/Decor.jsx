

const shade = {
  lime: ['#ecff7a', '#cbfc01', '#9fc400'],
  white: ['#ffffff', '#eef1fb', '#c6cde6'],
}

let uid = 0
function gradient(color) {
  const id = `grad-${color}-${uid++}`
  const [a, b, c] = shade[color]
  const def = (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={a} />
      <stop offset="0.55" stopColor={b} />
      <stop offset="1" stopColor={c} />
    </linearGradient>
  )
  return [id, def]
}


export function Spring({ color = 'lime', className = '' }) {
  const [id, def] = gradient(color)
  return (
    <svg viewBox="0 0 120 200" className={`shape ${className}`} fill="none" aria-hidden="true">
      <defs>{def}</defs>
      <path
        d="M20 20c70-10 90 30 20 40s-50 40 20 40 70 30 0 40-50 40 30 40"
        stroke={`url(#${id})`}
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  )
}


export function Squiggle({ color = 'white', className = '' }) {
  const [id, def] = gradient(color)
  return (
    <svg viewBox="0 0 120 120" className={`shape ${className}`} fill="none" aria-hidden="true">
      <defs>{def}</defs>
      <path
        d="M15 30c25-20 40 20 60 0s30-5 30 5M15 60c25-20 40 20 60 0s30-5 30 5M15 90c25-20 40 20 60 0s30-5 30 5"
        stroke={`url(#${id})`}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Ring({ color = 'white', className = '' }) {
  const [id, def] = gradient(color)
  return (
    <svg viewBox="0 0 120 140" className={`shape ${className}`} aria-hidden="true">
      <defs>{def}</defs>
      <ellipse cx="60" cy="70" rx="44" ry="54" fill="none" stroke={`url(#${id})`} strokeWidth="26" transform="rotate(-20 60 70)" />
    </svg>
  )
}

export function Cylinder({ color = 'lime', className = '' }) {
  const [id, def] = gradient(color)
  return (
    <svg viewBox="0 0 120 150" className={`shape ${className}`} aria-hidden="true">
      <defs>{def}</defs>
      <g transform="rotate(-25 60 75)">
        <path d="M15 30v90a45 18 0 0 0 90 0V30z" fill={`url(#${id})`} />
        <ellipse cx="60" cy="30" rx="45" ry="18" fill={shade[color][0]} />
      </g>
    </svg>
  )
}

export function Cone({ color = 'white', className = '' }) {
  const [id, def] = gradient(color)
  return (
    <svg viewBox="0 0 100 110" className={`shape ${className}`} aria-hidden="true">
      <defs>{def}</defs>
      <path d="M58 6 94 92 Q52 108 8 88z" fill={`url(#${id})`} />
      <path d="M58 6 94 92 Q78 99 62 101z" fill={shade[color][2]} opacity=".55" />
    </svg>
  )
}
