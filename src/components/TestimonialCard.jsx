import './TestimonialCard.css'

function TestimonialCard({ quote }) {
  return (
    <div className="testimonial-card">
      <span className="testimonial-card-quote-open">&ldquo;</span>
      <p className="testimonial-card-quote">{quote}</p>
      <span className="testimonial-card-quote-close">&rdquo;</span>
    </div>
  )
}

export default TestimonialCard
