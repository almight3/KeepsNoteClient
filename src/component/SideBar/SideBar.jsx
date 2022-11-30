import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {CiLogin} from "react-icons/ci"
import {CiLogout} from "react-icons/ci"
import {useLocation,Link} from "react-router-dom";
import { useAuth } from '../../Context/Provider/AuthProvider';
import {LOGOUT_USER} from "../../utils/constants.js";
function SideBar() {
  
  const location = useLocation();
  const {authState:{isAuthenticated},authDispatch} = useAuth();
 
  const inactive = 'p-3 m-0.5 w-5/6 mx-auto flex justify-center cursor-pointer  text-midnight text-lg hover:text-default hover:rounded-xl hover:bg-midnight hover:transition-all hover:ease-out';
  const active = 'p-3 m-0.5 w-5/6 mx-auto flex justify-center cursor-pointer bg-midnight text-default text-lg rounded-xl';
  console.log(location.pathname)
  const handelLogout = ()=>{
    authDispatch({
      type:LOGOUT_USER
    })
  }

  return (
    <aside className='fixed w-[15%] h-screen	bg-secondary inline-block'>
        <ul className=' group flex flex-col w-full'>
          <li className='p-4 flex justify-center'>
          <AiOutlineMenu color="#1c1917" size={40}  className=""/>
          </li>
          <Link to="/notes">
            <li className={location.pathname === "/notes" ? active :inactive}>
                Notes
            </li>
          </Link>
          <Link to="/notes/new">
              <li className={location.pathname === "/notes/new" ? active :inactive}>
                  Create Note
              </li>
          </Link>
          <Link to="/search">
              <li className={location.pathname === "/search" ? active :inactive}>
                  Search
              </li>
          </Link> 
          <Link to="/trash">
              <li className={location.pathname === "/trash" ? active :inactive}>
                  Trash
              </li>
          </Link>
          {
          isAuthenticated ? <li className={location.pathname === "/logout" ? active :inactive} onClick={handelLogout}>
             <CiLogout size={30} className="mx-2"/> 
             <span className='text-lg'>Logout</span>
          </li> : 
         <Link to="/login">
         <li className={location.pathname === "/login" ? active :inactive}>
             <CiLogin size={30} className="mx-2"/> 
             <span className='text-lg'>Login</span>
          </li>
         </Link>
          }
        </ul>

    </aside>
  )
}

export default SideBar