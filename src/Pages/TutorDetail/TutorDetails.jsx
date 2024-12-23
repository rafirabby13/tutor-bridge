/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const TutorDetails = () => {
    const tutor = useLoaderData()
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


      const handleTutorDetail=()=>{
        const tutorInfo = {tutorId: _id, img,language, price}
      }

    return (
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-md w-full max-w-lg bg-white overflow-hidden">
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
        <span className="ml-auto flex items-center">
          <img
            src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
            alt={country}
            className="w-6 h-4 object-cover"
          />
        </span>
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