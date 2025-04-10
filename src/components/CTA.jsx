import ArrowRight from '../assets/arrow-right.svg'

function CTA() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center max-h-96 text-center ">
      <h1 className="text-3xl font-bold md:text-5xl">
      Register today and unlock the power of
      spatial data with our expert-led GIS
      classes.
      </h1>

    <div className='flex items-center'>
          <button className='border-2 border-white w-32 h-10 flex items-center
          hover:scale-110 transition-all duration-100 justify-center gap-2 text-lg '
          >Learn More
          <img src={ArrowRight} alt="arrow" className='w-4 h-4' />
          </button>
          
        </div>
    </div>
    
  )
}

export default CTA
