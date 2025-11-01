import React from "react";
import "../styles/scss/loader.scss";

const Spinner: React.FC<{size?: number; label?: string}> = ({ size = 20, label }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
  };
  return (
    <div className="spinner" role={label ? "status" : "img"} aria-label={label} style={style}>
      <svg viewBox="0 0 50 50" className="spinner-svg" style={{width: size, height: size}}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
    </div>
  );
};

export default Spinner;
