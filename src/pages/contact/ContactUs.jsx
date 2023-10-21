import React from "react";
import MainLayoutAuth from "../../layout/layouts/mainLayoutAuth";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      {/*  <!-- Breadcrumb Begin  --> */}
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
              <Link to="/">Shop
                  <i class="fa fa-home"></i> Home
                  </Link>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <!-- Breadcrumb End  --> */}

      {/*  <!-- Contact Section Begin  --> */}
      <section class="contact spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="contact__content">
                <div class="contact__address">
                  <h5>Contact info</h5>
                  <ul>
                    <li>
                      <h6>
                        <i class="fa fa-map-marker"></i> Address
                      </h6>
                      <p>
                        160 kenyatta Ave Nairobi,Kenya
                        16101-5161
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i class="fa fa-phone"></i> Phone
                      </h6>
                      <p>
                        <span>111-111-111</span>
                        <span>999-999-999</span>
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i class="fa fa-headphones"></i> Support
                      </h6>
                      <p>jegima@gmail.com</p>
                    </li>
                  </ul>
                </div>
                <div class="contact__form">
                  <h5>SEND MESSAGE</h5>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" class="site-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="contact__map">
                <iframe
                  //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d36.82578!3d-1.28414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2"
                  src="https://www.google.com/maps/embed?pb=1%C2%B017'02.9%22S+36%C2%B049'32.8%22E/@-1.284151,36.8251389,19z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.284151!4d36.825784"
                  style={{ height: "780", border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- Contact Section End  --> */}

      {/*  <!-- Instagram Begin  --> */}

      {/*  <!-- Instagram End  --> */}
    </>
  );
};

export default MainLayoutAuth(ContactUs);
