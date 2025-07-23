import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATH } from "./config/Constants";
import { Home } from "./config/Imports";
import "./styles/css/App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./Components/NavBar";
import Resume from "./pages/Resume";

function App() {
  const router = createBrowserRouter([
    {
      path: PATH.home,
      element: <Home />,
    },
    {
      path: PATH.resume,
      element: <Resume />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
