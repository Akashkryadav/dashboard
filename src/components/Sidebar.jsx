import {FaHome,FaForumbee} from 'react-icons/fa';
import { LuFileSpreadsheet } from "react-icons/lu";

import Tvpluslogo from '../assets/Tvpluslogo.jpg';
const Sidebar = () => {
  return (
    <div className="w-62 bg-gray-800 fixed h-full">
    <div className="my-2 mb-4">
      <img className='w-6 h-6' src={Tvpluslogo} alt=""/>
      <h2 className="text-2x text-white font-bold">Samsung TvPlus</h2>
    </div>
    <hr />
    <ul className="mt-3 text-white font-bold">
      <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <a href="" className="px-3">
          <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
          Home
          </a>
      </li>
      <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <a href="" className="px-3">
          <FaForumbee className='inline-block w-6 h-6 mr-2 -mt-2'></FaForumbee>
          Forum
          </a>
      </li>
      
      <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <a href="" className="px-3">
          <LuFileSpreadsheet className='inline-block w-6 h-6 mr-2 -mt-2'></LuFileSpreadsheet>
          Forum
          </a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar
