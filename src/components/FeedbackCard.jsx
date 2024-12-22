/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const FeedbackCard = ({ feedback }) => {
  const { name, role, location,relation, feedback2, rating, img } = feedback;

  return (
    <div>
      <div className="bg-gray-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="bg-white shadow-lg rounded-lg p-6 mt-10 relative max-w-4xl mx-auto">
          <p className="text-gray-700 italic text-center mb-6">"{feedback2}"</p>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={img}
              alt={`${name}'s avatar`}
              className="w-24 h-24 rounded-full"
            />
            <div className="text-center">
              <p className="font-bold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">
                ({relation})
              </p>
            </div>
          </div>

          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-yellow-400 rounded-full px-4 py-1 shadow-lg">
              <div className="flex items-center gap-1">
                {"⭐".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
