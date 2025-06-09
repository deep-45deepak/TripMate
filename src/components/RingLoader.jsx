import React from "react";
import '../assets/RingLoader.css'

const RingLoader = () => {
  return (
    <div className="pl">
      <svg className="pl__rings" viewBox="0 0 240 240">
        <circle className="pl__ring pl__ring--a" r="105" cx="120" cy="120" fill="none" strokeWidth="20" />
        <circle className="pl__ring pl__ring--b" r="35" cx="120" cy="120" fill="none" strokeWidth="20" />
        <circle className="pl__ring pl__ring--c" r="70" cx="120" cy="120" fill="none" strokeWidth="20" />
        <circle className="pl__ring pl__ring--d" r="70" cx="120" cy="120" fill="none" strokeWidth="20" />
      </svg>
    </div>
  );
};

export default RingLoader;
