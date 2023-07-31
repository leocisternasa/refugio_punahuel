import React from 'react'

const URL_SOURCE =
  'https://www.google.com/maps/embed/v1/place?key=AIzaSyDm0ImzRgOeo2b4u2KmHgfXFhN_2O-BEtU&q=Eiffel+Tower,Paris+France'

function Map() {
  return (
    <div className="w-[60%] m-auto">
      <h3 className="text-3xl mt-4 text-center mb-4 font-bold">Ubicación</h3>
      <iframe
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={URL_SOURCE}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Map
