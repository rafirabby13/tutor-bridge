import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import FindTutor from "../Pages/FindTutor/FindTutor.jsx";
import TutorDetails from "../Pages/TutorDetail/TutorDetails.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <div>error</div>,
      children: [
        {
            path: '',
            element: <Home/>
        },
        {
          path: '/find-tutors',
          element: <FindTutor/>
        },
        {
          path: '/tutor/:id',
          element: <TutorDetails/>,
          loader: ({params})=> fetch(`http://localhost:5000/tutor/${params.id}`)
        }
      ]
    },
  ]);