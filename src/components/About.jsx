import React from 'react'

function About() {
  return (
    <div className='grid grid-rows-3 text-left gap-10 md:max-h-96 md:grid-cols-3 '>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold text-center'>Vision</h1>
        <p className='text-lg'>
        To be a recognized environmental and
        geoinformatics consultancy company
        that focuses on sustainable growth,
        delivers on our commitments to
        excellence, and values and develops
        our employees and the communities in
        which we operate.
        </p>
      </div>

      <div className='flex flex-col gap-6 h-96'>
        <h1 className='text-3xl font-bold text-center'>Objective</h1>
        <p>
        Providing environmental,
        GIS, andremote sensing services with 
        anunparalleled safety and environmentalrecord.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold text-center'>Mission</h1>
        <p>
        we commit to continuous self-
        improvement and training to develop
        our employees, who are our greatest
        assets, to international standards in all
        facets of environmental management,
        remote sensing, and mining, including
        safety, environmental stewardship, and
        productivity. We are also dedicated to
        transforming the lives of local people in
        the areas where we operate.
        </p>
      </div>


    </div>
  )
}

export default About
