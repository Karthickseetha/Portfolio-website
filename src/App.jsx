
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Root,ErrorPage,About,Home,Projects,Contact} from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },

    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },

  ],
  },
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )

}
 
export default App;