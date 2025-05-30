/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "./FindTutorCard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading.jsx";

const FindTutor = () => {
  // const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  
  const [sortOrder, setSortOrder] = useState("asc");
  const { tutors, setTutors, loading, setLoading } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch("https://tutor-bridge-server.vercel.app/findTutor")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setTutors(data);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://tutor-bridge-server.vercel.app/search?q=${search}`
      )
      .then((res) => {
        // console.log(res.data);
        setTutors(res.data);
        
        setLoading(false);
      });
  }, [search, setTutors, setLoading]);

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   const form = e.target;
  //   const search= form.search.value;

  //   console.log(search);
  //   axios.get(`https://tutor-bridge-server.vercel.app/search?q=${search}`)
  //   .then(res=>{
  //     setTutors(res.data);
  //     form.reset()
  //   })
  // };

  const handleSorting =()=>{
    const sortedTutors = [...tutors].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
  
    setTutors(sortedTutors);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }
 
  return (
    <div className="min-h-screen py-10">
      <Helmet>
        <title>Find Tutor | Tutor Bridge</title>
      </Helmet>
      <h1 className="text-xl md:text-4xl font-bold  mb-4 p-2 md:p-6 shadow-md shadow-blue-400 history">
        FindTutor
      </h1>
    

      <div className="flex flex-col md:flex-row items-center justify-between py-10">
      <form className="py-10  w-fit mx-auto flex gap-3">
        <label className="input input-bordered flex items-center gap-2 feedback md:text-2xl md:p-8 bg-[#254336] text-white">
          <input
            type="text"
            
            placeholder="Search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-8 w-8 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* <div>
          <button
           
            className="btn btn-active btn-secondary"
          >
            Search
          </button>
        </div> */}
      </form>

      <div onClick={handleSorting} className="text-3xl font-bold btn btn-outline ">sort</div>
      </div>

      {loading ? (
        <Loading />
      ) : ( //grid md:grid-cols-3 lg:grid-cols-4
        <div className=" grid md:grid-cols-3 lg:grid-cols-4  gap-1 xl:gap-5">
          {tutors.map((tutor, i) => (
            <FindTutorCard key={i} tutor={tutor}></FindTutorCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutor;
