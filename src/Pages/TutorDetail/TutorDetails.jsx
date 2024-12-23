/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import axios from "axios";

const TutorDetails = () => {
  const {user} =  useContext(AuthContext)
    const tutor = useLoaderData()
    // console.log(tutor);
    const {
        name,
        email,
        _id,
        rating,
        reviews,
        price,
        language,
        description,
        super_tutor,
        photo,
      } = tutor;


      const handleTutorDetail=()=>{
        const tutorInfo = {tutorId: _id, photo,language, price, tutorEmail: email, loggedInUserEmail: user.email}
        console.log(tutorInfo);
        axios.post('http://localhost:5000/bookTutorials', tutorInfo)
        .then(res=>{
          console.log(res.data);
        })
      }

    return (
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-md w-full max-w-lg bg-white overflow-hidden">
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
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500 text-sm">⭐</span>
            <span className="text-gray-700 text-sm font-medium">
              {rating} ({reviews} reviews)
            </span>
          </div>
          <div className="text-lg font-semibold text-gray-900">${price}</div>
        </div>
        <div className="mt-3 flex justify-between text-sm text-gray-500">
         
          <div>
            <p>
              Speaks <span className="font-semibold">{language}</span>
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-3 flex justify-between items-center">
        <button onClick={handleTutorDetail} className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition">
          Book Tutor
        </button>
        <button className="text-pink-500 font-medium hover:underline">
          Send message
        </button>
      </div>
    </div>
    );
};

export default TutorDetails;