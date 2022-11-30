import React,{useEffect} from 'react'
import {getAllNotes} from "../../services/Note";
import {useAuth} from "../../Context/Provider/AuthProvider"
import { useUserData } from '../../Context/Provider/UserDataProvider';
import NoteCard from "../../component/NoteCard/NoteCard"
function Notes() {
  const {userDataState:{notes},userDataDispatch} = useUserData()
  const {authState:{token}} = useAuth();
  
  useEffect(()=>{
   getAllNotes(userDataDispatch,token)
  },[userDataDispatch,token])
  
  const pinned = notes.filter(n=>n.pinned===true);
  console.log(pinned)

  return (
    <>
     <div className='flex flex-wrap jutify-center  mt-8 w-8/12 mx-auto'>
     {
       pinned.length===0 ? ""  : 
       <><h2 className='w-full text-xl mx-8 my-3 font-semibold'>Pinned</h2> 
       {pinned.map(p=><NoteCard note={p} />)}
       </>
     }
     <h2 className='w-full text-xl mx-8 my-3 font-semibold'>Notes</h2>
      {notes.map(note=>note.pinned===false ? <NoteCard note={note} /> : "")}
    </div>
    </>
   
  )
}

export default Notes