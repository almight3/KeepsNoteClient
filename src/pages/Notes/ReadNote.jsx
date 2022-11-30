import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import {noteDetails} from "../../services/Note";
import {useUserData} from "../../Context/Provider/UserDataProvider";
import parse from 'html-react-parser';

function ReadNote() {
  const {id} = useParams();
  const {userDataDispatch} =  useUserData();
  const [value,setValue] = useState('');
  
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    noteDetails(id,userDataDispatch,token).then(res=>{
      setValue(res)
    })
  },[id]);
  

  return (
    <div className='w-5   /12	bg-secondary mx-auto my-10 p-6 flex justify-center'>
        <div>
            <h1 className='text-3xl font-bold m-3'>{value.title}</h1>
            <div className='m-3'>{parse(value.hasOwnProperty("content") ? value.content : "")}</div>
            <div className='m-3'>
               <ul className='flex flex-wrap justify-start'>
                 <li>{value.priorty}</li>
                 <li>{value.label}</li>
                 <li className='ml-auto'>Date - {value.createdAt}</li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default ReadNote