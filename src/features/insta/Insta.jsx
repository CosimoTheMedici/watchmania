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
        //margingLeft: "60px",
        slidesToShow: 6,
        speed: 500,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
  return (
    <div class="instagram">
        <div class="container-fluid" >
           
            <Slider {...settings}>

           <div style={{margingLeft:"15px"}}>
              <div
                class="instagram__item set-bg"
                data-setbg="img/instagram/insta-1.jpg"
                //style={{ backgroundImage: `url(${images.category1})` }}
              >
                <div class="instagram__text">
                  <i class="fa fa-instagram"></i>
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           <div style={{margingLeft:"15px"}}>
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
            </div>
           
            {/* {randomIterations.map((item, index) => (
       
            
        // <InstaCards key={index} //data={Object.values(item)} 
        // />
        

       

      ))} */}
      </Slider>
        </div>
      </div>
  )
}

export default Insta