import React from 'react'

function Portfolio() {
  return (
    <div>
        <h1 id='portfolio' className='font-bold text-5xl text-center scroll-m-20'>Portfolio</h1>
        <div className='flex w-4/5 md:w-full mx-auto flex-col md:flex-row items-center p-6 gap-6 text-center'>
            <a className='hover:opacity-50 transition-opacity ease-in text-xl ' href='https://graceful-bienenstitch-dee73d.netlify.app'><img className='mb-2 rounded-lg aspect-video' src='/e-commerce-page.png' alt='e-commerce-page'/>E-commerce Page</a>
            <a className='hover:opacity-50 transition-opacity ease-in text-xl ' href='https://jazzy-marshmallow-59fc25.netlify.app'><img className='mb-2 rounded-lg aspect-video' src='/todo-app.png' alt='todo-app'/>Todo App</a>
            <a className='hover:opacity-50 transition-opacity ease-in text-xl ' href='https://papaya-cheesecake-2b5770.netlify.app'><img className='mb-2 rounded-lg aspect-video' src='/ip-address-tracker.png' alt='ip-address-tracker'/>IP Address Tracker</a>
        </div>
    </div>
  )
}

export default Portfolio