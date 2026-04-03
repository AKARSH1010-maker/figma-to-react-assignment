import ServiceRow from './ServiceRow'
import './OfferSection.css'

const services = [
  { label: 'Office of multiple', title: 'Collaborative & partnership', desc: 'interest content' },
  { label: 'The hanger US Air force', title: 'We talk about our weight', desc: 'digital experimental' },
  { label: 'Delta faucet content,', title: 'Piloting digital confidence', desc: 'social, digital' },
]

function OfferSection() {
  return (
    <section className="offer-section">
      <h2 className="offer-heading">
        What we <span className="highlight-green">can</span>{' '}
        <span className="underline-yellow">offer</span>{' '}
        you!
      </h2>
      <div className="offer-list">
        {services.map((service) => (
          <ServiceRow
            key={service.label}
            label={service.label}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default OfferSection
