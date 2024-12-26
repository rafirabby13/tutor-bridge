/* eslint-disable react/prop-types */

import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const LanguageCard = ({ lnguage }) => {
  // console.log(lnguage);
  const { teachers, title, img } = lnguage;
  const cat = title.split(' ')[0]
  console.log(cat.toLowerCase());
  const category= cat.toLowerCase()
  return (
    <div>
      <Link to={`/find-tutors/${category}`} className="flex items-center shadow-xl border-2 p-2 md:p-6 justify-between gap-2 language">
      <div>
        <img src={img} className="h-12 w-12 md:h-24 md:w-24" alt="" />
      </div>
        <div className="card-content">
         
          <h3 className="text-sm md:text-xl font-semibold text-blue-600">{title}</h3>
          <p className="text-sm md:text-lg mt-2">{teachers} teachers</p>
        </div>
        <div className="card-arrow">
          <SlArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LanguageCard;
