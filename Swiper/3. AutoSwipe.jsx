// Need to install swiper.js 
// Change the image and info as necessary

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import react from "../../assets/images/skills/react.png";
import express from "../../assets/images/skills/express.png";
import js from "../../assets/images/skills/js.png";
import mongo from "../../assets/images/skills/mongo.png";
import node from "../../assets/images/skills/node.png";

const Skills = () => {
  return (
    <div
      id="tech_Stack"
      className="bg-gradient-to-r from-[#661e80] to-[#0f0215] p-3"
    >
      <h3 className=" text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-7 py-5 ">
        Tech Stack
      </h3>
      <p className=" text-sm md:text-xl font-semibold text-white text-center md:py-3 py-1 ">
        Explore my diverse tech stack encompassing JavaScript, React, Node.js,
        Express.js, MongoDB, and an array of other essential tools and
        technologies, elegantly displayed with effortless automatic swiping{" "}
      </p>
      <div className="p-3">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-none"
        >
          <SwiperSlide>
            <div className="card md:w-80 w-40 bg-base-300 shadow-xl">
              <figure className="px-1 pt-2 md:px-2 md:pt-10">
                <img
                  src={js}
                  alt="skills"
                  className="rounded-xl h-28 w-40 md:h-32 md:w-56"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xs md:text-lg">JavaScript</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-80 w-40 bg-base-300 shadow-xl">
              <figure className="px-1 pt-2 md:px-2 md:pt-10">
                <img
                  src={react}
                  alt="skills"
                  className="rounded-xl h-28 w-40 md:h-32 md:w-56"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xs md:text-lg">React JS</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card md:w-80 w-40 bg-base-300 shadow-xl">
              <figure className="px-1 pt-2 md:px-2 md:pt-10">
                <img
                  src={node}
                  alt="skills"
                  className="rounded-xl h-28 w-40 md:h-32 md:w-56"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xs md:text-lg">Node JS</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-80 w-40 bg-base-300 shadow-xl">
              <figure className="px-1 pt-2 md:px-2 md:pt-10">
                <img
                  src={express}
                  alt="skills"
                  className="rounded-xl h-28 w-40 md:h-32 md:w-56"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xs md:text-lg">Express JS</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card md:w-80 w-40 bg-base-300 shadow-xl">
              <figure className="px-1 pt-2 md:px-2 md:pt-10">
                <img
                  src={mongo}
                  alt="skills"
                  className="rounded-xl h-28 w-40 md:h-32 md:w-56"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xs md:text-lg">MongoDB</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
