/* eslint-disable react/prop-types */

import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const LanguageCard = ({ lnguage }) => {
  // console.log(lnguage);
  const { teachers, title } = lnguage;
  const cat = title.split(' ')[0]
  console.log(cat.toLowerCase());
  const category= cat.toLowerCase()
  return (
    <div>
      <Link to={`/find-tutors/${category}`} className="flex items-center border-2 p-3 justify-between">
        <div className="card-content">
          <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
          <p className="text-gray-700 mt-2">{teachers} teachers</p>
        </div>
        <div className="card-arrow">
          <SlArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LanguageCard;
