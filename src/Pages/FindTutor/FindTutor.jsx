/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "./FindTutorCard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import axios from "axios";

const FindTutor = () => {
  // const [tutors, setTutors] = useState([]);

  const { tutors, setTutors } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/findTutor")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTutors(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault()
    const form = e.target;
    const search= form.search.value;

    console.log(search);
    axios.get(`http://localhost:5000/search?q=${search}`)
    .then(res=>{
      setTutors(res.data);
      form.reset()
    })
  };

  return (
    <div>
      <h1 className="text-4xl text-center pb-10">FindTutor</h1>

      <form className="py-10 w-fit mx-auto flex gap-3" onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" name="search"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div>
          <button
           
            className="btn btn-active btn-secondary"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-6">
        {tutors.map((tutor, i) => (
          <FindTutorCard key={i} tutor={tutor}></FindTutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutor;
