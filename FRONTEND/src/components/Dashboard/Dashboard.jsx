import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";

function Dashboard() {
  return (
        <>
            <div className='bg-blue-200 w-full h-180'> 
            <h2 className='font-bold mt-8 ml-7 font-cerebriSans text-5xl text-blue-900'>Main Dashboard</h2>
            <h5 className='text-gray-600 ml-7 font-bold '>Let's have a Tour to the Dashboard</h5>

            <div className='flex flex-wrap'>

            <div className=' bg-white h-28 ml-7 mt-10 rounded-2xl w-64'>
           
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Spent</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>$0.00</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Total orders</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>0</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Wallet Balance</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>$0.00</h2>
            </div>

            <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Active Orders</h3>
             <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>0</h2>
            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Wallet Balance</h3>
                <h4 className='ml-6 text-lg'>$0.00</h4>
                <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View History</button>
                <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-8 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Add Amount</button>

            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Create a new Order</h3>
             
                <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Create a new Order</button>
            </div>

            <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>My Orders</h3>
             
                <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View all Orders</button>
            </div>
            
            <div className=' bg-white h-80 w-80 ml-7 mt-5 rounded-2xl'>
                <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Contact Support</h3>
                <div className='text-9xl ml-24 mt-6'> <RiCustomerService2Fill/></div>
             
                <button className='h-10 w-44 rounded-3xl text-black mt-20 ml-5 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Contact Us</button>
            </div>

            </div>
           


            </div>




        
    
      
       
           
        </>
    
  )
}

export default Dashboard




  
        {/* <div className='w-full bg-gray-100 h-full'>

            <h3 className='font-bold mt-2 ml-14 font-cerebriSans text-3xl'>Good evening, Printovert!</h3>

            <div className='w-full h-64 flex ml-14 mt-6  rounded-3xl'>

                <div className='bg-white w-90 rounded-lg h-48 p-8 border '>

                    <div className='bg-pink w-full h-10 flex px-full'>
                    <LuShip className='mt-2 mr-2 text-2xl' /> <h3 className='text-xl font-semibold mr-8'> Orders requiring actions</h3> <MdErrorOutline className='mt-2 text-2xl'/>
                    </div>
                    <div className='w-full h-0.5 bg-gray-400'></div>
                    <div className='text-5xl font-bold w-4 h-10 mt-2'>0</div>

                    <button >
                    <div className='h-10 mt-4 border rounded-lg w-28 text-center font-semibold ml-52 hover:text-green-500'>
                      <h2 className='mt-1'>Go to Orders</h2>   
                    </div>
                    </button>

                </div>

                <div className='bg-white w-90 rounded-lg h-48 p-8 border ml-4'>

                    <div className='bg-pink w-full h-10 flex px-full'>
                    <LuShip className='mt-2 mr-2 text-2xl' /> <h3 className='text-xl font-semibold mr-8 px-14'> Costs to-date </h3> <MdErrorOutline className='mt-2 text-2xl'/>
                    </div>
                    <div className='w-full h-0.5 bg-gray-400'></div>
                    <div className='text-5xl font-bold w-4 h-10 mt-2'>$0.00</div>
                </div>

                 <div className='bg-white w-90 rounded-lg h-48 p-8 border ml-4'>

                    <div className='bg-pink w-full h-10 flex px-full'>
                    <LuShip className='mt-2 mr-2 text-2xl' /> <h3 className='text-xl font-semibold mr-8 font-sans'> Orders requiring actions</h3> <MdErrorOutline className='mt-2 text-2xl'/>
                    </div>
                    <div className='w-full h-0.5 bg-gray-400'></div>
                    <div className='text-5xl font-bold w-4 h-10 mt-2'>0</div>

                    <button >
                    <div className='h-10 mt-4 border rounded-lg text-center font-semibold hover:text-green-500 ml-44 w-36'>
                      <h2 className='mt-1 font-sans'>Go to my Products</h2>   
                    </div>
                    </button>

                </div>

            </div>
            
            {/* <div className='w-104 h-96 bg-red bg-white ml-14 rounded-xl mr-10'>
            
                   
            <div className='flex'>
                    <h3 className='font-bold text-xl ml-6 mt-0 p-4'>Trending now</h3>
            </div>
           <hr />
        <div className='flex flex-wrap'>

            
        <div className='flex  ml-6'>
                    <div className='w-56 h-96 bg-gray mt-4 rounded-lg ml-6'>
                        <div className='w-56 h-56 rounded-lg'>
                            <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6481c5a99bd819c73605cc83.jpg" alt="" />
                        </div>
                        <div className=''>
                                <h3 className='font-semibold text-base '>Ceramic Ornament,4 Shapes</h3>
                                <h5 className='text-gray-500'>By Generic brand</h5>
                                <h4 className=''>From USD 5.76</h4>
                                <h4 className='text-green-500'>From USD 4.44 with Printify Premium</h4>
                                <h6 className='text-gray-500'>1 size Imagine Your Photos</h6>
                        </div>
                    </div>
            </div>


            <div className='flex  ml-6'>
                    <div className='w-56 h-96 bg-gray mt-4 rounded-lg ml-6'>
                        <div className='w-56 h-56 rounded-lg'>
                            <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6358ea93a0d582eced04250c.jpg" alt="" />
                        </div>
                        <div className=''>
                                <h3 className='font-semibold text-base '>Ceramic Ornament,4 Shapes</h3>
                                <h5 className='text-gray-500'>By Generic brand</h5>
                                <h4 className=''>From USD 5.76</h4>
                                <h4 className='text-green-500'>From USD 4.44 with Printify Premium</h4>
                                <h6 className='text-gray-500'>1 size Imagine Your Photos</h6>
                        </div>
                    </div>
            </div>



            <div className='flex  ml-6'>
                    <div className='w-56 h-96 bg-gray mt-4 rounded-lg ml-6'>
                        <div className='w-56 h-56 rounded-lg'>
                            <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6481c5a99bd819c73605cc83.jpg" alt="" />
                        </div>
                        <div className=''>
                                <h3 className='font-semibold text-base '>Ceramic Ornament,4 Shapes</h3>
                                <h5 className='text-gray-500'>By Generic brand</h5>
                                <h4 className=''>From USD 5.76</h4>
                                <h4 className='text-green-500'>From USD 4.44 with Printify Premium</h4>
                                <h6 className='text-gray-500'>1 size Imagine Your Photos</h6>
                        </div>
                    </div>
            </div>

            <div className='flex ml-6'>
                    <div className='w-56 h-96 bg-gray mt-4 rounded-lg ml-6'>
                        <div className='w-56 h-56 rounded-lg'>
                            <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6481c5a99bd819c73605cc83.jpghttps://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6357ffac694e2fedfc0399bb.jpg" alt="" />
                        </div>
                        <div className=''>
                                <h3 className='font-semibold text-base '>Ceramic Ornament,4 Shapes</h3>
                                <h5 className='text-gray-500'>By Generic brand</h5>
                                <h4 className=''>From USD 5.76</h4>
                                <h4 className='text-green-500'>From USD 4.44 with Printify Premium</h4>
                                <h6 className='text-gray-500'>1 size Imagine Your Photos</h6>
                        </div>
                    </div>
            </div>
      

        </div>
           
               
            </div> */}

        // </div> */}
