import React from 'react'

export default function Introduction() {
  return (
    <div className="relative">
      <div className="flex-column text-center mt-[70px] mb-16">
        <div className="text-base font-normal tracking-[10px] text-slate-400">
          BIENVENIDOS A
        </div>
        <div className="text-3xl leading-10 tracking-[10px] text-[#A1BB4A] font-normal">
          REFUGIO PUNAHUEL
        </div>
        <div className="border-t-2 border-t-slate-300 w-[20%] flex justify-center ml-[40%] mt-1 mb-6"></div>
        <div className="text-xl text-slate-800 w-[80%] md:w-[60%] m-auto leading-8">
          Parcelas urbanizadas de 5.000 metros cuadrados!
        </div>
        <div className="text-lg leading-8 text-slate-400 w-[80%] md:w-[60%]  m-auto mt-6">
          Bienvenidos a Refugio Punahuel, un proyecto de venta de parcelas de
          5000 metros cuadrados ubicado en la comuna de Dalcahue, en la hermosa
          isla de Chiloé. Esta es una oportunidad única para aquellos que buscan
          vivir en un entorno tranquilo, rodeado de naturaleza y en una zona de
          actual auge.
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-20 mb-24 md:mx-48">
        <div className="basis-1/4 mx-1">
          <div className="flex justify-center">
            <img
              src="/water_icon.svg"
              alt="icono hoja verde"
              width="40px"
              height="auto"
            />
          </div>
          <div className="w-[50%] flex justify-center ml-[27%] mt-1 mb-6"></div>
          <div className="text-center text-slate-700 leading-7">
            <p className="font-bold text-xl mb-4">Factibilidad de Agua</p>
            Agua de pozo, Agua Potable rural con medidores de agua.
          </div>
        </div>
        <div className="basis-1/4 mx-1"></div>
        <div className="basis-1/4 mx-1 mb-5">
          <div className="flex justify-center">
            <img
              src="/electricidad.svg"
              alt="icono hoja verde"
              width="40px"
              height="auto"
            />
          </div>
          <div className="w-[50%] flex justify-center ml-[27%] mt-1 mb-6"></div>
          <div className="text-center text-slate-700 leading-7">
            <p className="font-bold text-xl mb-4">Factibilidad Eléctrica</p>
            El último poste esta a la entradas de la parcela numero 1 del lote.
          </div>
        </div>
        <div className="basis-3/4 mx-1 mt-12">
          <div className="text-left text-slate-700 leading-7">
            <ul>
              <li className="flex items-center center text-lg mb-8 md:mb-6">
                <img
                  className="mr-4"
                  src="/recycled-paper-eco-svgrepo-com.svg"
                  alt="icono hoja verde"
                  width="30px"
                  height="auto"
                />
                Parcelas con rol propio inscritas en el conservador de bienes
                raíces. Subdivisión aprobada por el SAG.
              </li>
              <li className="flex items-center center text-lg mb-8 md:mb-6">
                <img
                  className="mr-4"
                  src="/pine-tree-svgrepo-com.svg"
                  alt="icono hoja verde"
                  width="30px"
                  height="auto"
                />
                Parcelas planas con bosque nativo ideales para diseñar tu propio
                espacio y senderos en tu nuevo hogar.
              </li>
              <li className="flex items-center center text-lg mb-8 md:mb-6">
                <img
                  className="mr-4"
                  src="/sun-warm-svgrepo-com.svg"
                  alt="icono hoja verde"
                  width="30px"
                  height="auto"
                />
                Caminos de ingreso aptos para todo tipo de vehiculos.
              </li>
              <li className="flex items-center center text-lg mb-8 md:mb-6">
                <img
                  className="mr-4"
                  src="/worldwide-svgrepo-com.svg"
                  alt="icono hoja verde"
                  width="30px"
                  height="auto"
                />
                Conectividad a internet mediante internet satelital (Starlink),
                BAM (Banda Ancha Móvil) y conexión 4G/5G.
              </li>
            </ul>
          </div>
          <div className="border-t-[1px] border-t-slate-300 w-[50%] flex justify-center ml-[27%] mt-4 mb-6"></div>
        </div>
      </div>
    </div>
  )
}
