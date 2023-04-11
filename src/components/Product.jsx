import React from 'react'
import { useState } from 'react'
import './Product.css'

function Product({ plus, minus, count, submitHandler }) {

  return (
    <form  className='product-profile' onSubmit={submitHandler}>
        <h4 className='product-profile-header'>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='price-mobile'>
            <h2 className='discount'>$125.00</h2>
            <h4 className='full-price'>$250.00</h4>
        </div>
        <div className='product-profile-bottom'>
            <span className='math-operator'>
                <button type='button' className='math-operator-btn' onClick={minus}><img src='/images/icon-minus.svg' /></button>
                <span>{count}</span>
                <button type='button' className='math-operator-btn' onClick={plus}><img src='/images/icon-plus.svg' /></button>
            </span>
            <button type='submit' className='add-to-cart'><img className='cart' src='/images/icon-cart-white.svg'/> Add to cart</button>
        </div>
    </form>
  )
}

export default Product