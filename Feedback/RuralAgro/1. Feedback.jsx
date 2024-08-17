// Rural Agro Commerce Projects Feedback with swiper functional
// Change content and others as necessary

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../../components/Headers/Title";

const Feedback = () => {
  let feedbacks = [
    {
      id: 1,
      name: "Zahid Ahmed",
      details:
        "I recently ordered from Rural AgroCommerce and was delighted with the experience. The website is easy to navigate, and the ordering process was smooth. My organic produce arrived fresh and well-packaged on time. The quality exceeded my expectations, and customer service was very responsive. Highly recommended for anyone seeking fresh, organic products online.",
    },
    {
      id: 2,
      name: "Saddam Hossain",
      details:
        "I had a fantastic experience with Rural AgroCommerce. The website is intuitive, making it simple to find and order fresh, organic products. My order arrived promptly, and the quality of the produce was outstanding—everything was fresh.",
    },
  ];
  return (
    <div className="py-4 md:py-12" id="review">
      <Title
        main="Customer Feedback"
        sub="Hear What Our Satisfied Customers Have to Say About Their Experience"
      ></Title>
      <Swiper navigation={true} modules={[Navigation]}>
        {feedbacks.map((feedback) => (
          <SwiperSlide
            key={feedback.id}
            className="p-7 md:p-20 text-center bg-slate-200 bg-opacity-30"
          >
            <h3 className="text-center">
              <FaQuoteLeft className="mx-auto md:h-14 md:w-14 text-amber-800" />
            </h3>
            <p className="p-5 md:p-10 text-black text-xs md:text-lg">
              {feedback.details}
            </p>
            <h3 className="font-bold text-yellow-600 text-lg  md:text-3xl">
              {feedback.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
