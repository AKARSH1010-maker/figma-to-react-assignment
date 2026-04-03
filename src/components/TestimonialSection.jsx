import TestimonialCard from './TestimonialCard'
import './TestimonialSection.css'

const orbAvatars = [
  'https://i.pravatar.cc/80?img=10',
  'https://i.pravatar.cc/80?img=11',
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=13',
  'https://i.pravatar.cc/80?img=14',
  'https://i.pravatar.cc/80?img=15',
]

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        <span className="highlight-green">What</span> our customer
        says <span className="testimonial-highlight">About Us</span>
      </h2>
      <div className="testimonial-wrapper">
        <div className="testimonial-orbs">
          {orbAvatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`testimonial-orb testimonial-orb--${i + 1}`}
            />
          ))}
        </div>
        <TestimonialCard
          quote="Elementum  delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable"
        />
      </div>
    </section>
  )
}

export default TestimonialSection
