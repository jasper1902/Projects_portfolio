import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Manage from "./pages/Manage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
          <AboutMe />
          <Contact />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/manage",
      element: <Manage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
