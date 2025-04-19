import React from 'react';

function LottieAnimation() {
  return (
    <div className="text-center max-w-3xl h-[400px] md:order-1 hidden md:block">
      <dotlottie-player
        src="https://lottie.host/e637bfa7-350f-4b64-9e4a-a00991377a70/lDVwHHchUs.lottie"
        background="transparent"
        speed="0.3"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
}

export default LottieAnimation;

