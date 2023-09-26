import React from "react";

function landingPage() {
  return (
    <div className='ym-landing-page-container'>
      <div className='ym-landing-page-top'>
        <div className='ym-profile-image-section'>
          <div class='profile-frame'>
            <img
              src='profile.jpg'
              alt='Profile Image'
              class='profile-image'
            ></img>
          </div>
        </div>
        <div className="ym-my-info-simple-section"></div>
      </div>
    </div>
  );
}

export default landingPage;
