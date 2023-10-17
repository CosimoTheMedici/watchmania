import React, { useState } from 'react';

const Sidebar1 = ({ categories }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleMenuClick = (event, index) => {
        console.log("index",index)
        event.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    
        setOpenMenuIndex(openMenuIndex === index ? null : index);
      };

  return (
    <div className="sidebar__categories">
      <div className="section-title">
        <h4>Categories</h4>
      </div>
      <div className="categories__accordion">
        <div className="accordion" id="accordionExample">
          {categories.map((category, index) => (
            <div className="card" key={index}>
              <div className={ openMenuIndex === index? "card-heading active" : "card-heading"}>
                <a data-toggle="collapse" onClick={(event) => handleMenuClick(event, index)}  data-target={`#collapse${index + 1}`}>
                  {category.title}
                </a>
              </div>
              <div
                id={`collapse${index + 1}`}
                className={ openMenuIndex === index? "collapse show" : "collapse"}
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
