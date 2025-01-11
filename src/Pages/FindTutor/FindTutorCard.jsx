/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FindTutorCard = ({ tutor }) => {
  // console.log(tutor);
  const { name, _id, price, language, description, review, photo } = tutor;
  return (
    <div className="flex findTutor flex-col justify-between border border-gray-200 p-2 rounded-lg shadow-md w-full  feedback overflow-hidden ">
      <div className="flex items-center py-3">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 border-[4px] border-[#254336] p-2 rounded-full "
        />
        <div className="ml-4">
          <h3 className="text-2xl font-semibold ">{name}</h3>
          <p className="text-xl ">{language}</p>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold ">${price}/hr</span>
          <span className=" text-xl">{review > 0 ? review : "0"} Reviews</span>
        </div>
        <p className="mt-2 text-xl  line-clamp-2">{description}</p>
      </div>

      <div className=" py-3 flex justify-between items-center">
        <Link
          to={`/tutor/${_id}`}
          className="btn bg-[#254336] text-white  font-medium hover:bg-[#254336af] border-none text-lg  shadow-lg"
        >
          See Detail
        </Link>
      </div>
    </div>
  );
};

export default FindTutorCard;
