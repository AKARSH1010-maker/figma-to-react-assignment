import './ServiceRow.css'

function ServiceRow({ label, title, desc }) {
  return (
    <div className="service-row">
      <div className="service-row-left">
        <span className="service-row-label">{label}</span>
        {desc && <span className="service-row-desc">{desc}</span>}
      </div>
      <span className="service-row-title">{title}</span>
      <span className="service-row-arrow">
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 8h36M30 2l6 6-6 6" />
        </svg>
      </span>
    </div>
  )
}

export default ServiceRow
