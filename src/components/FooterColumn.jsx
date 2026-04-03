import './FooterColumn.css'

function FooterColumn({ title, items }) {
  return (
    <div className="footer-column">
      <h4 className="footer-column-title">{title}</h4>
      <ul className="footer-column-list">
        {items.map((item, index) => (
          <li key={index} className={item.isAddress ? 'footer-address' : ''}>
            <a href={item.href || '#'}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
