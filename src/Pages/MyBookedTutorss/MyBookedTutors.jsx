/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyBookedCard from "./MyBookedCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const MyBookedTutors = () => {
    // const bookedTutors = useLoaderData()
    // console.log(bookedTutors);
    const [bookedTutors, setBookedTutors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/bookedTutorials', {
            withCredentials: true
        })
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