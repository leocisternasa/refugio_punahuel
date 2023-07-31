import React from 'react'

function Footer() {
  return (
    <footer className="w-[80%] md:w-[60%] m-auto text-center my-4">
      <p className="text-slate-400 text-lg mb-4">Proyecto Punahuel 2023</p>
      <ul>
        <li className="mb-2">
          <a href="mailto:leocisal@gmail.com">Contacto</a>
        </li>
        <li className="mb-2">Condiciones Legales</li>
        <li className="mb-2">Quienes somos?</li>
        <li className="mb-2">Preguntas Frecuentes</li>
      </ul>
    </footer>
  )
}

export default Footer
