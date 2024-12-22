/* eslint-disable react/prop-types */

const HistoryLeftCard = ({history}) => {
    const { year, title, description, icon, image }= history;
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Icon and Year */}
      <div className="flex items-center space-x-4">
        <div className="text-yellow-500 text-4xl">{icon}</div>
        <p className="text-lg text-gray-500 font-medium">{year}</p>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Image */}
      <img src={image} alt={title} className="w-full mt-6 rounded-lg shadow-md" />
    </div>
        </div>
    );
};

export default HistoryLeftCard;