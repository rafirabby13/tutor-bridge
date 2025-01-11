/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import axios from "axios";
import useAxios from "../../hooks/useAxios.jsx";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  // const tutor = useLoaderData();
  // console.log(tutor);
  const navigate = useNavigate();
  const [tutor, setTutor] = useState([]);
  const axiosSecure = useAxios();

  const { details } = useParams();
  // console.log(details);
  useEffect(() => {
    axiosSecure.get(`/tutor/${details}`).then((res) => {
      setTutor(res.data);
    });
  }, [details, axiosSecure]);
  const { name, email, _id, review, price, language, description, photo } =
    tutor;
  console.log(tutor);
  const handleTutorDetail = () => {
    // const reviews = Number(review);
    const tutorInfo = {
      tutorId: _id,
      photo,
      name,
      language,
      price,
      tutorEmail: email,
      loggedInUserEmail: user.email,
      review,
    };
    console.log(tutorInfo);
    Swal.fire({
      title: "Tutor Booked!",
      icon: "success",
      draggable: true,
    });
    axiosSecure
      .post(
        "https://tutor-bridge-server.vercel.app/bookTutorials",
        tutorInfo
      )
      .then((res) => {
        // console.log(res.data);
        navigate("/");
      });
  };

  return (
    <div className=" py-20 flex   justify-center gap-8">
      <div className="flex flex-col md:flex-row  shadow-xl w-full  bg-[#6B8A7A]">
        <div className="flex items-center  rounded-t-3xl md:w-1/2">
          <img
            src={photo || "https://via.placeholder.com/150"}
            alt={name || "Tutor"}
            className="h-full w-full   shadow-lg"
          />
        </div>
        <div className="p-3 md:p-10 space-y-4 text-[#DAD3BE] md:w-1/2">
          <div className="">
            <h3 className="text-4xl font-extrabold">
              {name || "Unknown Tutor"}
            </h3>
            <p className="text-2xl font-light italic ">
              {language || "Languages not specified"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-2xl">⭐</span>
            <span className="text-2xl font-medium text-[#DAD3BE]">
              {review || 0} reviews
            </span>
          </div>
          <div className="text-2xl font-bold text-[#DAD3BE]">
            Price: ${price || 0}/hr
          </div>

          <p className=" text-[#DAD3BE] ">
            {description || "No description available."}
          </p>

          <div className=" flex justify-between items-center ">
            <button
              onClick={handleTutorDetail}
              to={`/tutor/${_id}`}
              className="bg-[#254336] text-[#DAD3BE] text-lg font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#6B8A7A] hover:shadow-lg transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
