/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FindTutorCard = ({ tutor }) => {
  // console.log(tutor);
  const {
    name,
    _id,
    price,
    language,
    description,
    review,
    photo,
  } = tutor;
  return (
    <div className="flex feedCardww flex-col border border-gray-200 p-4 rounded-lg shadow-md w-full  feedback overflow-hidden">
      <div className="flex items-center px-4 py-3">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 border-[4px] border-gray-200 p-2 rounded-full "
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold ">{name}</h3>
          <p className="text-sm ">{language}</p>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold ">${price}/hr</span>
          <span className=" text-sm">{review > 0 ? review : "0" } Reviews</span>
        </div>
        <p className="mt-2 text-sm  line-clamp-2">{description}</p>
      </div>

      <div className="px-4 py-3 flex justify-between items-center">
        <Link to={`/tutor/${_id}`} className="btn bg-[#439A97] text-white  font-medium hover:underline border-2  shadow-lg">
          See Detail
        </Link>
      </div>
    </div>
  );
};

export default FindTutorCard;
