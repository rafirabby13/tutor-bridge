/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyBookedCard from "./MyBookedCard.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../../hooks/useAxios.jsx";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";

const MyBookedTutors = () => {
  // const bookedTutors = useLoaderData()
  // console.log(bookedTutors);
  const [bookedTutors, setBookedTutors] = useState([]);
  const { user, booking, setBooking } = useContext(AuthContext);
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure
      .get(`/bookedTutorials?loggedInUserEmail=${user?.email}`)
      // axios.get('http://localhost:5000/bookedTutorials', {
      //     withCredentials: true
      // })
      .then((res) => {
        setBookedTutors(res.data);
        setBooking(true);
      });

    // fetch('http://localhost:5000/bookedTutorials')
    // .then(res=> res.json())
    // .then(data=>{
    //     setBookedTutors(data)
    // })
  }, [user?.email, booking]);
  return (
    <div>
      <Helmet>
        <title>Booked Tutors | Tutor Bridge</title>
      </Helmet>
      <div className="grid md:grid-cols-3 gap-6">
        {bookedTutors.map((booked, i) => (
          <MyBookedCard key={i} booked={booked}></MyBookedCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
