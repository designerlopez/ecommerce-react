import React from 'react'
import "./styles/CartProduct.css"

const CartProduct = ({cartProduct}) => {


  return (
    <article className='cartProduct'>
      <h4 className='cartProduct__brand'>{cartProduct.brand}</h4>
      <h3 className='cartProduct__title'>{cartProduct.title}</h3>
      <div className='cartProduct__quantity'>
        <p>{cartProduct.productsInCart.quantity}</p>
      </div>
      <footer className='cartProduct__footer'>
        <h3 className='cartProduct_price'><span className='cartProduct__price-title'>Total:</span> ${cartProduct.price}</h3>
      </footer>
      <i className='cartProduct__trash bx bx-trash'></i>
      
    </article>
  )
}

export default CartProduct