import ArrowRight from '../assets/arrow-right.svg';

function LearnMoreButton() {
  return (
    <>
       <div className='flex h-full items-center justify-center'>
            <button className='border-2 border-white w-32 h-8 flex items-center
            hover:scale-102 transition-all duration-100 justify-center gap-2 '
            >Learn More
            <img src={ArrowRight} alt="arrow" className='w-4 h-4' />
            </button>
            
          </div>
    </>
  )
}

export default LearnMoreButton
