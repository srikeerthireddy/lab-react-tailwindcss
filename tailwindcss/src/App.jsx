import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
   <>

   <Navbar />
   <div className=" flex flex-col justify-center my-5 gap-3 items-center p-2">
   <div className="w-5/6" >
<button className=" px-3 py-2  bg-blue-500 rounded-md text-white">Button one</button></div>
<div className="w-5/6 border border-red-500 bg-red-200 p-5 rounded">
  <p className="text-red-600">
    <span className="font-medium">Alert!</span>This is awsome!
  </p>
</div>
   
   </div>
   <div className="p-2 my-5 flex justify-center items-center">
   <Card />
   </div>
   
<Footer />
   </>
  )
}