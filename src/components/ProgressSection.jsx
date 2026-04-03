import './ProgressSection.css'

function ProgressSection() {
  return (
    <section className="progress">
      <div className="coral-triangle--prog" />
      <div className="progress-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
          alt="Team progress"
        />
      </div>
      <div className="progress-text">
        <h2 className="progress-heading">
          <span className="highlight-green">See</span> how we can help you <span className="underline-yellow">progress</span>
        </h2>
        <p className="progress-paragraph">
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design,
          digital, comms and social research.
        </p>
        <a href="#read-more" className="progress-link">
          Read more <span className="link-dash" />
        </a>
      </div>
    </section>
  )
}

export default ProgressSection
