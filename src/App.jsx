import { useState } from 'react'

import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  const [cartEmpty, setCartEmpty] = useState(true)
  const [count, setCount] = useState(0)
  const [itemAmount, setItemAmount] = useState(0)

    function plusHandler(){
        setCount(prevCount => prevCount + 1)
    }

    function minusHandler(){
        if (count > 0){
        setCount(prevCount => prevCount - 1)
        }
    }

  const addToCart = () => {
      setCartEmpty(false)
  }

  const deleteCart = () => {
      setCartEmpty(true)
      setItemAmount(0)
  }

  function submitOrderHandler(event){
      event.preventDefault();
      if (count!== 0){
        setCartEmpty(false)
        setItemAmount(prevCount => prevCount + count)
      }
      return
      

  }

  return (
    <div className="App">
      <Header cartEmpty={cartEmpty} deleteCart={deleteCart} itemAmount={itemAmount}  />
      <hr></hr>
      <div className='page-body'>
          <Gallery />
          <Product addToCart={addToCart} plus={plusHandler} minus={minusHandler} count={count} submitHandler={submitOrderHandler} />
      </div>
      <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Nate Epp</a>.
      </div>
    </div>
  )
}

export default App
