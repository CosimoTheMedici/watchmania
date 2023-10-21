import React ,{useState} from 'react'
import Sidebar1 from '../../layout/common/sidebar/Sidebar1';
import MainLayoutAuth from '../../layout/layouts/mainLayoutAuth';




const itemsPerPage = 9; // Number of items to display per page

const items = [
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/rssqmtcc9uktfysg7off" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/uylshku94fzkncpiwxqf" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/zc4l52kkq5ckh2fplsbv" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/t7uovvup4njs4oi1zvij" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/et9yukvhryufnlcl6tm9" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/lprcew5glxcroojady0x" },
  { title: "Furry hooded parka", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Flowy striped skirt", price: "$ 49.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Croc-effect bag", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  { title: "Dark wash Xavi jeans", price: "$ 59.0", cloudinaryPublicId: "watches/u5za2m8pzfqztzwx0a8y" },
  // Add more items here
];


const Item = ({ title, price, cloudinaryPublicId }) => {

    const cloudinaryImageUrl = `https://res.cloudinary.com/dk9u6to8o/${cloudinaryPublicId}`;
  
    return (
      <div className="col-lg-4 col-md-6">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            style={{
              backgroundImage: `url(${cloudinaryImageUrl})`,
            }}
            alt={title}
          >
            {/* Product details */}
          </div>
          <div className="product__item__text">
            <h6>
              <a href="#">{title}</a>
            </h6>
            <div className="rating">
              <i className="fa fa-star icon__padding"></i>
              <i className="fa fa-star icon__padding"></i>
              <i className="fa fa-star icon__padding"></i>
              <i className="fa fa-star icon__padding"></i>
              <i className="fa fa-star icon__padding"></i>
            </div>
            <div className="product__price">{price}</div>
          </div>
        </div>
      </div>
    );
  };
  

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="col-lg-12 text-center">
    <div className="pagination__option">
      {Array.from({ length: totalPages }, (_, index) => (
        <a
          key={index}
          href="#"
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "pagination_activeness" : ""}
        >
          {index + 1}
        </a>
      ))}
    </div>
  </div>
);

const Shop = () => {
const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const categoriesData = [
    {
      title: 'Women',
      items: ['Coats', 'Jackets', 'Dresses', 'Shirts', 'T-shirts', 'Jeans']
    },
    {
      title: 'Men',
      items: ['Coats', 'Jackets', 'Dresses', 'Shirts', 'T-shirts', 'Jeans']
    }
    // Add more categories as needed
  ];

  return (
    <>
    
    {/* <div id="preloder">
        <div class="loader"></div>
    </div> */}

    {/* <!-- Offcanvas Menu Begin -->*/}

    {/* <!-- Breadcrumb Begin -->*/}
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End -->*/}

    {/* <!-- Shop Section Begin -->*/}
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="shop__sidebar">
                       
                        <Sidebar1 categories={categoriesData} />
                        <div class="sidebar__filter">
                            <div class="section-title">
                                <h4>Shop by price</h4>
                            </div>
                            <div class="filter-range-wrap">
                                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="99"></div>
                                <div class="range-slider">
                                    <div class="price-input">
                                        <p>Price:</p>
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Filter</a>
                        </div>
                        <div class="sidebar__sizes">
                            <div class="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div class="size__list">
                                <label for="xxs">
                                    xxs
                                    <input type="checkbox" id="xxs"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="xs">
                                    xs
                                    <input type="checkbox" id="xs"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="xss">
                                    xs-s
                                    <input type="checkbox" id="xss"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="s">
                                    s
                                    <input type="checkbox" id="s"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="m">
                                    m
                                    <input type="checkbox" id="m"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="ml">
                                    m-l
                                    <input type="checkbox" id="ml"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="l">
                                    l
                                    <input type="checkbox" id="l"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="xl">
                                    xl
                                    <input type="checkbox" id="xl"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="sidebar__color">
                            <div class="section-title">
                                <h4>Shop by Color</h4>
                            </div>
                            <div class="size__list color__list">
                                <label for="black">
                                    Black
                                    <input type="checkbox" id="black"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="whites">
                                    White
                                    <input type="checkbox" id="whites"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="reds">
                                    Reds
                                    <input type="checkbox" id="reds"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="greys">
                                    Greys
                                    <input type="checkbox" id="greys"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="blues">
                                    Blues
                                    <input type="checkbox" id="blues"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="beige">
                                    Beige Tones
                                    <input type="checkbox" id="beige"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="greens">
                                    Greens
                                    <input type="checkbox" id="greens"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="yellows">
                                    Yellows
                                    <input type="checkbox" id="yellows"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9 col-md-9">
      <div className="row">
        {displayedItems.map((item, index) => (
          <Item key={index} {...item} />
        ))} 
         <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>


                {/* <div class="col-lg-9 col-md-9">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-1.jpg">
                                    <div class="label new">New</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Furry hooded parka</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-2.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-3.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-3.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Croc-effect bag</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-4.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-4.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Dark wash Xavi jeans</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item sale">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-5.jpg">
                                    <div class="label">Sale</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-5.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Ankle-cuff sandals</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-6.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-6.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Contrasting sunglasses</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-7.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-7.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Circular pendant earrings</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-8.jpg">
                                    <div class="label stockout stockblue">Out Of Stock</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-8.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
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
                        <div class="col-lg-4 col-md-6">
                            <div class="product__item sale">
                                <div class="product__item__pic set-bg" data-setbg="img/shop/shop-9.jpg">
                                    <div class="label">Sale</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-9.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Water resistant zips backpack</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 text-center">
                            <div class="pagination__option">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    {/* <!-- Shop Section End -->*/}

    {/* <!-- Instagram Begin -->*/}
    {/* <div class="instagram">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-1.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-2.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-3.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-4.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-5.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div class="instagram__item set-bg" data-setbg="img/instagram/insta-6.jpg">
                        <div class="instagram__text">
                            <i class="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Instagram End -->*/}

  

    {/* <!-- Search Begin -->*/}
    <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
 
</>
  )
}

export default MainLayoutAuth(Shop)