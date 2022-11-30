import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {createNotes,noteDetails,updateNote} from "../../services/Note";
import { useUserData } from "../../Context/Provider/UserDataProvider";
import { useAuth } from "../../Context/Provider/AuthProvider";
import { useParams } from 'react-router-dom';

const priorityData = ["High","Medium","Low"];
const labelData = ["Work","Hobby","Entertainment","Gym","Prepration"]


function NoteEditor() {
  const {userDataState:{notesDetail},userDataDispatch} =  useUserData();
  const [isEdit,setIsEdit] = useState(false);
  const [content, setContent] = useState('');
  const [title,setTitle] = useState('');
  const [priority,setPrioriy] = useState('');
  const [label,setLabel] = useState('');
  const {id} = useParams();

  useEffect(()=>{ 
  setIsEdit(false) 
  setTitle('')
  setContent('')
  setPrioriy('')
  setLabel('')
  if(id){
    console.log("edit")
    const token = JSON.parse(localStorage.getItem("token"))
    noteDetails(id,userDataDispatch,token).then(res=>{
      console.log(res)
       setTitle(res.title)
       setContent(res.content)
       setPrioriy(res.priority)
       setLabel(res.label)
    })
    setIsEdit(true)
  }  
  },[id,userDataDispatch,])
  
  

  const modules ={
    toolbar:[
        ["bold", "underline", "italic"],
        [{ header: [1, 2, 3, 4, 5] }],
        [{ list: "ordered" }],
        [{ list: "bullet" }]
    ]
   }
   const style={
    "background-color":"#fafafa",
    "height":"550px"
   }
  
  const handelNewNote = (e)=>{
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('token'));
    createNotes({title,content,priority,label},userDataDispatch,token)
  }

  const handleUpdateNote = (e)=>{
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('token'));
    updateNote(notesDetail._id,{title,content,priority,label},userDataDispatch,token)    
  } 
   return (
    <form className='w-7/12 h-[750px]	flex flex-col mx-auto my-12 p-3 bg-secondary' onSubmit={isEdit ? (e)=>{handleUpdateNote(e)} :(e)=>{handelNewNote(e)}}>
     <input type="text" placeholder='Title' value={title}   className='w-96 p-2 mb-3 bg-secondary border-b-2 border-midnight outline-0' onChange={(e)=>setTitle(e.target.value)} required />
     <div className='mb-10'>
     <ReactQuill theme="snow" value={content}  style={style} modules={modules} onChange={setContent}  />
     </div>
     <div className='flex flex-wrap items-center'>
        <select className='px-1 h-8 m-2 border-2 border-midnight' value={priority} onChange={(e)=>setPrioriy(e.target.value)}>
          <option>Priority</option>
           {priorityData.map(p=><option value={p}>{p}</option>)}
        </select>
        <select className='px-1 m-2  h-8  border-2 border-midnight' value={label} onChange={(e)=>setLabel(e.target.value)}>
          <option>Label</option>
           {labelData.map(l=><option value={l} >{l}</option>)}
        </select>
        {
          isEdit ?   <button type="submit" className='ml-auto m-5 p-1 px-5 text-lg font-medium rounded bg-midnight text-default  h-10'>Save</button> :
          <button type="submit" className='ml-auto m-5 p-1 px-5 text-lg font-medium rounded bg-midnight text-default  h-10'>Create</button>
        }
      
     </div>
    </form>
   )
}

export default NoteEditor