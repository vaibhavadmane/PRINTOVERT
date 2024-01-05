import React, { useRef, useState } from 'react';
import { fabric } from 'fabric';
import { FaArrowRight } from "react-icons/fa6";

function Designproduct() {
  const canvasRef = useRef(null);
  const [selectedCloth, setSelectedCloth] = useState(null);

  const handleClothSelection = (cloth) => {
    setSelectedCloth(cloth);
    // Logic to handle cloth selection
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const fabricImage = new fabric.Image(img);
        canvasRef.current.add(fabricImage);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const getImage = () => {
    const fileInput = document.getElementById('imageInput');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const fabricImage = new fabric.Image(img);
          canvasRef.current.add(fabricImage);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveToAccount = () => {
    // Logic to save the design to the user's account
  };

  return (
    <div className='bg-blue-200 w-full'>
       <div className='w-full'>
        <h2 className='font-semibold text-blue-800 text-4xl mt-14 ml-10 flex'>
          <div className='w-10 h-10 bg-blue-700 text-center rounded-lg mr-3'>
            <FaArrowRight className='text-3xl mt-2 ml-1 mb-3  text-white font-bold'/>
          </div>
          Design your product
        </h2>
        <div className='ml-60'>
          <h2 className='text-black-800 text-2xl mt-18 ml-72 font-semibold '>Select the variant</h2>
        </div>
      </div>
      {/* Upload Image Form */}
      <form className='uploadDiving h-40 w-96 border-2 rounded-2xl border-blue-500/100 ml-56 bg-transparent hover:bg-white'>
  <label htmlFor='imageInput' className='drop-container' id='dropcontainer'>
    <span className='drop-title text-3xl font-bold ml-24 text-blue-500'>Drop files here</span>
    <h1 className='mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500'>Or</h1>
    <div className='flex'>
      <input type='file' id='imageInput' accept='image/*' className='w-32 mt-5 ml-7' required />
      <div className='btn-collectioninput-fs16'>
        <button id='inputCancel' onClick={getImage} className='w-28 h-18 text-blue-500 font-bold text-center bg-white rounded-lg border-black border-r-blue-700 border-r-2 border-l-2 mt-5 border-t-2 border-b-2 ml-14 flex hover:bg-blue-700 hover:text-white'>
          <h1 className='ml-3 mt-0'>Add image</h1>
        </button>
      </div>
    </div>
  </label>
</form>

     

      {/* Canvas for customization */}
      <div className='flex mt-10'>
        <canvas ref={canvasRef} width={500} height={500} className='border border-gray-500 rounded-lg ml-28'></canvas>
      </div>

      {/* Save to Account Button */}
      <div className='flex justify-center mt-5'>
        <button onClick={handleSaveToAccount} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Save to Account
        </button>
      </div>
    </div>
  );
}

export default Designproduct;
