import { useEffect, useState } from "react";
import StatCard from "./StatCard.jsx";

const Stats = () => {
    const [stats, setStats]= useState([])

    useEffect(()=>{
        fetch('./stats.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setStats(data)
        })
    },[])
    return (
        <div >
            <div className="grid grid-cols-4 gap-5">
            {
                stats.map((stat, i)=> <StatCard
                key={i}
                stat={stat}
                ></StatCard>)
            }
            </div>
        </div>
    );
};

export default Stats;