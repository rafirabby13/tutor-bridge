import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("./feedback.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFeedbacks(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-orange-500 font-semibold uppercase">Feedback</p>
          <h2 className="text-3xl font-bold text-gray-800 my-4">
            What People Think About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform brings you the convenience of instant access to a
            diverse range of tutors across various subjects and languages,
            ensuring accessible and quality learning experiences for everyone.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {feedbacks.map((feedback, i) => (
                <SwiperSlide key={i} >
              <FeedbackCard feedback={feedback}></FeedbackCard></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
