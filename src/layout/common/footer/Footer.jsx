import React from 'react'
import { images } from '../../../assets/img'

const Footer = () => {

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px', // Set your desired width and height for the circle
    height: '50px',
    borderRadius: '50%', // Makes the container a circle
    backgroundColor: '#ccc', // Background color for the circle, you can change this
    textDecoration: 'none', // Removes the underline from the link
  };

  const circleImageStyle = {
    width: '80%', // Set the width of the image to 80% of the circle
    height: 'auto', // Maintain the aspect ratio of the image
    borderRadius: '50%', // Makes the image inside the circle
    display: 'block', // Removes extra space below the image
  };

  return (
    <>
     {/* <!-- Footer Section Begin --> */}
     <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-7">
              <div class="footer__about">
                <div class="footer__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <p>
                 Secure Payment Modes.
                </p>
                <div class="footer__payment" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <a href="#">
                    <img src={images.payment_1} alt="" />
                  </a>
                  <a href="#">
                    <img src={images.payment_2} alt="" />
                  </a>
                  <a href="#" style={circleContainerStyle}>
                    <img src={images.payment_3} alt="" style={circleImageStyle} />
                  </a>
                  <a href="#">
                    <img src={images.payment_4} alt="" />
                  </a>
                  <a href="#"style={circleContainerStyle}>
                    <img src={images.payment_5} alt="" style={circleImageStyle} />
                  </a>
                  <a href="#"style={circleContainerStyle}>
                    <img src={images.payment_6} alt="" style={circleImageStyle} />
                  </a>
                  <a href="#" style={circleContainerStyle}>
                    <img src={images.payment_7} alt=""style={circleImageStyle}  />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-5">
              <div class="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
              <div class="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
              <div class="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" class="site-btn">
                    Subscribe
                  </button>
                </form>
                <div class="footer__social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              <div class="footer__copyright__text">
                <p>
                  Copyright &copy;{" "}
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | Made with{" "}
                  <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://capitalhustle.com" target="_blank">
                    Capital Hustle
                  </a>
                </p>
              </div>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}

      {/* <!-- Search Begin --> */}
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Footer