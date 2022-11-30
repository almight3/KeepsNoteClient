import axios from "axios";
import KEEPNOTESAPI from "./Api.js";
import {
    FETCH_ALL_NOTES, 
    FETCH_SINGLE_NOTE, 
    CREATE_NOTE,  
    UPDATE_NOTE, 
    DELETE_NOTE,
    PIN_NOTE
} 
    from "../utils/constants.js";
import toast from 'react-hot-toast';

export  const getAllNotes =async(dispatch,token)=>{
    try{
     const res = await axios.get(`${KEEPNOTESAPI}/api/v1/notes`,{
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:FETCH_ALL_NOTES,
      payload:res.data
    })
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const createNotes =async(data,dispatch,token)=>{
    try{
     const {title,content,label,priority} = data;
     const res = await axios.post(`${KEEPNOTESAPI}/api/v1/new/note`,{
       title,
       content,
       label,
       priority
     },
     {
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:CREATE_NOTE,
      payload:res.data
    })
    toast.success("new note created ")
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const noteDetails =async(id,dispatch,token)=>{
    try{
     const res = await axios.get(`${KEEPNOTESAPI}/api/v1/notes/${id}`,
     {
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:FETCH_SINGLE_NOTE,
      payload:res.data
    })

    return res.data.noteDetails[0]
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const updateNote =async(id,data,dispatch,token)=>{
    try{
        const {title,content,label,priority} = data;  
     const res = await axios.put(`${KEEPNOTESAPI}/api/v1/notes/${id}`,{
        title,
        content,
        label,
        priority
     },
     {
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:UPDATE_NOTE,
      payload:res.data
    })
    toast.success("change in note saved")
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}


export const deleteNote =async(id,dispatch,token)=>{
    try{
     const res = await axios.delete(`${KEEPNOTESAPI}/api/v1/notes/${id}`,
     {
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:DELETE_NOTE,
      payload:res.data
    })
    toast.success("note deleted")
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const pinNote =async(id,flag,dispatch,token)=>{
    try{
        console.log(token)
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/notes/pinned`,{
            id,
            flag
        },
        {
        headers: {
            "Content-Type": "application/json",
            "authorization":`${token}`
        },
    })
    dispatch({
      type:PIN_NOTE,
      payload:res.data
    })
    flag ? toast.success("note pinned")    :toast.success("note unpinned")
    }
    catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }
}