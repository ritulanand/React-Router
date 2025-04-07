import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";

function App() {

  // 1st way predefined routes
  // const routes = createRoutesFromElements(
  //   <Route path="/" element = {<Navbar /> }>
  //     <Route index element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </Route>
  // );
  // const router = createBrowserRouter(routes);

  // 2nd way
  const router = createBrowserRouter([
    // { path: "/root", element: <Navbar /> ,
    //   children : [
    //     { index : true, element: <Home /> },
    //     { path: "/root/about", element: <About /> }, //abosolute path
    //     { path: "/root/items", element: <Items /> }
    //   ]
    // }
    { path: "/", element: <Navbar /> ,
      children : [
        { index : true, element: <Home /> }, // it will go to / route by using index: true
        { path: "about", element: <About /> }, //relative path
        { path: "items",
          children : [
        {index: true, element : <Items />},
        {path : ":id", element : <ItemDetails />}
          ]
        }
        
      ]
    }
  ]);

  //nested routing better to use relative paths
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
