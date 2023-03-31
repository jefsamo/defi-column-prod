import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Article from "./pages/Article/Article";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        {/* <div className="container"> */}
        <Outlet />
        {/* </div> */}
        <Subscribe />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/beginner-guide",
        //   element: <BeginnerGuide />,
        // },
        {
          path: "/post/:id",
          element: <Article />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
