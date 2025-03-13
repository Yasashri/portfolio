import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATH } from "./config/Constants";
import { Home } from "./config/Imports";
import "./styles/css/App.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path: PATH.home,
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
