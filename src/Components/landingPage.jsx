import React, { useState, useEffect } from "react";
import axios from "axios";
import { quote_url } from "../constants";

function LandingPage() {
  const [quote, setQuote] = useState("Quote is loading....");

  useEffect(() => {
    
   
   axios.request(quote_url)
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.log(error);
   });
  }, []);

  return (
    <div className='ym-landing-page-container'>
      <div className='ym-landing-page-top'>
        <div className='ym-profile-image-section'>
          <div class='profile-frame'>
            <img src='profile.jpg' alt='Profile' class='profile-image'></img>
          </div>
        </div>
        <div className='ym-my-info-simple-section'></div>
      </div>
    </div>
  );
}

export default LandingPage;
