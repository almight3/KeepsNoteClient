import {useEffect,useState} from 'react'
import {geAllDeletedNotes} from "../../services/trash.js";
import {useUserData} from "../../Context/Provider/UserDataProvider";
import { useAuth } from '../../Context/Provider/AuthProvider.jsx';

import TrashCard from '../../component/TrashCard/TrashCard.jsx';
function Trash() {
  const {userDataState:{trash},userDataDispatch} = useUserData();
  const {authState:{token}} = useAuth(); 

  useEffect(()=>{
   geAllDeletedNotes(userDataDispatch,token)
  },[userDataDispatch,token])
  return (
    <>
    <div className='flex flex-wrap justify-center mt-8 w-8/12 mx-auto'>
     <h2 className='w-full text-xl mx-8 my-3 font-semibold'>Notes in Trash</h2>
     {trash && trash.map(trashNote=><TrashCard trashNote={trashNote} />)}
   </div>
   </>
  )
}

export default Trash