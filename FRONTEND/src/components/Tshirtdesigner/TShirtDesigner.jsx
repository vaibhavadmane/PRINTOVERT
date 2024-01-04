import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import { FaArrowRight } from "react-icons/fa6";

const TShirtDesigner = () => {


  return (
   <>
    <div className='bg-blue-200 w-full h-180'> 

    <div className='w-full'>
    <h2 className='font-semibold text-blue-800 text-4xl mt-14 ml-10 flex '>
         <div className='w-10 h-10 bg-blue-700 text-center rounded-lg mr-3'> <FaArrowRight className='text-3xl mt-2 ml-1 mb-3  text-white font-bold'/></div>
Design your product</h2>
    <div className='ml-60'>
    </div>
  </div>


  <div className=' w-screen  mt-10 flex'>

  {/* <div className='w-96 bg-red-700 h-96 '><img className=' w-96 h-72' src="https://www.printondemandindia.in/_next/image?url=%2Fassets%2Fimages%2Fcanvas%2FTShirt2%2FBlack%2FBlack%20(1).png&w=1080&q=75" alt="" /> </div> */}
    <div className='text-4xl text-red-600 ml-64 mt-40'>WE ARE WORKING ON THIS UI </div>
    </div>





    </div>

   </>
  );
};

export default TShirtDesigner;
