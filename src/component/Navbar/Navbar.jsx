import React from 'react'
import {FaUser} from "react-icons/fa"
import { useAuth } from '../../Context/Provider/AuthProvider'
function Navbar() {
   const {authState:{user}} = useAuth();
   return (
   <nav className='bg-secondary text-midnight h-[4.5rem] w-[85%] ml-[15%]'>
       <ul className='flex items-center h-full	'>
          <li className='text-2xl grow'>
             KeepsNote
          </li>
          <li className='flex mr-8'>
           
             <FaUser size={25} color="#1c1917" className='mx-3' />
             <span className='text-lg font-medium'>{user.name}</span>
          </li>

       </ul>
   </nav>
  )
}

export default Navbar