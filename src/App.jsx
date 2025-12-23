import React, { useState, useEffect } from "react";
import "./index.css";
import { initialFormData } from "./data";

// Import Components
import LandingPage from "./components/LandingPage";
import SignUpView from "./components/SignUpView";
import LoginView from "./components/LoginView";
import OnboardingView from "./components/OnboardingView";
import ProfileView from "./components/ProfileView";
import PrivacyNoticeView from "./Components/PrivacyNoticeView";
import ThemeToggle from "./Components/ThemeToggle"; // <--- IMPORT NEW COMPONENT

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  
  // --- THEME LOGIC START ---
  // Default to 'dark' to match your boss's preference, or check local storage
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'dark');

  useEffect(() => {
    // This applies the class to the HTML tag so CSS knows which colors to use
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // --- THEME LOGIC END ---

  const [formData, setFormData] = useState({
    ...initialFormData,
    themeColor: '' 
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  // ... (Keep your existing handlers: handleChange, handleImageChange, etc.) ...
  // (I am omitting them here to save space, but DO NOT DELETE THEM from your code)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, avatar: file }));
    }
  };
  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerPreview(URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, themeColor: '' }));
    }
  };
  const handleThemeColorSelect = (color) => {
    setFormData(prev => ({ ...prev, themeColor: color }));
    setBannerPreview(null);
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setCurrentView('profile');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-5 position-relative overflow-hidden">
      
      {/* --- ADD TOGGLE BUTTON HERE --- */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Background Ambience */}
      <div className="noise-overlay"></div>
      
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
          bannerPreview={bannerPreview}
          onEdit={() => setCurrentView('onboarding')}
          onLogout={() => setCurrentView('login')}
          onPrivacyClick={() => setCurrentView('privacy')}
        />
      )}

      {currentView === 'privacy' && (
        <PrivacyNoticeView 
          onBack={() => setCurrentView('profile')} 
        />
      )}
    </div>
  );
};

export default App;