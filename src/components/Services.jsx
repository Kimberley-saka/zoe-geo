import checkmark from '../assets/checkmark.svg';
import LearnMoreButton from './LearnMoreButton';


function Services() {
  return (
    <div className='flex flex-col gap-y-8 h-1/2'>
      <h1 className='text-2xl text-left md:text-5xl'
      >What We Offer</h1>

      <div className='grid gap-12 md:grid-cols-3'>
        <div className='flex flex-col py-6 border-0 rounded-2xl
        gap-y-4 shadow-[0_0_5px_#ffffff] transition-all duration-300'>
          <h2 className='text-xl md:text-2xl font-bold'>GIS</h2>
          <img src="../imgs/gis.jpg" alt=""/>
          <div className='flex flex-col gap-1.5 text-left p-3'>

            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>Mapping and networking</p>
            </div>

            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>Geospatial analysis</p>
            </div>

            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>GPS data collection</p>
            </div>

          </div>
          <div className='flex h-full items-center justify-center'>
          <LearnMoreButton/>     
          </div>
               

        </div>

        <div className='flex flex-col py-6 border-0 rounded-2xl
        gap-y-4 shadow-[0_0_5px_#ffffff] transition-all duration-300'>
          <h2 className='text-xl md:text-2xl font-bold'>Remote Sensing</h2>
          <img src="../imgs/false-colour.png" alt="" className='object-contain'/>
          <div className='flex flex-col gap-1.5 text-left p-3'>
            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>Image Classification</p>
            </div>

            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>Image analysis and interpretation</p>
            </div>

            <div className='flex gap-x-2 items-center'>
              <img src={checkmark} alt="checkmark" className='w-4 h-4' />
              <p>Aerial Image capture</p>
            </div>
          </div>          
          <div className='flex h-full items-center justify-center'>
          <LearnMoreButton/>     
          </div>

        </div>


        <div className='flex flex-col py-6 border-0 rounded-2xl
        gap-y-4 shadow-[0_0_5px_#ffffff] transition-all duration-300'>
          <h2 className='text-xl md:text-2xl font-bold'>GIS Training</h2>
          <img src="../imgs/training.jpg" alt=""/>
          <div className='flex flex-row gap-1.5 text-left p-3'>
            <div className='flex flex-row gap-x-2'>
              <div className='flex w-10 h-10 items-start pt-1'>
              <img src={checkmark} alt="checkmark" className='' />
              </div>
              
              <p>Equiping individuals and organizations with skills to analyze, visualize, and manage spatial data</p>
            </div>

          </div>

          <div className='flex h-full items-center justify-center'>
          <LearnMoreButton/>     
          </div>
          
        </div>

        </div>
  
    </div>
  )
}

export default Services
