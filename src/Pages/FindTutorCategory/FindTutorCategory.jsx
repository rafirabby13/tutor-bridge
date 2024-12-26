import { useLoaderData } from "react-router-dom";
import FindTutorCategoryCard from "./FindTutorCategoryCard.jsx";

const FindTutorCategory = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="min-h-screen">
           {
            data.length > 0 ?
            <div className="grid grid-cols-3 gap-4">
            {
                data?.map((data, i)=><FindTutorCategoryCard
                key={i}
                data={data}
                ></FindTutorCategoryCard>)
            }
           </div>
           :
           <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
           <h3 className="font-bold text-xl mb-2 text-gray-800">No Tutors Available</h3>
           <p className="text-gray-700 text-base mb-4">
             We currently have no tutors available. Please check back later.
           </p>
         </div>
           }
        </div>
    );
};

export default FindTutorCategory;