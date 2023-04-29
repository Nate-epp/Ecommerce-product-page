import React from 'react'

function Skill() {
  return (
    <div className='scroll-mt-20' id='skill'>
    <h1 className='font-bold text-5xl text-center'>My Skills</h1>
        <div className='bg-gray-800 p-6 m-6 rounded-lg grid lg:grid-cols-2 w-4/5 mx-auto gap-4 '>
            <div className='lg:border-r-2 border-slate-500'>
                <p className='text-xl font-bold mb-8 '>Developer skills</p>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-y-4'>
                    <img className='w-16 h-16' src='/html-icon.png' alt='html-pic'/>
                    <img className='w-16 h-16' src='/css-icon.png' alt='css-pic'/>
                    <img className='w-16 h-16' src='/js-icon.png' alt='js-pic'/>
                    <img className='w-16 h-16' src='/react-icon.png' alt='html-pic'/>
                    <img className='w-20 h-16' src='/tailwind-icon.png' alt='html-pic'/>
                </div>
            </div>
            <div className='lg:ml-4'>
                <p className='text-xl font-bold mb-4'>Language & General skills</p>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-y-4 items-center'>
                    <img className='w-16 h-16' src='/thai-icon.png' alt='thai-pic'/>
                    <img className='w-16 h-16' src='/english-icon.png' alt='english-pic'/>
                    <img className='w-20 h-16' src='/japanese-icon.png' alt='japanese-pic'/>
                    <img className='w-25 h-25' src='/office-icon.png' alt='html-pic'/>
                </div>
            </div>
        </div> 
</div>
  )
}

export default Skill