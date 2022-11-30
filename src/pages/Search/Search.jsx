import {useState,useEffect} from 'react'
import { useUserData } from '../../Context/Provider/UserDataProvider';
import { useAuth } from '../../Context/Provider/AuthProvider';
import NoteCard from "../../component/NoteCard/NoteCard"
import {getAllNotes} from "../../services/Note.js";
function Search() {
  const {userDataState:{notes},userDataDispatch} = useUserData()
  const {authState:{token}} = useAuth();
  
  useEffect(()=>{
   getAllNotes(userDataDispatch,token)
  },[userDataDispatch,token])

  const [search,setSearch] = useState(' ');
  const searchedNotes = search==="" ? [] : notes.filter(n=>n.title.split(" ").join("").toLowerCase().includes(search.toLowerCase()));
  console.log(searchedNotes)
  return (
    <div className='flex flex-col items-center w-2/4	 	mx-auto'>
        <div className='flex flex-col m-6 w-3/5	'>
           <label className='m-2'>Search </label>
           <input placeholder='Search by Note Title ' className=' p-2 border border-midnight outline-0' onChange={(e)=>setSearch(e.target.value)}  />
        </div>
        <div className='flex flex-wrap justify-around m-6 w-full	'	>
             {
              search && searchedNotes.length === 0 ? <p className='text-2xl font-semibold'>No Note found for "{search}" </p>   :searchedNotes.map(note=><NoteCard note={note} />)
             }
        </div>
    </div>
  )
}

export default Search