import "./App.css";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Layout } from "./layout/Layout";
import "./media.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Contact } from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: (
            <>
              <Hero />,
              <Skills />
              <Contact/>
            </>
          ),
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/hero",
          element: <Hero />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
