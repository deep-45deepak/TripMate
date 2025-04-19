import React from 'react';
import '@dotlottie/player-component';

const LottiePlayer = () => {
  return (
    <div className="w-full h-full">
      <dotlottie-player
        src="https://lottie.host/5c00d0c5-c49f-41ab-89eb-786e898a5abd/t7DYQJlRv5.lottie"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      ></dotlottie-player>
    </div>
  );
};

export default LottiePlayer;
