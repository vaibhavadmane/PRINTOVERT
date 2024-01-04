import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { ImPrinter } from "react-icons/im";

function Header() {
  return (
    <div className="flex flex-col bg-blue-700 h-full sticky w-80 ">
      <div className="p-8 flex">
      <ImPrinter className='text-3xl text-white mt-5' />
        <h1 className="h-18 text-center font-extrabold mr-3 text-2xl cursor-pointer p-4 text-white"> PRINTOVERT </h1>
      </div>
      <hr className=' w-50' />
      
      <ul className="p-2">
        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3'> <AiOutlineHome className='mt-1 text-xl hover:text-blue-800' /></div> Dashboard</li>
        
        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <HiPencilAlt className='mt-1 text-xl  hover:text-blue-800' /></div> Design Product </li>

        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoMdImages className='mt-1 text-xl  hover:text-blue-800' /></div> Design Library</li>

        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoIosCreate className='mt-1 text-xl' /></div> Create  Orders</li>

        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoCartOutline className='mt-1 text-xl' /></div> Orders  <div className='px-3 ml-20'></div></li>
        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoWalletOutline className='mt-1 text-xl' /></div> wallet  <div className='px-3 ml-20'> </div></li>
        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <IoTicketOutline className='mt-1 text-xl' /></div> Ticket  <div className='px-3 ml-20'></div></li>
        <li className="py-3 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center hover:text-black hover:font-bold"> <div className='px-3  '> <PiNotePencilBold className='mt-1 text-xl' /></div> Edit Profile  </li>
       
        <li className="py-5 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center mt-72 hover:text-black hover:font-bold"> <div className='px-3  '> <FaRegQuestionCircle className='mt-1 text-xl' /></div> Needhelp?   <div className='px-3 ml-16'> </div></li>
        <hr />
        <li className=" w-64 mt-2 px-4 rounded-lg hover:bg-white cursor-pointer flex text-white font-medium text-center  hover:text-black hover:font-bold"> <div className='px-3  '> <MdOutlineAccountCircle className='mt-1 text-xl' /></div> Login/Logout <div className='px-3 ml-20'> </div></li>
      </ul>
    </div>
  )
}

export default Header