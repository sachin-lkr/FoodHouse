import Home from "./components/Home/Home";
import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Frouts from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Meat from "./components/Meat/Meat";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllCategoury from "./components/AllCategoury/AllCategoury";


function App(){
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/fruits",
      element:<>
      <Navbar/>
      <Frouts/>
      <Footer/>
      </>
    },
     {
      path:"/dairy",
      element:<>
      <Navbar/>
      <Dairy/>
      <Footer/>
      </>
    },
     {
      path:"/meat",
      element:<>
      <Navbar/>
      <Meat/>
      <Footer/>
      </>
    },
     {
      path:"/allCategoury",
      element:<>
      <Navbar/>
      <AllCategoury/>
      <Footer/>
      </>
    },
  ])
  return <RouterProvider router={router} />
};
export default App;

