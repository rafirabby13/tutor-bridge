/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FindTutorCategoryCard = ({ data }) => {
  const { name, description, email, language, photo, price, review } = data;

  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img className="w-full h-56 " src={photo} alt={name} />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="text-sm text-gray-600 mb-4">
            <p>
              <strong>Languages:</strong> {language}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">${price}/hr</span>
            <span className="text-gray-500 text-sm">{review} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutorCategoryCard;
