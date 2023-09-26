import "./Styles/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Components/landingPage.jsx";
import NavBar from "./Components/navigationBar.jsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />}>
        <Route index element={<LandingPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
