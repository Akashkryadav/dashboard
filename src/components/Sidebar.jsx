import {FaHome,FaForumbee} from 'react-icons/fa';
import { LuFileSpreadsheet } from "react-icons/lu";

import Tvpluslogo from '../assets/Tvpluslogo.jpg';
import { Link } from 'react-router-dom';
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
        <Link to="/Home" className={({isActive}) =>
                                        ` px-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
          <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
          Home
          </Link>
      </li>
      <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <Link to="/Forum"className={({isActive}) =>
                                        ` px-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
          <FaForumbee className='inline-block w-6 h-6 mr-2 -mt-2'></FaForumbee>
          Forum
          </Link>
      </li>
      
      <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <Link to="/Report" className={({isActive}) =>
                                        ` px-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
          <LuFileSpreadsheet className='inline-block w-6 h-6 mr-2 -mt-2'></LuFileSpreadsheet>
          Report
          </Link>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar
