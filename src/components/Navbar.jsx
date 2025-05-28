import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='bg-white h-[7vh] flex justify-between p-4 border-b-1 text-black border-black/30'> 
         <ul className='flex items-center'><h1 className='font-medium text-2xl'><i class="ri-stethoscope-line text-2xl"></i> Medi Care AI</h1></ul>
         <div className='flex gap-10  mr-10'>
         <ul className='flex items-center'><h1 to="" className='  hover:text-[#4796E3]'>Home</h1></ul>
          <ul className='flex items-center'><h1  className=' hover:text-[#4796E3]'>Features</h1></ul>
           <ul className='flex items-center'><h1  className=' hover:text-[#4796E3]'>About</h1></ul>
            <ul className='flex items-center'><h1  className=' hover:text-[#4796E3]'>Services</h1></ul>
            <ul className='flex items-center'><h1  className=' hover:text-[#4796E3]'>Contact</h1></ul>
         <ul className='flex items-center'><button type='button'  className='font-medium cursor-pointer bg-[#DDE7F2] p-2  px-5 rounded-[8px] hover:bg-[#afcbe6]' onClick={()=> signIn()}>Get Started</button></ul>
         </div>
           
        
               
    </div>
    </div>
  )
}

export default Navbar
