import './NewsletterSection.css'

function NewsletterSection() {
  return (
    <section className="newsletter">
      {/* Coral decorative curly arrows */}
      <svg className="newsletter-decor-curly" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5 C20 15, 10 20, 18 30" stroke="#e8836b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M14 26 L18 30 L22 26" stroke="#e8836b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 8 C40 18, 30 22, 38 32" stroke="#e8836b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M34 28 L38 32 L42 28" stroke="#e8836b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="newsletter-decor-purple" />
      <h2 className="newsletter-heading">Subscribe to our newsletter</h2>
      <p className="newsletter-subtext">
        To make your stay special and even more memorable
      </p>
      <button className="newsletter-button">Subscribe Now</button>
    </section>
  )
}

export default NewsletterSection
