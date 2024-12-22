/* eslint-disable react/prop-types */

import { SlArrowRight } from "react-icons/sl";

const LanguageCard = ({ lnguage }) => {
  // console.log(lnguage);
  const { teachers, title } = lnguage;
  return (
    <div >
      <div className=" flex items-center  border-2 p-3 justify-between">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-teachers">{teachers.toLocaleString()} teachers</p>
        </div>
        <div className="card-arrow">
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
