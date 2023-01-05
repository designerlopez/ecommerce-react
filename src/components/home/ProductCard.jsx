import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/ProductCard.css"

const ProductCard = ({product}) => {

const navigate=useNavigate()
const handleClickProduct=()=>{
  navigate(`/products/${product.id}`)
}

const handleClickAddCart=(e)=>{
  e.stopPropagation()

}

  return (
    <article className='productCard' onClick={handleClickProduct}>
        <header className='productCard__header'>
            <img src={product.productImgs[0]} alt="" />
        </header>
      
        <div className='productCard__body'>
            <h3 className='productCard__title'>{product.title}</h3>
            <h4 className='productCard__title-price'>Price</h4>
            <span className='productCard__price'>$ {product.price}</span>
            <button className='productCard__btn' onClick={handleClickAddCart}>
            <i className='bx bx-cart'></i>
            </button>
        </div>

    </article>
  )
}

export default ProductCard