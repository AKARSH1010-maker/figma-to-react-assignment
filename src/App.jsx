import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BetterTodaySection from './components/BetterTodaySection'
import ProgressSection from './components/ProgressSection'
import OfferSection from './components/OfferSection'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  return (
    <>
      <div className="decor decor-purple" />
      <div className="decor decor-coral" />
      <div className="decor decor-triangle" />
      <div className="decor decor-green" />
      <div className="decor decor-pink" />
      <Navbar />
      <HeroSection />
      {/* Flowing coral curve through content sections */}
      <svg className="flowing-curve" viewBox="0 0 1140 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1050 0 C900 200, 100 350, 200 600 S1050 800, 950 1050 S100 1200, 250 1450 S900 1600, 850 1800" stroke="#e8836b" strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" />
      </svg>
      <BetterTodaySection />
      <ProgressSection />
      <div className="section-triangles-mid">
        <div className="coral-tri-1" />
        <div className="coral-tri-2" />
      </div>
      <OfferSection />
      <TestimonialSection />
      <NewsletterSection />
      <FooterSection />
    </>
  )
}

export default App
