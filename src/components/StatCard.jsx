/* eslint-disable react/prop-types */

const StatCard = ({stat}) => {
    // console.log(stat);
    const {label, count} = stat;
    return (
        <div className=" p-6 rounded-lg shadow-xl  text-center  mx-auto sta">
        <p className="text-2xl font-semibold  mb-2">{count}</p>
        <h1 className="text-2xl font-bold ">{label}</h1>
    </div>
    
    );
};

export default StatCard;