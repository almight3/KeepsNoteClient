import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {CiLogin} from "react-icons/ci"
import {CiLogout} from "react-icons/ci"
function SideBar() {
  return (
    <aside className='fixed w-[15%] h-screen	bg-secondary inline-block'>
        <ul className='flex flex-col w-full'>
          <li className='p-4 flex justify-center'>
          <AiOutlineMenu color="#1c1917" size={40}  className=""/>
          </li>
          <li className='p-3 flex justify-center  text-midnight text-lg  '>
              Notes
          </li>
          <li className='p-3 flex justify-center  text-midnight text-lg  '>
              Search
          </li>
          <li className='p-3 flex justify-center'>
             <CiLogin size={30} className="mx-2"/> 
             <span className='text-lg'>Login</span>
          </li>
        </ul>

    </aside>
  )
}

export default SideBar