/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FindTutorCategoryCard = ({ data }) => {
  const { name, description, email, language, photo, price, review , _id} = data;
  // console.log(data);

  return (
    <div>
      <div className="rounded-lg feedback p-2 overflow-hidden shadow-lg langCard">
        <img className="w-full h-56 " src={photo} alt={name} />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 ">{name}</h3>
          <p className=" text-base mb-4">{description}</p>
          <div className="text-sm  mb-4">
            <p>
              <strong>Languages:</strong> {language}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">${price}/hr</span>
            <span className=" text-sm">{review} Reviews</span>
          </div>
          <div>
            <Link to={`/tutor/${_id}`}><button className="btn bg-[#439A97] text-white mt-3">See Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutorCategoryCard;
