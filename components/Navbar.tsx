'use client'
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  let isMenuOpen = false
  useEffect(() => {
    const handleScroll = () => {
      const currentSrollPosition = window.scrollY
      if (currentSrollPosition > 0) {
        setScrolled(true)
      } else setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // <!--<nav-->
    // <!--	class="flex fixed top-0 left-0 right-0 z-50 w-auto h-[60px] bg-transparent transition-colors duration-300 {scrolled-->
    // <!--		? 'bg-white text-black'-->
    // <!--		: 'text-white'}"-->
    // <!--	on:mouseover={() => (scrolled = true)}-->
    // <!--	on:mouseout={() => (scrolled = window.scrollY > 0)}-->
    // <!--	on:focus={() => (scrolled = true)}-->
    // <!--	on:blur={() => (scrolled = window.scrollY > 0)}-->
    // <!--&gt;-->
    // <!--	<ul class="flex items-center w-full justify-around">-->
    // <!--		<li>-->
    // <!--			<a href="/" class="font-bold text-lg" />-->
    // <!--		</li>-->
    // <!--		<li>-->
    // <!--			<a href="/" class="font-bold text-lg" />-->
    // <!--		</li>-->
    // <!--		<li>-->
    // <!--			<a href="/" class="font-bold text-lg" />-->
    // <!--		</li>-->
    // <!--		<li>-->
    // <!--			<a href="/" class="font-bold text-lg" />-->
    // <!--		</li>-->
    // <!--	</ul>-->
    // <!--</nav>-->

    <nav className="bg-gray-800 z-50 fixed top-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => (isMenuOpen = !isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                src="/logo.png"
                alt="Logo Refugio Punahuel"
                height="60px"
                width="60pxs"
                className="{scrolled ? 'bg-slate-400' : 'bg-trasparent'} ml-10 self-center"
              />
            </div>
            <div className="hidden sm:ml-6 {isMenuOpen ? 'sm:block' : 'sm-hidden'}">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Inicio
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Acerca de
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Servicios
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 z-10 top-[72px] bg-black w-[100%]"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Inicio
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Acerca de
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Servicios
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
