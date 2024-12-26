/* eslint-disable no-unused-vars */
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
      <Link to={`/find-tutors/${category}`} className="flex items-center shadow-xl border-2 p-2 md:p-6 justify-between gap-2 language langCard">
      <div>
        <img src={img} className="h-12 w-12 md:h-24 md:w-24" alt="" />
      </div>
        <div className="card-content">
         
          <h3 className="text-sm md:text-2xl font-bold ">{title}</h3>
          
        </div>
        <div className="card-arrow">
          <SlArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LanguageCard;
