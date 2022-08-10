import React, { useRef, useState } from 'react'
import {reviews, list} from './TiwanData'

function TailwindClass() {
  const [toggle, settoggle] = useState(false)
 
  function add() {
    settoggle(!toggle)
  }
  // window.onscroll = () => {
  //   settoggle(!toggle)
  // }

  return (
    <div className='grid md:grid-cols-3 font-serif'>
      <div className='flex md:col-span-1 md:flex md:justify-end'>
        <nav className='text-right'>
          
          <div className='flex'>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100 text-mamoh'>
              <a className='hover:text-gray-700' href="#">Oslim Tailwind</a>
            </h1>
            {/* Hamburger */}
          <div onClick={add} className='md:hidden p-3 absolute right-0'>
            <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
            <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
            <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
          </div>
          </div>

       
            {
              list.map((elem,i) => {
                return (
                 <div className={toggle ? 'block' : 'hidden md:block'}>
                   <ul key={i} className='px-4 text-center '>
                    <li className='py-3 px-2 font-bold text-lg'><a href=""><span>{elem.ul}</span></a></li>
                   </ul>
                 </div>
                )
              })
            }
             
          
         
        </nav>
      </div>

      <main className='bg-gray-100 px-16 py-6 md:col-span-2'>

        <div className='flex justify-center md:justify-end'>
          <a className='text-primary border border-primary btn      md:border-1 hover:bg-primary hover:text-white transition ease-in-out duration-500' href="">Login</a>
          <a className='text-primary border border-primary ml-7 btn  md:border-1 hover:bg-primary hover:text-white transition ease-in-out duration-500' href="">Signup</a>
        </div>
      
  
        <header>
          <h2 className='text-6xl font-semibold text-gray-700 py-8'>Recipies</h2>
          <h3 className='text-2xl text-gray-600'>For Oslims</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2  border-b border-grey-200'>Latest Recipes</h4>

          <div className='mt-8 '>
            {/* CArd gos here */}
            <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
            {
              reviews.map(elem => {
              return(
                <>
                <div key={elem.id} className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-2xl'>
              <img className='w-full h-42 object-cover md:h-72 lg:h-72' src={elem.image} alt="" />
              <div className='m-4'>
                <span className='font-bold text-sm'>{elem.text}</span>
                <span className='block text-sm text-gray-500'>{elem.author} </span>
                
              </div>
              <div className='bg-secondary-100 text-secondary-200 text-xm uppercase rounded-full p-2 absolute top-0 ml-2 mt-2' >
                  <span>{elem.badge}</span>
                </div>
            </div>
                </>
              )
              })
              }
              </div>
          </div>

            <h4 className='mt-12 py-3 border-b border-grey-200'>Most Popular</h4>

            <div className='mt-8'>
              {/* card go here */}
            </div>

            <div className='flex justify-center'>
              <div><div className='bg-secondary-100 text-secondary-200 btn  transform hover:scale-125 transition ease-out duration-500 hover:shadow-lg hover:bg-opacity-50'>Load More</div></div>
            </div>

       
        </div>
      </main>
    </div>
  )
}

export default TailwindClass