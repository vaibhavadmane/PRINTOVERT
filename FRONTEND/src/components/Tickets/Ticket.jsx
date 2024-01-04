import React from 'react'

function Ticket() {
  return (
   
    
    <div className='bg-blue-200 w-full h-180 '>
    <div className='flex'>
  <h1 className=' font-bold mt-8 ml-7  text-blufont-cerebriSans text-3xle-900 co text-4xl'>Check Ticket</h1>
  <button className='h-8 w-40 rounded-3xl text-white mt-10 ml-6 border bg-blue-700  hover:bg-blue-500 hover:text-white'>Raise a Ticket</button>
  
  </div>
  <p className='ml-7 mt-1'> Raise and Check Ticket</p>


<div className='bg-blue-200 w-full h-180 '>
  
  
  <div className='bg-blue-700 h-11 w-50 ml-6 mr-6 rounded-t-xl mt-4 '>
    <li className='flex justify-evenly text-white  px-10 text-center p-2 '>
        <ul>Subject</ul>
        <ul></ul>
        <ul>Submit Date</ul>
        <ul>Ticket</ul>
        <ul>Status</ul>
        <ul>Response</ul>
        <ul>Action</ul>
    </li>
  </div>

  
  <div className='bg-white h-11 w-50 ml-6 mr-6 '>
    <li className='flex justify-evenly text-Black  px-10 text-center p-2 '>
        <ul>Here is an example</ul>
        
        
        <ul>12-12-2023</ul>
            
        <ul>View</ul>
        
        <ul><button>Pending</button></ul>

        <ul>N/A</ul>
        
        <ul><button className=''>Delete</button></ul>
    </li>
  </div>


</div>







</div>


  )
}

export default Ticket
