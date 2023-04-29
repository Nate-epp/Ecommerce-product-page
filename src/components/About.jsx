import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function About({showMenu}) {
  return (
    <div id='about' className={`${showMenu?'mt-100 transition-all 2s ease-in grid lg:grid-cols-2 gap-6 items-center mx-6 rounded-lg p-6 scroll-mt-20 sm:grid-cols-1' : 'transition-all 2s ease-in grid lg:grid-cols-2 gap-6 items-center mx-6 rounded-lg mt-24 p-6 scroll-mt-20 sm:grid-cols-1'}`}>
        <img className='md:p-3 mx-auto rounded-3xl' src='/In_japan_musuem.png' alt='profile-pic'/>
        <div>
            <p className='text-blue-400 text-xl tracking-widest'>Hello everyone!</p>
            <h1 className='md:text-6xl font-bold text-4xl'>I'm <span className='text-blue-400'>Noppawat Eakpornpith</span></h1>
            <h2 className='my-4 text-3xl'>Junior Frontend Developer</h2>          
            <h3 className='md:text-5xl font-bold text-3xl'>About me</h3>
            <p className='my-6 text-slate-400'>Motivated professional with a strong desire to transition into the tech industry as a Junior Frontend Developer. Despite a background in sales engineering, I have developed a passion for coding and web development. Eager to apply my strong problem-solving skills, and commitment to continuous learning to contribute to a dynamic development team.</p>
            <div className='flex gap-4'>
                <div className='font-bold flex flex-col gap-4'>
                    <CalendarMonthIcon/>
                    <HomeIcon/>
                    <EmailIcon/>
                    <PhoneIphoneIcon/>
                </div>
                <div className='text-slate-400 flex flex-col  gap-4'>
          
                    <p >21 September 1992</p>
                    <p >Srinakarin Rd, Bangkeaw, Bang Pli, Samutprakarn, Thailand</p>
                    <p >noppawatcfa@gmail.com</p>
                    <p >+66(0)-87575-8228</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About