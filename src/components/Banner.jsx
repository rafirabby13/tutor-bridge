
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <div className="z-10">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col-reverse items-center md:gap-10   bg-gradient-to-r from-[#D4F6FF] via-[#FBFBFB] to-[#FFCCE1] banner ">
            <div className=" p-2  md:w-2/5  space-y-4 ">
              <h1 className="text-2xl md:text-4xl font-bold">
                Fresh Drops for Champions!
              </h1>
              <p className="text-lg md:text-xl">
                New arrivals to elevate your game. Don’t miss out!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   bg-gradient-to-l from-[#A0D683] via-[#FFFECB] to-[#CB9DF0] banner">
            <div
              className="p-2 md:pr-12 md:w-2/5  
               space-y-4"
            >
              <h1 className="text-2xl md:text-4xl font-bold">
                Gear Up for Every Sport!
              </h1>
              <p className="text-lg md:text-xl">
                Discover premium sports accessories for all your needs.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   bg-gradient-to-r from-[#CBE2B5] via-[#FFF] to-[#DCBFFF] banner">
            <div className="p-2 md:pr-12 md:w-2/5   space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Top Picks for Every Athlete
              </h1>
              <p className="text-xl">
                Our most loved and highly-rated sports gear just for you!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:px-20 flex py-2 md:py-0 md:flex-row flex-col-reverse items-center md:gap-10    bg-gradient-to-r from-[#CB9DF0] via-[#FFF] to-[#BFF6C3] banner">
            <div className="p-2  md:w-2/5   space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Train Like a Pro!
              </h1>
              <p className="text-xl">
                Professional-grade equipment to take your training to the next
                level.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
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
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
