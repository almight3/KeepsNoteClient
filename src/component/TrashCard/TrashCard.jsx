import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {MdDelete} from "react-icons/md";
import parse from 'html-react-parser';
import {MdRestorePage} from "react-icons/md";
import {deleteNoteFromTrash,restoreNoteFromTrash} from "../../services/trash";
import {useUserData} from "../../Context/Provider/UserDataProvider";
import {useAuth} from "../../Context/Provider/AuthProvider";
function TrashCard({trashNote}) {
  const {userDataDispatch} = useUserData();
  const {authState:{token}} = useAuth(); 
  
  // restore notes from trash
  const handelRestoreNote = ()=>{
    restoreNoteFromTrash(trashNote,userDataDispatch,token)
  }


  //delete note from trash
  const handleDelete = ()=>{
    deleteNoteFromTrash(trashNote._id,userDataDispatch,token)
  }
  return (
    <div className='w-80 bg-secondary text-midnight drop-shadow-2xl	m-3'>
      <div className='p-2 mx-2 mt-5 flex justify-between w-72 break-all'>  
      <p className='text-lg font-semibold '>{trashNote.title}</p>
      </div>
      <div className='p-2 mx-2 break-words'>{parse(trashNote.content.slice(0,100))}</div>
      <small className='px-3 py-1 mx-2 font-semibold'>Date - 26/11/22</small>
      <div className='flex justify-end m-2'>
          <MdRestorePage size={32} className="m-1 p-1 cursor-pointer" onClick={handelRestoreNote} />
         <MdDelete size={32} className="m-1 p-1 mr-3 cursor-pointer"  onClick={handleDelete}/> 
      </div>
    </div>
  )
}

export default TrashCard