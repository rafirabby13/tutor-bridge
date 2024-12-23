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
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-md w-full max-w-sm bg-white overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center px-4 py-3">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 flex items-center">
           
            {language}
          </p>
        </div>
       
      </div>

      {/* Content Section */}
      <div className="px-4">
        <div className="flex items-center justify-between">
          
          <div className="text-lg font-semibold text-gray-900">${price}</div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-3 flex justify-between items-center">
        
        <Link to={`/tutor/${_id}`} className="text-pink-500 font-medium hover:underline border-2 p-2 shadow-lg">
          See Detail
        </Link>
      </div>
    </div>
  );
};

export default FindTutorCard;
