import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Subscribe />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/beginner-guide",
        //   element: <BeginnerGuide />,
        // },
        // {
        //   path: "/post/:id",
        //   element: <Article />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
