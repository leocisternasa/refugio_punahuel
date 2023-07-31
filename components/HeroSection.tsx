'use client'

import { Transition } from '@headlessui/react'
import React, { useEffect } from 'react'

function HeroSection() {
  let isOpen = true

  return (
    <div>
      <video
        className="z-0 w-[100vw] h-[80vh] opacity-90 object-cover top-0"
        autoPlay
        loop
        muted
      >
        <source src="/Punahuel.mp4" type="video/mp4" />
      </video>

      <section>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="text-white text-center font-bold text-6xl absolute top-[30vh] z-10 opacity-100 w-full sm:text-2xl lg:text-7xl transition-opacity ease-in duration-700 ">
            <div>Tu Refugio En Chiloé</div>
            <div className="text-xl mt-4">
              Parcelas de 5,000 metros cuadrados desde $25.000.000
            </div>
          </div>
        </Transition>
      </section>
    </div>
  )
}

export default HeroSection
