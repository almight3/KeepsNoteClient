import axios from "axios";
import KEEPNOTESAPI from "./Api.js";
import {FETCH_DELETED_NOTES,
    RESTORE_DELETED_NOTES,DELETE_NOTE_FROM_TRASH} from "../utils/constants.js";
import toast from 'react-hot-toast';

    
export const geAllDeletedNotes = async(dispatch,token)=>{
    try{
        const res = await axios.get(`${KEEPNOTESAPI}/api/v1/trash`,{
           headers: {
               "Content-Type": "application/json",
               "authorization":`${token}`
           },
       })
       dispatch({
         type:FETCH_DELETED_NOTES,
         payload:res.data
       })
       }
       catch(error){
           console.log(error)
    }   
}

export const restoreNoteFromTrash = async(data,dispatch,token)=>{
    try{    
        
        console.log(token)
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/trash/restore`,{
            data
        },{
            headers: {
                "Content-Type": "application/json",
                "authorization":`${token}`
            },
        })
        dispatch({
          type:RESTORE_DELETED_NOTES,
          payload:res.data
        })
        toast.success("Note Restored")
        }
        catch(error){
            console.log(error)
        }
}


export const deleteNoteFromTrash = async(id,dispatch,token)=>{
    try{    
        const res = await axios.delete(`${KEEPNOTESAPI}/api/v1/trash/${id}`,{
            headers: {
                "Content-Type": "application/json",
                "authorization":`${token}`
            },
        })
        dispatch({
          type:DELETE_NOTE_FROM_TRASH,
          payload:res.data
        })
        toast.success("Note removed from trash")
        }
        catch(error){
            console.log(error)
        }

 
}