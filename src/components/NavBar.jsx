import React from 'react'
function NavBar({menuHandler, showMenu}) {
    

  return (
    <nav className='flex justify-between w-screen fixed top-0 bg-black p-6'>        
            <h1 className='font-bold text-xl'>Nate_Epp</h1>
             {/* Mobile */}
            <button className='md:hidden absolute right-6 mt-1' onClick={menuHandler} ><img src='/icon-menu.svg' alt='icon-menu'/></button> 
            <div className='md:hidden place-content-end'>      
                <div>        
                    <ul onClick={menuHandler} className={`${showMenu? 'md:hidden gap-6 grid text-right mt-8 font-bold transition-all 2s ease-out opacity-80': 'hidden transition-all 2s ease-out opacity-0' }`}>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#'>Home</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#about'>About</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#education'>Education</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#experience'>Experience</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#skill'>Skill</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#portfolio'>Portfolio</a></li>
                        <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#contact'>Contact</a></li>
                    </ul>
                </div>  
            </div>
            {/* Desktop */}
            <ul className='hidden md:flex gap-8 '>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#'>Home</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#about'>About</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#education'>Education</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#experience'>Experience</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#skill'>Skill</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#portfolio'>Portfolio</a></li>
                <li className='transition-all hover:border-b-4 hover:border-blue-400 hover:-mb-6 hover:ease-out'><a href='#contact'>Contact</a></li>
            </ul>
    </nav>
  )
}

export default NavBar