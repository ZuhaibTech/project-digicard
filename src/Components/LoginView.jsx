import React from 'react';
import GlassInput from './GlassInput';
import { Icons } from './Icons';

const LoginView = ({ onLogin, onSwitchToSignUp, formData, handleChange }) => (
  <div className="glass-card p-5 mx-auto fade-up" style={{ maxWidth: "500px", width: "100%" }}>
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold text-white mb-2">Welcome Back</h2>
      <p className="text-muted small">Log in to manage your digital card.</p>
    </div>
    
    <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
      <GlassInput id="workEmail" label="Email Address" value={formData.workEmail} onChange={handleChange} type="email" placeholder="sarah@example.com" />
      <GlassInput id="password" label="Password" type="password" placeholder="••••••••" required={true} onChange={handleChange} value={formData.password || ""} />
      
      <button type="submit" className="btn w-100 py-3 mt-4 fw-bold text-dark text-uppercase"
        style={{ background: '#2dd4bf', border: 'none', letterSpacing: '1px' }}>
        Log In <Icons.Login />
      </button>
      
      <p className="text-center mt-4 text-muted small">
        Don't have an account? <span onClick={onSwitchToSignUp} style={{cursor:'pointer'}} className="text-white text-decoration-none fw-bold">Sign Up</span>
      </p>
    </form>
  </div>
);

export default LoginView;