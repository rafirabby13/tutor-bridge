/* eslint-disable react/prop-types */



const StatCard = ({ stat }) => {
  // console.log(stat);
  const { label, count, IconKey } = stat;
  console.log(IconKey)
  return (
 
    <div className="flex flex-col items-center tsaCard  rounded-2xl shadow-md p-6 w-full max-w-xs mx-auto">
    {IconKey && (
      <IconKey className="w-10 h-10  mb-4" />
    )}
    <p className="text-4xl font-extrabold ">{count}</p>
    <h2 className="mt-1 text-lg font-medium ">{label}</h2>
  </div>

  );
};

export default StatCard;
