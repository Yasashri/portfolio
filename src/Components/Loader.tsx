import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../assets/Developer.json";
import "../styles/scss/loader.scss";

const Loader: React.FC = () => (
  <div className="loader">
    <div className="loader__content">
      <Lottie
        animationData={developerAnimation}
        loop={true}
        style={{ width: "80vw", maxWidth: 400, minWidth: 180 }}
      />
      <div className="loader__text">Loading...</div>
    </div>
  </div>
);

export default Loader;