/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";
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
    fetch(`https://tutor-bridge-server.vercel.app/tutor/category/${category}`)
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
        <Loading />
      ) : data.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((data, i) => (
            <FindTutorCategoryCard key={i} data={data}></FindTutorCategoryCard>
          ))}
        </div>
      ) : (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#3E5879] p-6 py-10 mx-auto my-20">
          <h3 className="font-bold text-xl mb-2 text-[#F5EFE7]">
            No Tutors Available
          </h3>
          <p className="text-[#F5EFE7] text-base mb-4">
            We currently have no tutors available. Please check back later.
          </p>
          <Link to='/' className="btn bg-[#F5EFE7] text-[#3E5879]">Home</Link>
        </div>
      )}
    </div>
  );
};

export default FindTutorCategory;
