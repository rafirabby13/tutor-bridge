/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import useAxios from "../../hooks/useAxios.jsx";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyTutorils = () => {
  const { user, tutors, setTutors } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  const axiosSecure = useAxios()

  //   const myTutorials = useLoaderData()
  //   console.log(myTutorials);

  useEffect(() => {
    axiosSecure.get(`/tutorr?email=${user?.email}`)
    .then((res) => {
      // console.log(data);
      setTutorials(res.data);
    });

    // axios.get(`http://localhost:5000/tutorr?email=${user?.email}`, {
    //   withCredentials: true
    // })
    // .then((res) => {
    //   // console.log(data);
    //   setTutorials(res.data);
    // });

    // fetch(`http://localhost:5000/tutorr?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setTutorials(data);
    //   });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tutorials/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount > 0) {
              const remaining = tutors?.filter((tutor) => tutor._id != id);
              const remaining2 = tutorials?.filter((tutor) => tutor._id != id);
              // console.log(remaining);
              setTutors(remaining);
              setTutorials(remaining2);
            }
          })
          .catch((err) => {
            console.log(err);
          });


        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    // console.log(id);
   
  };

  return (
    <div className="min-h-screen py-20">
      <Helmet>
                
                <title>My Tutorials | Tutor Bridge</title>
                
            </Helmet>
      <div className="overflow-x-auto w-full p-5">
        <table className="table w-full border border-gray-200">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Name</th>
              <th className="p-3">Image</th>
              <th className="p-3">Language</th>
              <th className="p-3">Price</th>
              <th className="p-3">Description</th>
              <th className="p-3">Review</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial._id} className="hover:bg-gray-50">
                <td className="p-3">{tutorial.name}</td>
                <td className="p-3">
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={
                          tutorial.photo ||
                          "https://via.placeholder.com/100?text=No+Image"
                        }
                        alt="Tutorial"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3">{tutorial.language}</td>
                <td className="p-3">${tutorial.price}</td>
                <td className="p-3">{tutorial.description}</td>
                <td className="p-3">{tutorial.review}</td>
                <td className="p-3 flex gap-2">
                  <Link to={`/update/${tutorial._id}`}>
                    <button className="btn btn-info btn-sm">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tutorial._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {tutorials.length === 0 && (
          <p className="text-center  mt-5">No tutorials found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTutorils;
