import './BetterTodaySection.css'

function BetterTodaySection() {
  return (
    <section className="better-today">
      <div className="coral-triangle--bt" />
      <div className="better-today-text">
        <h2 className="better-today-heading">
          <span className="underline-yellow">Tomorrow</span> should
          be better than <span className="highlight-green">today</span>
        </h2>
        <p className="better-today-paragraph">
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse
          to play things safe.
        </p>
        <a href="#read-more" className="better-today-link">
          Read more <span className="link-dash" />
        </a>
      </div>
      <div className="better-today-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
          alt="Team collaborating"
        />
      </div>
    </section>
  )
}

export default BetterTodaySection
