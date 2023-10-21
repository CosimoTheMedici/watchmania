import React, { useEffect } from 'react'
import { images } from '../../assets/img'
import { TrendCards } from '../../components/customComponents'

const Trends = () => {

 
  return (
    <section class="trend spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="trend__content">
                <div class="section-title">
                  <h4>Hot Trend</h4>
                </div>
                {/* <div class="trend__item">
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
                <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.ht2} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Pendant earrings</h6>
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
                <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.ht3} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Cotton T-Shirt</h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div> */}
                <TrendCards />
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="trend__content">
                <div class="section-title">
                  <h4>Best seller</h4>
                </div>
                {/* <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.bs_1} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Cotton T-Shirt</h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div> */}
                 <TrendCards />
                {/* <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.bs_2} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>
                      Zip-pockets pebbled tote <br />
                      briefcase
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div> */}
                {/* <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.ht3} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Round leather bag</h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div> */}
               
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="trend__content">
                <div class="section-title">
                  <h4>Feature</h4>
                </div>
                {/* <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.f1} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Bow wrap skirt</h6>
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
                <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.f2} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Metallic earrings</h6>
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
                <div class="trend__item">
                  <div class="trend__item__pic">
                    <img src={images.f3} alt="" />
                  </div>
                  <div class="trend__item__text">
                    <h6>Flap cross-body bag</h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div> */}
                 <TrendCards />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Trends