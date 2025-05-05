import React from 'react'


const LottieAnimation = () => {
  const animationSpeed = -0.01; // Adjust this value to control the speed

  return (
    <div className="text-center max-w-3xl h-[400px] md:order-1 hidden md:block">
      <iframe
        src={`https://lottie.host/embed/6b79f670-e3de-4f90-b304-b7d7705a39aa/ZE6KXCcnap.lottie?speed=${animationSpeed}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Lottie Animation"
      />
    </div>
  );
};

export default LottieAnimation;