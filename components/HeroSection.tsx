import React from 'react'

function HeroSection() {
  return (
    <div>
        <video
        className="w-full h-[50vh] lg:h-full object-contain block lg:absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src="/Punahuel.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default HeroSection