import React from "react";
import "./Testimonials.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae voluptatum ,laborum numquam blanditiis harum quisquam eius, sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae voluptatum ,laborum numquam blanditiis harum quisquam eius, sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae voluptatum ,laborum numquam blanditiis harum quisquam eius, sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae voluptatum ,laborum numquam blanditiis harum quisquam eius, sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique.",
    },
  ];

  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur tblur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur tblur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
