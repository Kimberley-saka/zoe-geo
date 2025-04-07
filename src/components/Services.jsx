import { ReactSVG } from "react-svg"


function Services() {
  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-2xl text-left md:text-5xl'
      >What We Offer</h1>

      <div className='grid grid-rows-3 gap-12 md:grid-cols-3 bg-amber-300'>
      <div className='flex flex-col py-6 border-white border-1 rounded-2xl gap-y-4'>
        <h2 className='text-xl md:text-2xl font-bold'>GIS</h2>
        <img src="../imgs/gis.jpg" alt="" />
        <ReactSVG src="..//assets/checkmark.svg"/>
        <ul className='text-left p-3'>
          <li>Image analysis and interpretation</li>
          <li>Aerial Image capture</li>
          <li>Mapping and networking</li>
          <li>Geospatial analysis</li>
          <li>GPS data collection</li>
        </ul>

        <div className='flex justify-center'>
        <button className='bg-gray-500 w-24 h-10 '
        >Learn More</button>
        </div>
        

      </div>

      </div>

     
    </div>
  )
}

export default Services
