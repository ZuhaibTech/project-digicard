import React from 'react';
import { Icons } from './Icons';

const ProfileView = ({ formData, avatarPreview, bannerPreview, onEdit, onLogout }) => {
  
  const getBannerStyle = () => {
    if (bannerPreview) {
      return { 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${bannerPreview})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    if (formData.themeColor) {
      return { 
        background: `linear-gradient(to bottom, ${formData.themeColor}dd, ${formData.themeColor}), #000` 
      };
    }
    return {}; 
  };

  return (
    <div className="glass-card rounded-4 w-100 overflow-hidden position-relative z-1 fade-up" style={{ maxWidth: "900px" }}>
      
      <div className="profile-banner" style={getBannerStyle()}>
        <div className="d-flex justify-content-between align-items-center p-4">
          <button onClick={onEdit} className="profile-header-btn">
            ← Edit Profile
          </button>
          <button onClick={onLogout} className="profile-header-btn d-flex align-items-center gap-2">
            <Icons.Login /> Log Out
          </button>
        </div>

        <div className="p-5 text-center">
           <div className="mx-auto mb-4 p-1 rounded-circle border border-2 border-light border-opacity-25" style={{width: '130px', height: '130px'}}>
             {avatarPreview ? 
               <img src={avatarPreview} alt="Avatar" className="rounded-circle w-100 h-100 object-fit-cover" /> : 
               <div className="w-100 h-100 bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"><Icons.User /></div>
             }
           </div>
           <h1 className="fw-bold text-white mb-1">{formData.fullName || "Your Name"}</h1>
           <p className="text-info mb-3" style={{color: '#64ffda'}}>{formData.jobTitle || "Job Title"} @ {formData.companyName || "Company"}</p>
           <p className="bio-text small max-w-md mx-auto mt-3" style={{maxWidth: '600px'}}>{formData.aboutMe || "No bio provided."}</p>
        </div>
      </div>

      <div className="row g-0">
         <div className="col-md-7 p-5 border-end border-secondary border-opacity-10">
            <h6 className="section-title mb-4">Contact Information</h6>
            
            <div className="info-row">
              <div className="info-icon"><Icons.Phone /></div>
              <div><span className="label-text">Work Phone</span><span className="value-text">{formData.workPhone || "N/A"}</span></div>
            </div>
            <div className="info-row">
              <div className="info-icon"><Icons.Mail /></div>
              <div><span className="label-text">Work Email</span><span className="value-text">{formData.workEmail || "N/A"}</span></div>
            </div>
            <div className="info-row">
              <div className="info-icon"><Icons.Globe /></div>
              <div><span className="label-text">Website</span><span className="value-text">{formData.website || "N/A"}</span></div>
            </div>
            
            <h6 className="section-title mb-4 mt-5">Address</h6>
            <div className="info-row border-0">
              <div className="info-icon"><Icons.MapPin /></div>
              <div>
                <span className="value-text d-block">{formData.address || "Street Address"}</span>
                <span className="label-text">{formData.city || "City"}, {formData.country || "Country"}</span>
              </div>
            </div>
         </div>

         <div className="col-md-5 p-5" style={{background: '#0d1117'}}>
            <h6 className="section-title mb-4">Social Networks</h6>
            <div className="social-grid">
              <button className="social-btn linkedin">LinkedIn <Icons.ArrowRight /></button>
              <button className="social-btn twitter">X / Twitter <Icons.ArrowRight /></button>
              <button className="social-btn whatsapp">WhatsApp <Icons.ArrowRight /></button>
              <button className="social-btn facebook">Facebook <Icons.ArrowRight /></button>
            </div>

            <div className="mt-5 pt-4 border-top border-secondary border-opacity-10">
              {/* Add to Contacts Button */}
              <button className="btn w-100 py-3 fw-bold text-dark d-flex align-items-center justify-content-center gap-2"
                style={{ background: '#2dd4bf', border: 'none', borderRadius: '6px' }}>
                <Icons.Check /> Add to Contacts
              </button>

              {/* --- NEW BUTTON: Book a Consultation --- */}
              <button className="btn-consultation">
                Book a Consultation
              </button>

              <div className="text-center mt-3">
                <a href="#" className="privacy-link small">Privacy Notice</a>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileView;