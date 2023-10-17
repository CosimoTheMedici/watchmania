import React,{ useState } from "react";
import { images } from "../../assets/img";
import { ProductCards } from "../../components/customComponents";
import { items } from "../../utils/testArray";
import ModalComponent from "../../components/customComponents/modal/Modal";
import { Insta, Trends } from "../../features";
import MainLayoutAuth from "../../layout/layouts/mainLayoutAuth";

const MainPage = () => {
  const handleToggleViewProduct = (item = {}) => {
    //setCurrentViewRecord(item);
    //setModalViewProduct(!modalViewProduct);
    console.log("item  ->>>>", item);
  };

    const randomIterations = shuffleArray(items).slice(0, 8);

function shuffleArray(array) {
  // Shuffle array using Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
  return (
    <>
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div class="loader"></div>
    </div> */}

      {/* <!-- Offcanvas Menu Begin --> */}
   
      {/* <!-- Header Section End --> */}

      {/* <!-- Categories Section Begin --> */}
      <section class="categories">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div
                class="categories__item categories__large__item set-bg"
                style={{ backgroundImage: `url(${images.category1})` }}
              >
                <div class="categories__text">
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    class="categories__item set-bg"
                    style={{ backgroundImage: `url(${images.category2})` }}
                  >
                    <div class="categories__text">
                      <h4>Men’s fashion</h4>
                      <p>358 items</p>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    class="categories__item set-bg"
                    style={{ backgroundImage: `url(${images.category3})` }}
                  >
                    <div class="categories__text">
                      <h4>Kid’s fashion</h4>
                      <p>273 items</p>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    class="categories__item set-bg"
                    style={{ backgroundImage: `url(${images.category4})` }}
                  >
                    <div class="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    class="categories__item set-bg"
                    style={{ backgroundImage: `url(${images.category5})` }}
                  >
                    <div class="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section End --> */}

      {/* <!-- Product Section Begin --> */}
      <section class="product spad">
        <div
          class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="section-title">
                <h4>New product</h4>
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <ul class="filter__controls">
                <li class="active" data-filter="*">
                  All
                </li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
              </ul>
            </div>
          </div>
          <div class="row property__gallery">

          {randomIterations.map((item, index) => (
        
        <ProductCards key={index} data={Object.values(item)} />

      ))}
          
            {/* <div class="col-lg-3 col-md-4 col-sm-6 mix men   .values(item)">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product2})` }}
                >
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-2.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Flowy striped skirt</a>
                  </h6>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product__price">$ 49.0</div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product3})` }}
                >
                  <div class="label stockout">out of stock</div>
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-3.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Cotton T-Shirt</a>
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
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product1})` }}
                >
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-4.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Slim striped pocket shirt</a>
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
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix kid">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product5})` }}
                >
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-5.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Fit micro corduroy shirt</a>
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
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
              <div class="product__item sale">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product6})` }}
                >
                  <div class="label sale">Sale</div>
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-6.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Tropical Kimono</a>
                  </h6>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product__price">
                    $ 49.0 <span>$ 59.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product7})` }}
                >
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-7.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Contrasting sunglasses</a>
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
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
              <div class="product__item sale">
                <div
                  class="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${images.product8})` }}
                >
                  <div class="label">Sale</div>
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-8.jpg" class="image-popup">
                        <span class="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon_bag_alt"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Water resistant backpack</a>
                  </h6>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product__price">
                    $ 49.0 <span>$ 59.0</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Product Section End --> */}

      {/* <!-- Banner Section Begin --> */}
      <section class="banner set-bg" data-setbg="img/banner/banner-1.jpg">
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-8 m-auto">
              <div class="banner__slider owl-carousel">
                <div class="banner__item">
                  <div class="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <a href="#">Shop now</a>
                  </div>
                </div>
                <div class="banner__item">
                  <div class="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <a href="#">Shop now</a>
                  </div>
                </div>
                <div class="banner__item">
                  <div class="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}

      {/* <!-- Trend Section Begin --> */}
      <Trends />
      {/* <!-- Trend Section End --> */}

      {/* <!-- Discount Section Begin --> */}
      <section class="discount">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="discount__pic">
                <img src={images.discount} alt="" />
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div class="discount__text">
                <div class="discount__text__title">
                  <span>Discount</span>
                  <h2>Summer 2019</h2>
                  <h5>
                    <span>Sale</span> 50%
                  </h5>
                </div>
                <div class="discount__countdown" id="countdown-time">
                  <div class="countdown__item">
                    <span>22</span>
                    <p>Days</p>
                  </div>
                  <div class="countdown__item">
                    <span>18</span>
                    <p>Hour</p>
                  </div>
                  <div class="countdown__item">
                    <span>46</span>
                    <p>Min</p>
                  </div>
                  <div class="countdown__item">
                    <span>05</span>
                    <p>Sec</p>
                  </div>
                </div>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Discount Section End --> */}

      {/* <!-- Services Section Begin --> */}
      <section class="services spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa fa-car"></i>
                <h6>Free Shipping</h6>
                <p>For all oder over $99</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa fa-money"></i>
                <h6>Money Back Guarantee</h6>
                <p>If good have Problems</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa fa-support"></i>
                <h6>Online Support 24/7</h6>
                <p>Dedicated support</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="services__item">
                <i class="fa fa-headphones"></i>
                <h6>Payment Secure</h6>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Instagram Begin --> */}
      <Insta />
      {/* <!-- Instagram End --> */}

   
     
    </>
  );
};

export default MainLayoutAuth(MainPage);
