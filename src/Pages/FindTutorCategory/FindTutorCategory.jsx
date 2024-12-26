/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import FindTutorCategoryCard from "./FindTutorCategoryCard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import Loading from "../../components/Loading.jsx";

const FindTutorCategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  // const data = useLoaderData()
  // console.log(data);
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://online-tutor-booking-platform-server.vercel.app/tutor/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
        setData(data);
        setLoading(false);
      });
  }, [category, setLoading]);
  return (
    <div className="min-h-screen">
      {loading ? (
        <Loading/>
      ) : data.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((data, i) => (
            <FindTutorCategoryCard key={i} data={data}></FindTutorCategoryCard>
          ))}
        </div>
      ) : (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
          <h3 className="font-bold text-xl mb-2 text-gray-800">
            No Tutors Available
          </h3>
          <p className="text-gray-700 text-base mb-4">
            We currently have no tutors available. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default FindTutorCategory;
