import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const handleToggler = () => {
    const htmlElement = document.querySelector("html");
    console.log(htmlElement.className);
    //document.html.className = 'light-style layout-menu-fixed layout-menu-expanded'
    if (htmlElement) {
      // light-style layout-menu-fixed   class="light-style layout-menu-fixed layout-menu-expanded"
      htmlElement.className =
        "light-style layout-menu-fixed layout-menu-expanded";
    }
  };

  const handleToogle1 = () => {
    console.log("clicked ");
  };
  const handleToogle = () => {
    const toogle_wrapper_active = document.querySelector(
      ".offcanvas-menu-wrapper active"
    );
    const toogle_wrapper = document.querySelector(".offcanvas-menu-wrapper");
    const toogle_overlay_active = document.querySelector(
      ".offcanvas-menu-overlay"
    );
    const toogle_overlay = document.querySelector(
      ".offcanvas-menu-overlay active"
    );

    if (toogle_wrapper_active) {
      toogle_wrapper_active.className = "offcanvas-menu-wrapper";
    }
    if (toogle_wrapper) {
      toogle_wrapper.className = "offcanvas-menu-wrapper active";
    }
    if (toogle_overlay_active) {
      toogle_overlay_active.className = "offcanvas-menu-overlay active";
    }
    if (toogle_overlay) {
      toogle_overlay.className = "offcanvas-menu-overlay";
    }
  };
  const handleToogleClose = () => {
    const toogle_wrapper_active = document.querySelector(
      ".offcanvas-menu-wrapper active"
    );
    const toogle_wrapper = document.querySelector(".offcanvas-menu-wrapper");
    const toogle_overlay_active = document.querySelector(
      ".offcanvas-menu-overlay"
    );
    const toogle_overlay = document.querySelector(
      ".offcanvas-menu-overlay active"
    );
    console.log("toogle_wrapper_active", toogle_wrapper_active);
    console.log("toogle_wrapper", toogle_wrapper);
    console.log("toogle_overlay", toogle_overlay);
    console.log("toogle_overlay_active", toogle_overlay_active);

    if (toogle_wrapper_active !== null) {
      toogle_wrapper_active.className = "offcanvas-menu-wrapper";
    }
    if (toogle_wrapper !== null) {
      toogle_wrapper.className = "offcanvas-menu-wrapper";
    }
    if (toogle_overlay_active !== null) {
      toogle_overlay_active.className = "offcanvas-menu-overlay";
    }
    if (toogle_overlay !== null) {
      toogle_overlay.className = "offcanvas-menu-overlay";
    }
  };
  return (
    <>
      <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__close" onClick={handleToogleClose}>
          +
        </div>
        <ul class="offcanvas__widget">
          <li>
            <span class="icon_search search-switch"></span>
          </li>
          <li>
            <a href="#">
              <span class="icon_heart_alt"></span>
              <div class="tip">2</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon_bag_alt"></span>
              <div class="tip">2</div>
            </a>
          </li>
        </ul>
        <div class="offcanvas__logo">
          <a href="./index.html">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap">
          <div className="slicknav_menu">
            <nav
              className="slicknav_nav slicknav_hidden"
              aria-hidden={true}
              role="menu"
            >
              <ul>
              <li className="active">
                    <Link to="/">Home</Link>
                  </li>
               
                <li>
                    <Link to="/shop">Shop</Link>
                  </li>

                  {/* <li>
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li>
                    <Link to="/contactus">Contact</Link>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="offcanvas__auth">
          {/* <a href="#">Login</a>
          <a href="#">Register</a> */}
        </div>
      </div>
      {/* <!-- Offcanvas Menu End --> */}

      {/* <!-- Header Section Begin --> */}
      <header class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-2">
              <div class="header__logo">
                <Link to="/">
                  Home
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div class="col-xl-6 col-lg-7">
              <nav class="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li>
                    <Link to="/products/women">Women’s</Link>
                  </li>
                  <li>
                    <Link to="/products/men">Men’s</Link>
                  </li> */}
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  {/* <li>
                    <Link to="/pages">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/product-details">Product Details</Link>
                      </li>
                      <li>
                        <Link to="/shop-cart">Shop Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li>
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="header__right">
                <div class="header__right__auth">
                  {/* <a href="#">Login</a>
                  <a href="#">Register</a> */}
                </div>
                <ul class="header__right__widget">
                  <li>
                    <span class="icon_search search-switch"></span>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_heart_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_bag_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="canvas__open" onClick={handleToogle}>
            <i class="fa fa-bars" onClick={handleToogle}></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </>
  );
};

export default Navbar;
