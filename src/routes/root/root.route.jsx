import { Navbar,Hero} from "../../component";
import { Outlet } from "react-router-dom";

const Root = () => {
    return ( 
        <>
        <main className="flex min-h-screen 
    flex-col bg-black ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 md:mt-5  
      sm:mt-20">
      <Outlet/>
      </div>
    </main>
        </>
     );
}
 
export default Root;