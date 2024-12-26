/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import axios from "axios";
import useAxios from "../../hooks/useAxios.jsx";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  // const tutor = useLoaderData();
  // console.log(tutor);
  const navigate = useNavigate()
  const [tutor, setTutor] = useState([]);
  const axiosSecure = useAxios();

  const { details } = useParams();
  // console.log(details);
  useEffect(() => {
    axiosSecure.get(`/tutor/${details}`).then((res) => {
      setTutor(res.data);
    });
  }, [details, axiosSecure]);
  const { name, email, _id, review, price, language, description, photo } =
    tutor;

  const handleTutorDetail = () => {
    // const reviews = Number(review);
    const tutorInfo = {
      tutorId: _id,
      photo,
      language,
      price,
      tutorEmail: email,
      loggedInUserEmail: user.email,
      review,
    };
    console.log(tutorInfo);
    Swal.fire({
      title: "Tutor Booked!",
      icon: "success",
      draggable: true
    });
    axiosSecure
      .post("http://localhost:5000/bookTutorials", tutorInfo)
      .then((res) => {
        console.log(res.data);
        navigate('/')

      });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="flex feedback flex-col border border-gray-300 rounded-xl shadow-lg w-full max-w-lg  overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 ">
        {/* Header Section */}
        <div className="flex items-center px-6 py-4 ">
          <img
            src={photo || "https://via.placeholder.com/150"}
            alt={name || "Tutor"}
            className="w-28 h-28 p-2 rounded-full  border-4 border-pink-400"
          />
          <div className="ml-5">
            <h3 className="text-2xl font-bold ">{name || "Unknown Tutor"}</h3>
            <p className="text-xl ">{language || "Languages not specified"}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-xl">⭐</span>
              <span className=" text-xl font-medium">
                ({review || 0} reviews)
              </span>
            </div>
            <div className="text-2xl font-semibold text-pink-500">
              ${price || 0}/hr
            </div>
          </div>
          <p className="mt-4 text-xl  line-clamp-3">
            {description || "No description available."}
          </p>
        </div>

        {/* Footer Section */}
        <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <button
            onClick={handleTutorDetail}
            to={`/tutor/${_id}`}
            className="bg-pink-500 text-xl text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
