import React from 'react'

function Experience() {
  return (
    <div className='text-center scroll-mt-20' id='experience'>
        <h1 className='font-bold text-5xl'>Experience</h1>
        <div className='w-full md:w-4/5 mx-auto'>
            <div className='bg-gray-800 m-6 p-6 text-start rounded-lg flex flex-col md:flex-row md:items-center'>
                <div className=''>
                    <p className='text-blue-400 font-bold text-2xl mb-2'>2019 - 2022</p>
                    <p className='text-2xl mb-2'>Sales engineer</p>
                    <p className='mb-4 text-slate-300 tracking-widest'>MAYEKAWA THAILAND CO.,LTD</p>
                </div>
                <div className='md:ml-4 md:border-l-2 border-slate-500 md:pl-4 '>
                    <p className='text-xl font-bold mb-4'>Responsibilities</p>
                    <ul className='list-disc ml-4 leading-7 text-slate-300'>
                    <li>Collaborate with the sales team to identify potential customers and contribute to sales strategies.</li>
                    <li>Conduct product demonstrations and technical presentations to showcase the features and benefits of products.</li>
                    <li>Provide technical support and troubleshoot issues for clients during the sales process.</li>
                    <li>Conduct competitive analysis to identify market trends, customer needs, and opportunities for product development.</li>
                    <li>Build and maintain strong relationships with key customers.</li>
                </ul>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Experience