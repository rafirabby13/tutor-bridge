/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const HistoryLeftCard = ({ history }) => {
  const { year, id, title, description, icon, image } = history;
  return (
    <div
      className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical col-span-3 ${
        id % 2 == 0 ? "col-start-3 " : "text-end"
      } `}
    >
      <div className="max-w-4xl mx-auto  bg-white shadow-lg rounded-lg timeline-start mb-10  p-10">
        {/* Icon and Year */}
        <div className={`flex items-center space-x-4 ${
        id % 2 == 0 ? "" : "justify-end"
      }`}>
          <div className="text-yellow-500 text-4xl">{icon}</div>
          <p className="text-lg text-gray-500 font-medium">{year}</p>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-4">{title}</h2>

          {/* Description */}
          <p className="text-gray-600 mt-2">{description}</p>
       

        {/* Image */}
        <motion.img
          animate={{
            scale: [1, 0.5, 0.5, 0.5, 1],
            rotate: [0, 0, 180, 360, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 4,
          }}
          src={image}
          alt={title}
          className="w-full mt-6 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HistoryLeftCard;
