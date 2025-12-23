import React from 'react';
import { Icons } from './Icons';

const LandingPage = ({ onGetStarted, onLogin }) => {
  return (
    <div className="landing-container fade-up position-relative">
      
      {/* Top Right Login Button */}
      <div className="position-absolute top-0 end-0 mt-4 me-4" style={{ zIndex: 10 }}>
        <button onClick={onLogin} className="btn-login-pill">
          Login <Icons.ArrowRight />
        </button>
      </div>

      <div className="row align-items-center" style={{minHeight: '80vh'}}>
        
        {/* --- Left Column: Content --- */}
        <div className="col-lg-6 py-4 pe-lg-5 text-center text-lg-start">
          
          <h1 className="landing-title fw-bolder mb-0 lh-1">Your Business Card,<br/>Reimagined</h1>
          
          {/* === MOBILE ONLY IMAGE (Visible < 992px) === */}
          {/* This places the image exactly below the Title on mobile */}
          <div className="d-block d-lg-none my-4">
            <img 
              src="/assets/landing-image.png" 
              alt="Digital Networking Hero" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: '350px', objectFit: 'contain' }}
            />
          </div>
          
          <p className="landing-description lead mt-4 mb-5" style={{opacity: 0.7, fontSize: '1.1rem'}}>
            Never run out of business cards again. Share your professional details instantly with a tap or scan—no printing, no waste, always up-to-date.
          </p>

          <div className="mb-4" style={{opacity: 0.8, fontSize: '0.9rem'}}>
            Instant Sharing • Always Updated • Eco-Friendly • Mobile-Ready
          </div>
          
          <p className="small text-muted mb-5">
            Create your digital business card in minutes. Modern networking starts here.
          </p>

          {/* CTA Pill Wrapper */}
          <div className="cta-pill-wrapper mx-auto mx-lg-0">
            <span className="cta-label">Start Your Journey</span>
            <button onClick={onGetStarted} className="btn-pill-dark">
              Get Started <Icons.ArrowRight />
            </button>
          </div>

        </div>

        {/* --- Right Column: Image (Desktop Only) --- */}
        {/* Visible only on Large screens (>= 992px) */}
        <div className="col-lg-6 d-none d-lg-block font-monospace text-end pt-5 mt-5">
          <img 
            src="/assets/landing-image.png" 
            alt="Digital Networking Hero" 
            className="img-fluid rounded-5 shadow-lg landing-hero-img"
            style={{ 
              maxHeight: '450px', 
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain' 
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default LandingPage;