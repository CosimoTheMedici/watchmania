import React, { useState } from "react";
import { images } from "../../../../assets/img";
import { motion } from "framer-motion";
import ModalComponent from "../../modal/Modal";
import Slider from "react-slick";

export const ProductCards = (props) => {
  const { data } = props;
  const imageName = data[0];

  const imageUrl = images[imageName];
  const [modalViewProduct, setModalViewProduct] = useState(false);
  const [currentViewRecord, setCurrentViewRecord] = useState();
  const handleToggleViewProduct = (item = {}) => {
    setCurrentViewRecord(item);
    setModalViewProduct(!modalViewProduct);
    console.log("item  ->>>>", currentViewRecord);
  };
  const baseUrl = "https://res.cloudinary.com/dk9u6to8o";


  // const settings = {
  //   customPaging: function() {
  //     return (
  //       <a>
  //         <img src={`${baseUrl}/watches/rssqmtcc9uktfysg7off`} />
  //       </a>
  //     );
  //   },
  //   dots: true,
  //   dotsClass: "slick-dots slick-thumb",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const settings = {
    // customPaging: function() {
    //   if (currentViewRecord && currentViewRecord[3]) {
    //     return currentViewRecord[3].map((item, index) => (
    //       <div key={index}>
    //         <img
    //           src={`${baseUrl}/${item}`}
    //           alt={`abstract${index + 1}`}
    //         />
    //       </div>
    //     ));
    //   }
    //   return null;
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  };
  const cloudinaryImageUrl = `https://res.cloudinary.com/dk9u6to8o/${data[2]}`;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix women">
      <div className="product__item">
        <motion.div
          className="product__item__pic set-bg"
          onClick={() => handleToggleViewProduct(data)}
          //style={{ backgroundImage: `url(${images.data[0]})` }}
          style={{ backgroundImage: `url(${cloudinaryImageUrl})` }}
          whileHover={{ scale: 1.1 }} // Zoom in by a factor of 1.1 on hover
          //   onClick={handleCardClick}
        >
          <div className="label new">New</div>
          <ul className="product__hover">
            <li>
              <a href="#" className="image-popup">
                <span className="arrow_expand"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon_heart_alt"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon_bag_alt"></span>
              </a>
            </li>
          </ul>
        </motion.div>
        <div className="product__item__text">
          <h6>
            <a href="#">{data[0]}</a>
          </h6>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="product__price">KES {data[1]}</div>
        </div>
      </div>

      <ModalComponent
        modalState={modalViewProduct}
        modaalTitle={"Watch Mania"}
        handleClose={() => setModalViewProduct(false)}
        modalBody={
          <div style={{paddingBottom:"20px"}}>
            {/* <h2>Custom Paging</h2> */}
            <Slider {...settings}>
              {currentViewRecord &&
                currentViewRecord[3].map((item, index) => (
                  <div key={index}>
                    <img
                      src={`${baseUrl}/${item}`}
                      alt={`abstract${index + 1}`}
                    />
                  </div>
                ))}

            </Slider>
          </div>
        }
      />
    </div>
  );
};

// import React, { useState } from "react";
//  // Make sure you have Framer Motion installed

// function ZoomableImageCard({ imageUrl }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleCardClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (

//   );
// }

// export default ZoomableImageCard;

const Footer = (currentViewRecord) => {
  console.log("here we go currentViewRecord",currentViewRecord)
  return (
    <div>ProductCards</div>
  )
}

