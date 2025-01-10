import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const { user } = useContext(AuthContext);
  const tutorial = useLoaderData();
  // console.log(tutorial);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const review2 = form.review.value;
    const review = Number(review2);

    const tutorialInfo = {
      email,
      name,
      photo,
      language,
      price,
      description,
      review,
    };
    // console.log(tutorialInfo);
    fetch(`http://localhost:5000/updateTutorial/${tutorial._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorialInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Updated Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    // axios.post(`http://localhost:5000/updateTutorial/${tutorial._id}`, tutorialInfo)
    // .then(res=>{
    //     console.log(res.data);
    // })
  };
  return (
    <div className="min-h-screen py-10">
      <Helmet>
        <title>Update | Tutor Bridge</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto feedback updateForm  p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold  text-center">
          Update Tutor Profile
        </h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user?.displayName}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium ">
            Tutorial Image
          </label>
          <input
            type="text"
            id="image"
            name="photo"
            defaultValue={tutorial.photo}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Language */}
        <div>
          <label htmlFor="language" className="block text-sm font-medium ">
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            defaultValue={tutorial.language}
            placeholder="e.g., English, Spanish"
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium ">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={tutorial.price}
            placeholder="Enter price per lesson"
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium ">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={tutorial.description}
            placeholder="Write a brief description about your expertise..."
            rows={4}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium ">
            Review
          </label>
          <input
            type="number"
            id="review"
            name="review"
            value={tutorial.review}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            disabled
          />
        </div>

        {/* Submit Button */}
        <div>
          <button className="w-full bg-[#254336] text-white py-2 rounded-lg shadow hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 transition">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTutorial;
