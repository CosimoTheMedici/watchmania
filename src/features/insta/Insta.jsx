import React from 'react'
import { images } from '../../assets/img'
import { InstaCards } from '../../components/customComponents'
import Slider from 'react-slick'

const Insta = () => {

    const randomIterations=[1,2,3,4,5,6];
    const settings = {
        //className: "center",
        centerMode: true,
        infinite: true,
        //centerPadding: "60px",
        slidesToShow: 6,
        speed: 500
      };
  return (
    <div class="instagram">
        <div class="container-fluid">
          <div class="row">
            {/* <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-1.jpg"
                style={{ backgroundImage: `url(${images.category1})` }}
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div> */}
            <Slider {...settings}>
            {randomIterations.map((item, index) => (
       
            
        <InstaCards key={index} //data={Object.values(item)} 
        />
       

      ))}
      </Slider>

            {/* <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-2.jpg"
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-3.jpg"
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-4.jpg"
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-5.jpg"
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-6.jpg"
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  )
}

export default Insta