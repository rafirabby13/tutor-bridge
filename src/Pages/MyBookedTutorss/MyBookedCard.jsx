/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";

const MyBookedCard = ({ booked }) => {
  // console.log(booked);
  const {
    language,
    loggedInUserEmail,
    photo,
    price,
    review,
    tutorEmail,
    tutorId,
    _id,
  } = booked;
//   const [reviewCount, setReviewCount] = useState(parseInt(review) + 1);
  const handleReviewIncreament = () => {
    console.log("object", review);
 
    axios
      .patch(`http://localhost:5000/tutor/${_id}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <img className="w-full h-96 " src={photo} alt="Tutor" loading="lazy" />

        {/* Card Content */}
        <div className="p-5">
          {/* Tutor Email */}
          <h2 className="text-lg font-semibold text-gray-800">
            Tutor Email: <span className="text-pink-500">{tutorEmail}</span>
          </h2>

          {/* Logged In User */}
          <p className="text-sm text-gray-600 mt-2">
            Logged-in User Email: {loggedInUserEmail}
          </p>

          {/* Language */}
          <p className="text-sm text-gray-600 mt-2">
            Language:{" "}
            <span className="text-gray-800 font-medium">{language}</span>
          </p>
          <p className="text-xl font-bold text-gray-600 mt-2">
            Review : <span className="text-gray-800 font-medium">{review}</span>
          </p>

          {/* Price */}
          <p className="text-sm text-gray-600 mt-2">
            Price: <span className="text-gray-800 font-medium">${price}</span>
          </p>

          {/* Tutor ID */}
          <p className="text-xs text-gray-500 mt-2">
            Tutor ID: <span className="text-gray-700">{tutorId}</span>
          </p>

          {/* _ID */}
          <p className="text-xs text-gray-500 mt-2">
            Unique ID: <span className="text-gray-700">{_id}</span>
          </p>

          {/* Book Button */}
          <button
            onClick={handleReviewIncreament}
            className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookedCard;
