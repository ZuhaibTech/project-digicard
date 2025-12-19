import React from 'react';
import { Icons } from './Icons';

const LandingPage = ({ onGetStarted, onLogin }) => (
  <div className="hero-container fade-up">
    {/* Navigation Buttons */}
    <div className="landing-nav">
      <button onClick={onGetStarted} className="btn-primary">Get Started <Icons.ArrowRight /></button>
      <button onClick={onLogin} className="btn-outline">Login <Icons.ArrowRight /></button>
    </div>

    <div className="hero-content">
      <span className="text-slate text-uppercase small mb-2 d-block" style={{letterSpacing: '2px'}}>Next Gen Networking</span>
      <h1 className="hero-title">Your Business Card, Reimagined</h1>
      
      <p className="text-slate mb-4">
        Never run out of business cards again. Share your professional details instantly 
        with a tap or scan—no printing, no waste, always up-to-date.
      </p>
      
      <ul className="text-slate list-unstyled mb-4" style={{lineHeight: '2'}}>
        <li>• Instant Sharing</li>
        <li>• Always Updated</li>
        <li>• Eco-Friendly</li>
        <li>• Mobile-Ready</li>
      </ul>

      <p className="text-muted small">Create your digital business card in minutes. Modern networking starts here.</p>
    </div>

    <div className="hero-image-container">
      <img src="/assets/landing-image.png" alt="Digital Business Card" className="landing-image" />
    </div>
  </div>
);

export default LandingPage;