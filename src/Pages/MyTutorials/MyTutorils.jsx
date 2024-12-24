import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const MyTutorils = () => {
    const {user} = useContext(AuthContext)
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tutorr/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTutorials(data);
      });
  }, [user.email]);
  return (
  <div>
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
                <button className="btn btn-info btn-sm">Update</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty State */}
      {tutorials.length === 0 && (
        <p className="text-center text-gray-500 mt-5">No tutorials found.</p>
      )}
    </div>
  </div>
);
};

export default MyTutorils;
