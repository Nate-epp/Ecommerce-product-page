import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header({cartEmpty, deleteCart, itemAmount}) {
    const [cartOpen, setCartOpen] = useState(false)
    const multiplySymbol = '\u00D7'
    const [burgerOpen, setBurgerOpen] = useState(false)
    

  return (
    <nav className='top-bar'>
        {/* Burger menu */}
        <div className='hamburger-menu'>
            <img alt='burger-menu-icon' src='/images/icon-menu.svg' onClick={()=>setBurgerOpen(true)} />
            <img src='/images/logo.svg' alt='company-logo' className='company-logo' />
            <div className={`burger-overlay ${burgerOpen ? 'active' : ''}`} />
            <div className={`hamburger-menu-inner ${burgerOpen ? 'active' : ''}`}>
                
                <img className='close-burger' src='/images/icon-close.svg' onClick={()=>setBurgerOpen(false)}/>
                <a href='#'>Collections</a>
                <a href='#'>Men</a>
                <a href='#'>Women</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>
        </div>
        {/* Normal Top left Nav */}
        <div className="top-bar-left">
            <img src='/images/logo.svg' alt='company-logo' className='company-logo' />
            <a href='#'>Collections</a>
            <a href='#'>Men</a>
            <a href='#'>Women</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </div>
        {/* Top Right Nav */}
        <div className="top-bar-right">
            <div className={`cart-icon ${cartEmpty? '' : 'active'}`} data-count={itemAmount} >
                <img onClick={()=> setCartOpen(!cartOpen)} src='/images/icon-cart.svg' alt='shopping-cart-icon' />
            </div>
                <img src='/images/image-avatar.png' alt='user-avatar' className='user-avatar' />  
                {/* Cart  */}
                <div className={`shopping-cart-dropdown ${cartOpen? 'active': ''}`}>
                    <h4>Cart</h4>
                    <hr></hr>
                    <div className='shopping-cart-content'>
                        {cartEmpty ? <div>Your cart is empty</div> : 
                        (
                        <>
                            <div className='shopping-cart-item'>
                                <img src='/images/image-product-1-thumbnail.jpg' alt='product' />
                                <div>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p className='shopping-cart-amount'>$125.00 {multiplySymbol} {itemAmount} <b>${125.00 * itemAmount}.00</b></p>
                                </div>
                                {/* Delete item */}
                                <img className='delete-icon' onClick={deleteCart} src='/images/icon-delete.svg'/>
                            </div>
                            <button className='check-out' onClick={()=>alert("Sorry, we're not open yet.")}>Check out</button>
                        </>)
                        
                        }
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Header


// Old code below
// {cartOpen && (
//     <div className={`shopping-cart-dropdown ${cartOpen? 'active': ''}`}>
//         <h4>Cart</h4>
//         <hr></hr>
//         <div className='shopping-cart-content'>
//             {cartEmpty ? <div>Your cart is empty</div> : 
//             (
//             <>
//                 <div className='shopping-cart-item'>
//                     <img src='/images/image-product-1-thumbnail.jpg' />
//                     <div>
//                         <p>Fall Limited Edition Sneakers</p>
//                         <p  className='shopping-cart-amount'>$125.00 {multiplySymbol} {itemAmount} <b>${125.00 * itemAmount}.00</b></p>
//                     </div>
//                     <img className='delete-icon' onClick={deleteCart} src='/images/icon-delete.svg'/>
//                 </div>
//                 <button className='check-out' onClick={()=>alert("Sorry, we're not open yet.")}>Check out</button>
//             </>)
            
//             }
//         </div>
//     </div>
// )}