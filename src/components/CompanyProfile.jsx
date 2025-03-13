import React from 'react'

function CompanyProfile() {
  return (
    <div className='grid grid-cols-2 gap-10'>
      <img src="../imgs/profile.jpg" alt="image" className='h-96' />
      <div className='flex flex-col text-left gap-y-4'>
      <h1 className='text-2xl text-extra-bold md:text-5xl text-bold '>Company Profile</h1>
      <p>A local Malawian company incorporated under the
        company's registration act. The company focuses on:
        Carrying out Environmental Impact Assessment, conducting
        ESMP for projects of different nature, conducting
        environmental audits, developing project Briefs, conducting
        reconnaissance Surveys for mineral exploration projects,
        carrying out geological mapping and mineral exploration. The
        consultancy also provide services like map making and
        others
    </p>
       <button className='bg-gray-400 h-10 w-32'
       >Learn More</button>
      </div>
  
    </div>
  )
}

export default CompanyProfile
