import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../views/home";
import Detail from "../views/details";
import Error404 from "../views/Error404";
import Profile from "../views/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail></Detail>,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <div>My info</div>,
      },
      {
        path: "liked-events",
        element: <div>My liked events</div>,
      },
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
