/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "./FindTutorCard.jsx";
import { useEffect, useState } from "react";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/findTutor")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTutors(data);
      });
  }, []);

  return (
    <div>
      <h1>FindTutor</h1>

      <div className="grid grid-cols-3 gap-6">
        {tutors.map((tutor, i) => (
          <FindTutorCard key={i} tutor={tutor}></FindTutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutor;
