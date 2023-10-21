import React from 'react'
import { images } from '../../../../assets/img'
import { Link } from 'react-router-dom'

export const TrendCards = () => {
  const randomIterations=[1,2,3]
  return (
<>
    {randomIterations.map((item, index) => (
        <Link 
        to={{
          pathname: '/productDetails',
          state: { data: "dataToSend" }
        }}
        >
      <div class="trend__item" key={index}>
    <div class="trend__item__pic">
      <img src={images.ht1} alt="" />
    </div>
    <div class="trend__item__text">
      <h6>Chain bucket bag</h6>
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <div class="product__price">$ 59.0</div>
    </div>
  </div>
  </Link>
    ))}
    
    </>
  )
}

