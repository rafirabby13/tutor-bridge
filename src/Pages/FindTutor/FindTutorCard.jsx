/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FindTutorCard = ({ tutor }) => {
  const {
    name,
    country,
    _id,
    rating,
    reviews,
    price,
    language,
    description,
    super_tutor,
    img,
  } = tutor;
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-md w-full max-w-sm bg-white overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center px-4 py-3">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 flex items-center">
            {super_tutor && (
              <span className="text-xs text-pink-600 font-semibold bg-pink-100 px-2 py-0.5 rounded-lg mr-2">
                Super Tutor
              </span>
            )}
            {language}
          </p>
        </div>
       
      </div>

      {/* Content Section */}
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500 text-sm">⭐</span>
            <span className="text-gray-700 text-sm font-medium">
              {rating} 
            </span>
          </div>
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
