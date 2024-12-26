/* eslint-disable react/prop-types */

const StatCard = ({stat}) => {
    // console.log(stat);
    const {label, count} = stat;
    return (
        <div className=" p-2 md:p-6 rounded-lg shadow-xl bg-[#F8F4E1]  text-center  mx-auto sta w-full  tsaCard">
        <p className="text-2xl font-semibold  mb-2">{count}</p>
        <h1 className="md:text-2xl font-bold ">{label}</h1>
    </div>
    
    );
};

export default StatCard;