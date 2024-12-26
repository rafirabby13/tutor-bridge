/* eslint-disable react/prop-types */

const StatCard = ({stat}) => {
    // console.log(stat);
    const {label, count} = stat;
    return (
        <div className="border-2 p-6 rounded-lg shadow-lg bg-white text-center  mx-auto">
        <p className="text-2xl font-semibold text-gray-700 mb-2">{count}</p>
        <h1 className="text-2xl font-bold text-gray-900">{label}</h1>
    </div>
    
    );
};

export default StatCard;