import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/layout/Main";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
         
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
         
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
