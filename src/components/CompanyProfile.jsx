import LearnMoreButton from "./LearnMoreButton"

function CompanyProfile() {
  return (
    <div className='grid grid-rows-2 gap-8 mt-10 mb-82 max-h-96 md:grid-cols-2 md:gap-12 md:mt-0 md:mb-0'>
      <div className='md:flex md:h-96'>
      <img 
        src="../imgs/profile.jpg"
        alt="image"
        className='w-full h-full object-cover'/>

      </div>
    
      <div className='flex md:max-h-96 flex-col text-left gap-6 '>

      <h1 className='text-2xl text-extra-bold md:text-5xl text-bold '>Company Profile</h1>
      <p className='text-lg'>A local Malawian company incorporated under the
        company&apos;s registration act. The company focuses on:
        Carrying out Environmental Impact Assessment, conducting
        ESMP for projects of different nature, conducting
        environmental audits, developing project Briefs, conducting
        reconnaissance Surveys for mineral exploration projects,
        carrying out geological mapping and mineral exploration. The
        consultancy also provide services like map making and
        others
    </p>
    <div className="mt-8">
    <LearnMoreButton/>
    </div>
      
      </div>
  
    </div>
  )
}

export default CompanyProfile
