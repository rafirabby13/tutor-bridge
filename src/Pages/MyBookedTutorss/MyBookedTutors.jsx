/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyBookedCard from "./MyBookedCard.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../../hooks/useAxios.jsx";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const MyBookedTutors = () => {
    // const bookedTutors = useLoaderData()
    // console.log(bookedTutors);
    const [bookedTutors, setBookedTutors] = useState([])
    const {user} =  useContext(AuthContext)
    const axiosSecure = useAxios()

    useEffect(()=>{
        axiosSecure.get(`/bookedTutorials?loggedInUserEmail=${user.email}`)
        // axios.get('http://localhost:5000/bookedTutorials', {
        //     withCredentials: true
        // })
        .then(res=>{
            setBookedTutors(res.data)
        })


        // fetch('http://localhost:5000/bookedTutorials')
        // .then(res=> res.json())
        // .then(data=>{
        //     setBookedTutors(data)
        // })
    },[])
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    bookedTutors.map((booked, i)=> <MyBookedCard
                    key={i}
                    booked={booked}
                    ></MyBookedCard>)
                }
            </div>
        </div>
    );
};

export default MyBookedTutors;