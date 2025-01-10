/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyBookedCard = ({ booked }) => {
  const navigate = useNavigate();
  console.log('booked', booked);
  const { booking, setBooking } = useContext(AuthContext);
  const {
    language,
    loggedInUserEmail,
    photo,
    price,
    name,
    review,
    tutorEmail,
    tutorId,
    _id,
  } = booked;
  //   const [reviewCount, setReviewCount] = useState(parseInt(review) + 1);
  const handleReviewIncreament = () => {
    console.log(typeof review);

    axios
      .patch(`https://online-tutor-booking-platform-server.vercel.app/tutor/${tutorId}`)
      .then((res) => {
        console.log(res.data);
        setBooking(false);
        Swal.fire({
          title: "Review Counted successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="  ">
      <div>
        <div className=" mx-auto feedback  rounded-lg shadow-lg overflow-hidden p-5 flex flex-col justify-between h-full">
          {/* Image Section */}
          <img
            className="w-full h-32 md:h-64"
            src={photo || "https://via.placeholder.com/300"}
            alt={name || "Tutor"}
            loading="lazy"
          />

          {/* Card Content */}
          <div className="p-5">
            <h2 className="text-lg font-semibold ">{name? name : "Tutor"}</h2>

            <p className="text-sm  mt-2">
              Language:{" "}
              <span className=" font-medium">{language || "N/A"}</span>
            </p>

            <p className="text-sm  mt-2">
              Price: <span className=" font-medium">${price || "-"}</span>
            </p>

            <p className="text-sm  mt-2">
              Reviews: <span className=" font-medium">{review || 0}</span>
            </p>

            {/* Review Button */}
            <button
              onClick={handleReviewIncreament}
              className="w-full mt-4 bg-[#254336] text-white py-2 rounded-lg hover:bg-[#2a7673] transition"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookedCard;
