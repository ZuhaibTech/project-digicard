import React, { useState } from "react";
import "./index.css";
import { initialFormData } from "./data";

// Import Components
import LandingPage from "./Components/LandingPage";
import SignUpView from "./Components/SignUpView";
import LoginView from "./Components/LoginView";
import OnboardingView from "./Components/OnboardingView";
import ProfileView from "./Components/ProfileView";

const App = () => {
  // View State: 'landing' | 'signup' | 'login' | 'onboarding' | 'profile'
  const [currentView, setCurrentView] = useState('landing');
  
  // Data State
  const [formData, setFormData] = useState({
    ...initialFormData,
    themeColor: '' // Store selected color here
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null); // Store uploaded banner here

  // Text Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Avatar Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, avatar: file }));
    }
  };

  // --- NEW: Banner Upload Handler ---
  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerPreview(URL.createObjectURL(file));
      // Clear specific color if image is uploaded to prioritize image
      setFormData(prev => ({ ...prev, themeColor: '' }));
    }
  };

  // --- NEW: Theme Color Handler ---
  const handleThemeColorSelect = (color) => {
    setFormData(prev => ({ ...prev, themeColor: color }));
    // Clear banner image if color is selected to prioritize color
    setBannerPreview(null);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setCurrentView('profile');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-5 position-relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="noise-overlay"></div>
      <div className="position-absolute rounded-circle" style={{width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(100,255,218,0.12) 0%, rgba(0,0,0,0) 70%)', top: '-10%', right: '-10%', filter: 'blur(100px)', zIndex: 0}}></div>
      <div className="position-absolute rounded-circle" style={{width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)', bottom: '-15%', left: '-15%', filter: 'blur(100px)', zIndex: 0}}></div>

      {/* --- Routing --- */}
      {currentView === 'landing' && (
        <LandingPage 
          onGetStarted={() => setCurrentView('signup')} 
          onLogin={() => setCurrentView('login')} 
        />
      )}

      {currentView === 'signup' && (
        <SignUpView 
          formData={formData} 
          handleChange={handleChange} 
          onNext={() => setCurrentView('onboarding')} 
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}

      {currentView === 'login' && (
        <LoginView 
          formData={formData} 
          handleChange={handleChange} 
          onLogin={() => setCurrentView('profile')} 
          onSwitchToSignUp={() => setCurrentView('signup')}
        />
      )}

      {currentView === 'onboarding' && (
        <OnboardingView 
          formData={formData} 
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          avatarPreview={avatarPreview}
          // Pass new handlers
          handleBannerUpload={handleBannerUpload}
          handleThemeColorSelect={handleThemeColorSelect}
          bannerPreview={bannerPreview}
          onSubmit={handleProfileSubmit}
        />
      )}

      {currentView === 'profile' && (
        <ProfileView 
          formData={formData}
          avatarPreview={avatarPreview}
          bannerPreview={bannerPreview} // Pass banner state
          onEdit={() => setCurrentView('onboarding')}
          onLogout={() => setCurrentView('login')}
        />
      )}
    </div>
  );
};

export default App;