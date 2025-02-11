/* eslint-disable react/no-unescaped-entities */
import a1 from "../assets/Animation - 1735188939390.json";
import a2 from "../assets/Animation - 1739298065024.json";
import a3 from "../assets/Animation - 1735189162111.json";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="z-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="md:px-10  lg:px-24 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-4   banner ">
            <div className=" p-2  md:w-2/5  space-y-4 ">
              <h1 className=" md:text-xl lg:text-4xl font-bold">
                Find Your Perfect Tutor
              </h1>
              <p className="md:text-md text-sm">
                Connect with experienced tutors across various languages and
                subjects. Unlock your potential with personalized one-on-one
                sessions designed just for you!
              </p>
              <div className="pt-5">
                <a
                  href="#contact"
                  className="btn border-none  bg-[#254336] transition-shadow text-white shadow-lg shadow-[#2e542b] hover:shadow-xl"
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div className="lg:w-3/5">
              <Lottie
                className="h-[200px]  md:h-[450px] lg:h-[370px]"
                animationData={a1}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:px-10  lg:px-24 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10    banner">
            <div
              className="p-2 md:pr-12 md:w-2/5  
               space-y-4"
            >
              <h1 className=" md:text-xl lg:text-4xl font-bold">
                Flexible Scheduling, Global Reach
              </h1>
              <p className="md:text-md text-sm">
                Learn at your own pace, on your schedule. Access tutors from
                around the world and enjoy seamless online sessions tailored to
                your goals.
              </p>
              <div className="pt-5">
                <a
                  href="#contact"
                  className="btn border-none  bg-[#254336] transition-shadow text-white shadow-lg shadow-[#2e542b] hover:shadow-xl"
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div className="lg:w-3/5">
              <Lottie
                className="h-[200px]  md:h-[450px] lg:h-[370px]"
                animationData={a2}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:px-10  lg:px-24 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   banner">
            <div className="p-2 md:pr-12 md:w-2/5   space-y-4">
              <h1 className=" md:text-xl lg:text-4xl font-bold">
                Your Learning Journey Starts Here
              </h1>
              <p className="md:text-md text-sm">
                Whether you're learning a new language or mastering a subject,
                our expert tutors are here to guide you every step of the way.
              </p>
              <div className="pt-5">
                <a
                  href="#contact"
                  className="btn border-none  bg-[#254336] transition-shadow text-white shadow-lg shadow-[#2e542b] hover:shadow-xl"
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div className=" md:w-3/5">
              <Lottie
                className="h-[200px]  md:h-[450px] lg:h-[370px]"
                animationData={a3}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className=" flex py-2 md:py-0 md:flex-row flex-col-reverse items-center md:gap-10    bg-gradient-to-r from-[#CB9DF0] via-[#FFF] to-[#BFF6C3] banner">
            <div className="p-2  md:w-2/5   space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Train Like a Pro!
              </h1>
              <p className="text-xl">
                Professional-grade equipment to take your training to the next
                level.
              </p>
              <a className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col  md:gap-10  items-center  bg-gradient-to-r from-[#BFF6C3] via-[#FFF] to-[#CB9DF0] banner">
            <div className="p-2 md:pr-12 md:w-2/5   space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Season’s Biggest Sale!
              </h1>
              <p className="text-xl">
                Up to 50% off on select sports gear. Limited Time Only!
              </p>
              <a className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
