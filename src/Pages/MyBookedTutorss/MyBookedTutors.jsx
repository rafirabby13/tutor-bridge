import { useLoaderData } from "react-router-dom";
import MyBookedCard from "./MyBookedCard.jsx";

const MyBookedTutors = () => {
    const bookedTutors = useLoaderData()
    // console.log(bookedTutors);
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