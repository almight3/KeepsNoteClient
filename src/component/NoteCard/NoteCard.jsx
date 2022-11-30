import React from 'react'
import {AiOutlinePushpin} from "react-icons/ai";
import {AiFillPushpin} from "react-icons/ai";
import {MdDeleteOutline} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {FaEdit} from "react-icons/fa";
import parse from 'html-react-parser';
import {deleteNote,pinNote} from "../../services/Note";
import {useUserData} from "../../Context/Provider/UserDataProvider";

function NoteCard({note}) {
  const {userDataDispatch} = useUserData();
  const navigate = useNavigate();
  // delete note
 const handleDelete = ()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    deleteNote(note._id,userDataDispatch,token)
 }
 //edit note
 const handleEdit = ()=>{
    navigate(`/note/edit/${note._id}`)
 }
 const handelPinnedNote = ()=>{
      const token = JSON.parse(localStorage.getItem("token"))
       const flag = note.pinned ? false :true;
       pinNote(note._id,flag,userDataDispatch,token)    
 }

  return (
    
      <div className='w-96 bg-secondary text-midnight drop-shadow-2xl	m-3'>
      <div className='p-2 mx-2 mt-5 flex justify-between'>  
      <h4 className='text-lg font-semibold '>{note.title}</h4>
       {
         note.pinned ? <AiFillPushpin size={25} className="cursor-pointer" onClick={handelPinnedNote} />  : <AiOutlinePushpin  size={25} className="cursor-pointer" onClick={handelPinnedNote} />
       }
      </div>
      {/* <div className='px-3 py-1 mx-2' dangerouslySetInnerHTML={{__html:note.description.slice(0,100)}}>
      </div> */}
      <div className='p-2 mx-2 '>{parse(note.content.slice(0,59))}</div>
      <small className='px-3 py-1 mx-2 font-semibold'>Date - 26/11/22</small>
      <div className='flex justify-end m-2'>
         <FaEdit size={30} className="p-1 m-1 cursor-pointer" onClick={handleEdit}/>
         <MdDeleteOutline size={32} className="m-1 p-1 mr-3 cursor-pointer" onClick={handleDelete} /> 
      </div>
    </div>
   
  )
}

export default NoteCard