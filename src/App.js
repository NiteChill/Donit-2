import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='w-full h-full d-flex-column overflow-y-auto'>
        <div className='w-full h-fit-content p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}