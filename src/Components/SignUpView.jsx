import React from 'react';
import GlassInput from './GlassInput';
import { Icons } from './Icons';

const SignUpView = ({ onNext, onSwitchToLogin, formData, handleChange }) => (
  <div className="glass-card p-5 mx-auto fade-up" style={{ maxWidth: "500px", width: "100%" }}>
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold text-white mb-2">Create Account</h2>
      <p className="text-muted small">Start building your professional profile.</p>
    </div>
    
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <GlassInput id="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} placeholder="Enter the Name" />
      <GlassInput id="workEmail" label="Email Address" value={formData.workEmail} onChange={handleChange} type="email" placeholder="sarah@example.com" />
      <GlassInput id="password" label="Password" type="password" placeholder="••••••••" required={true} onChange={handleChange} value={formData.password || ""} />
      
      <button type="submit" className="btn w-100 py-3 mt-4 fw-bold text-dark text-uppercase"
        style={{ background: '#2dd4bf', border: 'none', letterSpacing: '1px' }}>
        Create Account <Icons.ArrowRight />
      </button>
      
      <p className="text-center mt-4 text-muted small">
        Already have an account? <span onClick={onSwitchToLogin} style={{cursor:'pointer'}} className="text-white text-decoration-none fw-bold">Log in</span>
      </p>
    </form>
  </div>
);

export default SignUpView;