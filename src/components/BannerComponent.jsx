/* eslint-disable react/prop-types */
import Lottie from "lottie-react";

const BannerComponent = ({title, description, animationData}) => {
    return (
       
        <div className="md:px-10  lg:px-24 flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10    banner">
          <div
            className="p-2 md:pr-12 md:w-2/5  
             space-y-4"
          >
            <h1 className=" md:text-xl lg:text-4xl font-bold">
              {title}
            </h1>
            <p className="md:text-md text-sm">
            {description}
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
              animationData={animationData}
              loop={true}
            />
          </div>
        </div>
      
    );
};

export default BannerComponent;