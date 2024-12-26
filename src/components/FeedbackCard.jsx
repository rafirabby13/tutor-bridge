/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const FeedbackCard = ({ feedback }) => {
  const { name, role, location, relation, feedback2, rating, img } = feedback;

  return (
    <div className="feedback md:py-10  md:px-12 lg:px-24 l ">
      <div className=" shadow-lg rounded-lg p-1  md:p-6 mt-10 flex flex-col justify-between min-h-full  mx-auto">
        <div className="  flex-1">
          <p className=" italic text-sm md:text-3xl text-center mb-6">
            "{feedback2}"
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  h-full gap-4">
          <img
            src={img}
            alt={`${name}'s avatar`}
            className="w-24 h-24 rounded-full"
          />
          <div className="text-center">
            <p className="font-bold ">{name}</p>
            <p className="text-sm ">({relation})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
