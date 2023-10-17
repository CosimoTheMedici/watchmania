import React from 'react'
import { images } from '../../../../assets/img'

export const InstaCards = () => {
  return (
          // <div  class="col-lg-2 col-md-4 col-sm-4 p-0">
         
              <div
                //class="instagram__item set-bg"
                //data-setbg="img/instagram/insta-2.jpg"
                style={{ backgroundImage: `url(${images.category5})` }}
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            
  )
}

