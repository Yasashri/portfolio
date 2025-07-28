import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PATH } from "./config/Constants";
import { Home } from "./config/Imports";
import "./styles/css/App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./Components/NavBar";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import MyWork from "./pages/MyWork";

// Layout component with Navbar
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: PATH.home, element: <Home /> },
        { path: PATH.resume, element: <Resume /> },
        { path: PATH.contact, element: <Contact /> },
        { path: PATH.stories, element: <Stories /> },
        { path: PATH.mywork, element: <MyWork /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;