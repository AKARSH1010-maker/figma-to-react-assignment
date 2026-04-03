import FooterColumn from './FooterColumn'
import './FooterSection.css'

const columns = [
  {
    title: 'Company',
    items: [
      { label: 'Home' },
      { label: 'Studio' },
      { label: 'Service' },
      { label: 'Blog' },
    ],
  },
  {
    title: 'Terms & Policies',
    items: [
      { label: 'Privacy Policy' },
      { label: 'Terms & Conditions' },
      { label: 'Explore' },
      { label: 'Accesibility' },
    ],
  },
  {
    title: 'Follow Us',
    items: [
      { label: 'Instagram' },
      { label: 'LinkedIn' },
      { label: 'Youtube' },
      { label: 'Twitter' },
    ],
  },
  {
    title: 'Terms & Policies',
    items: [
      { label: '1498w Fluton ste, STE\n2D Chicgo, IL 63867.', isAddress: true },
      { label: '(123) 456789000' },
      { label: 'info@elementum.com' },
    ],
  },
]

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-divider" />
      <div className="footer-columns">
        {columns.map((col, i) => (
          <FooterColumn key={col.title + i} title={col.title} items={col.items} />
        ))}
      </div>
      <div className="footer-bottom">
        &copy;2023 Elementum. All rights reserved
      </div>
    </footer>
  )
}

export default FooterSection
