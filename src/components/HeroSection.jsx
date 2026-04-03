import './HeroSection.css'

const avatars = [
  { src: 'https://i.pravatar.cc/150?img=1', className: 'hero-avatar hero-avatar--1' },
  { src: 'https://i.pravatar.cc/150?img=2', className: 'hero-avatar hero-avatar--2' },
  { src: 'https://i.pravatar.cc/150?img=3', className: 'hero-avatar hero-avatar--3' },
  { src: 'https://i.pravatar.cc/150?img=4', className: 'hero-avatar hero-avatar--4' },
  { src: 'https://i.pravatar.cc/150?img=5', className: 'hero-avatar hero-avatar--5' },
  { src: 'https://i.pravatar.cc/150?img=6', className: 'hero-avatar hero-avatar--6' },
  { src: 'https://i.pravatar.cc/150?img=7', className: 'hero-avatar hero-avatar--7' },
  { src: 'https://i.pravatar.cc/150?img=8', className: 'hero-avatar hero-avatar--8' },
]

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Left decorative dark wave */}
      <svg className="hero-decor-wave" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 10 C50 40, 10 60, 30 90 S50 120, 30 150 S10 180, 30 200" stroke="#2a2a2a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="hero-decor-wave-coral" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 0 C20 30, 60 60, 20 90 S60 120, 40 120" stroke="#e8836b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
      <div className="hero-dot hero-dot--green" />
      <div className="hero-dot hero-dot--coral" />
      <div className="hero-dot hero-dot--yellow" />
      <div className="hero-content">
        <h1 className="hero-heading">
          The <span className="underline-yellow">thinkers</span> and{' '}
          doers were{' '}
          <span className="highlight-pink">changing</span>{' '}
          the <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-paragraph">
          We are a team of strategists, designers communicators, researchers, Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>
      <div className="hero-avatars">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            alt={`Profile ${index + 1}`}
            className={avatar.className}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
