import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import Signup from "./component/auth/Signup";
import Login from "./component/auth/Login";
import Home from "./component/Home";
import Logout from "./component/auth/Logout";
import Jobs from "./component/Jobs";
import Browse from "./component/Browse";
import Profile from "./component/Profile";
import JobDescription from "./component/JobDescription";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

// const CustomRoutes = () => {
//   const appRouter = useRoutes([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/signup",
//       element: <Signup />,
//     },
//     {
//       path: "/logout",
//       element: <Logout />,
//     },
//   ]);
//   return appRouter;
// };

function App() {
  return (
    <div>
      {/* <CustomRoutes /> */}
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
