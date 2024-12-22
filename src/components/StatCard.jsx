/* eslint-disable react/prop-types */

const StatCard = ({stat}) => {
    console.log(stat);
    const {label, count} = stat;
    return (
        <div className='border-2 p-5 text-center'>
            <h1>{label}</h1>
            <p>{count}</p>
        </div>
    );
};

export default StatCard;