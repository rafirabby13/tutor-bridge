import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import FindTutor from "../Pages/FindTutor/FindTutor.jsx";
import TutorDetails from "../Pages/TutorDetail/TutorDetails.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import AddTutorials from "../Pages/AddTutorialss/AddTutorials.jsx";
import PrivateRoute from "../PrivateRoutes/PrivateRoute.jsx";
import MyBookedTutors from "../Pages/MyBookedTutorss/MyBookedTutors.jsx";
import MyTutorils from "../Pages/MyTutorials/MyTutorils.jsx";
import UpdateTutorial from "../Pages/UpdateTutorial/UpdateTutorial.jsx";
import FindTutorCategory from "../Pages/FindTutorCategory/FindTutorCategory.jsx";
import Error from "../Pages/Error/Error.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
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
          path: '/find-tutors/:category',
          element: <FindTutorCategory/>,
          // loader: ({params})=> fetch(`https://tutor-bridge-server.vercel.app/tutor/category/${params.category}`)

        },
        {
          path: '/tutor/:details',
          element: <TutorDetails/>,
          // loader: ({params})=> fetch(`https://tutor-bridge-server.vercel.app/tutor/${params.details}`)
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/addTutorials',
          element: <PrivateRoute><AddTutorials/></PrivateRoute>
        },
        {
          path: '/myBookedTutor',
          element: <PrivateRoute><MyBookedTutors/></PrivateRoute>
        },
        {
          path: '/myTutorials',
          element: <PrivateRoute><MyTutorils/></PrivateRoute>,
          loader: ()=>fetch("https://tutor-bridge-server.vercel.app/findTutor")
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateTutorial/></PrivateRoute>,
          loader: ({params})=>fetch(`https://tutor-bridge-server.vercel.app/updateTutorials/${params.id}`)
        }
      ]
    },
  ]);