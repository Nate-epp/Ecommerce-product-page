import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from 'react';
import Modal from './Modal';

function Contact() {

    const form = useRef()
    const [isHuman, setIsHuman] = useState(false)
    const [modalOff, setModalOff] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault()
        if (!isHuman){
            return
        } else {
        setModalOff(false)
        emailjs.sendForm('service_zwmgxtd', 'template_t8oha9g', form.current, 'QXZslCHxl6dv7Pad_')
            .then(result => console.log(result))
            .catch((err)=>console.log(err))
        }
        form.current.reset()
    }
    function recaptchaHandler(value){
        setIsHuman(true)
    }

    function modalHandler(){
        setModalOff(true)
    }

  return (
    <div id='contact' className='text-center scroll-mt-20'>
        <h1 className='font-bold text-5xl'>Contact Me</h1>
        <div className='grid gap-4 md:grid-cols-3 my-8 mx-auto w-4/5 '>
            <div className='flex md:block items-center gap-6'>
                <span className='p-6 inline-block rounded-full bg-gray-800'><PhoneIcon/></span>
                <p className='hidden md:block my-4 tracking-widest '>CONTACT NUMBER</p>
                <p className='text-xl font-bold md:font-normal md:text-lg'>+66(0)-87575-8228</p>
            </div>
            <div className='flex md:block items-center gap-6'>
                <span className='p-6 inline-block rounded-full bg-gray-800'><SendIcon/></span>
                <p className='hidden md:block my-4 tracking-widest  '>EMAIL ADDRESS</p>
                <p className='text-xl font-bold md:font-normal md:text-lg'>noppawatcfa@gmail.com</p>
            </div>
            <div className='flex md:block items-center gap-6'>
                <span className='p-6 inline-block rounded-full bg-gray-800 '><PublicIcon/></span>
                <p className='hidden md:block my-4 tracking-widest  '>WEBSITE</p>
                <p className='text-xl font-bold md:font-normal md:text-lg'>nate_epp.com</p>
            </div>
        </div>
        <div className='bg-gray-800 py-4 px-6 inline-block rounded-md text-start min-w-1/2 md:min-w-1/3'>
            {/* Email to me */}
            <form onSubmit={sendEmail} action='/' ref={form} name='contact' method='POST' className=''>
                <div className=''>
                    <label htmlFor='name'>Name:</label><br></br>
                    <input required id='name' type='text' name='from_name' className='px-1 py-2 text-slate-800 rounded-sm w-full' placeholder='Your name'/>
                </div>
                <div className='my-4'>
                    <label htmlFor='email'>Email:</label><br></br>
                    <input id='email' name='email_from' className='px-1 py-2 text-slate-800 rounded-sm w-full' type='email' placeholder='YourEmail@email.com'/>
                </div>
                <div className='my-4'>
                    <label htmlFor='subject'>Subject:</label><br></br>
                    <input required id='subject' name='subject' className='px-1 py-2 text-slate-800 rounded-sm w-full' placeholder='Subject'/>
                </div>
                <div className='my-4'>
                    <label htmlFor='message'>Message:</label><br></br>
                    <textarea required id='message' rows='4' name='message' className='text-slate-800 rounded-sm w-full min-h-full px-1 py-2' placeholder='Please write your message here...'/>
                </div>
                    <ReCAPTCHA className='mx-auto' sitekey='6LdWE8clAAAAAJHE2p1zyRe9vjjSmvXV4Qfkm2d6' onChange={recaptchaHandler}/>
                  
                    <button type='submit' className='bg-blue-800 px-6 py-2 my-4  rounded-3xl font-bold tracking-widest'>Submit<SendIcon className='ml-4'/></button>
            </form>
            <Modal modalOff={modalOff} modalHandler={modalHandler} />
        </div>

    </div>
  )
}

export default Contact


// data-netlify-recaptcha="true" data-netlify="true"

{/* <div data-netlify-recaptcha="true"></div> */}