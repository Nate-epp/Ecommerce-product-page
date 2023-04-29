import React from 'react'

function Education() {
  return (
    <div className='text-center scroll-mt-20' id='education'>
        <h1 className='font-bold text-5xl'>Education</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-4'>
            <div className='bg-gray-800 m-6 p-6 text-start rounded-lg'>
                <p className='text-blue-400 font-bold text-2xl mb-2'>2017 - 2018</p>
                <p className='text-2xl mb-2'>Commercial Pilot License</p>
                <p className='mb-4 text-slate-300 tracking-widest'>CALIFORNIA FLIGHT ACADEMY</p>
              
                <ul className='list-disc ml-4 leading-7'>
                    <li>Single-engine & Multi-engines</li>
                    <li>Intrument rating</li>
                    <li>Pass all three checkrides in one go</li>
                </ul>
            </div>
            <div className='bg-gray-800 m-6 p-6 text-start rounded-lg'>
                <p className='text-blue-400 font-bold text-2xl mb-2'>2012 - 2016</p>
                <p className='text-2xl mb-2'>Bachelor's Degree of Mechanical Engineering</p>
                <p className='mb-4 text-slate-300 tracking-widest'>CHIANGMAI UNIVERSITY</p>
               
                <ul className='list-disc ml-4 leading-7'>
                    <li>GPA 2.86</li>
                    <li>Internship at Chevron Songkhla</li>
                    <li>Repesentative of Karate club</li>
                    <li>Member of Astronomy club</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Education