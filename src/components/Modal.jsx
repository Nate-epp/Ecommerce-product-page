import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Modal({modalOff, modalHandler}) {
    if (modalOff){
        return null
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm grid place-items-center h-full'>      
        <div className='bg-slate-800 m-8 p-8 rounded-lg flex flex-col text-center relative w-1/2 md:p-12 lg:w-1/3'>
        <button onClick={modalHandler} className='absolute -right-4 -top-4 p-4 bg-indigo-700 rounded-full focus:animate-pulse'><CloseIcon fontSize='medium'/></button>
            <img className='m-auto md:w-2/3 ' alt='email-icon' src='/email-icon.png' />
                <p className='text-3xl md:text-4xl font-bold my-4'>Thank you for contacting me!</p>
                <p className='text-slate-400 text-xl md:text-2xl'>I will reach you back as soon as possible.</p>       
        </div>
    </div>
  )
}

export default Modal