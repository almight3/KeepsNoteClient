import axios from "axios";
import {
    LOGIN_USER,
    SIGNUP_USER,
    LOAD_USER,
} from "../utils/constants.js";
import toast from 'react-hot-toast';
import KEEPNOTESAPI from "./Api.js"

// register user
export const signupUser = async(formData,dispatch,navigate)=>{
  
    try{
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/register`,{
            formData
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }); 
        dispatch({
            type:SIGNUP_USER,
            payload:res.data
        });    
        toast.success("user register successfully")
        navigate("/notes")
    }
    catch(error){
        console.log(error)
       toast.error(error.response.data.message)
    }
};

// login user
export const loginUser = async(formData,dispatch,navigate)=>{
    try{
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/login`,{
            formData
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }); 

        localStorage.setItem("token",JSON.stringify(res.data.token)) 
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        });   
        toast.success("user loggedin successfully")       
        navigate("/notes")
    }
    catch(error){
       toast.error(error.response.data.message)
    }
};

// load user


export const loadUser = async(dispatch,token)=>{
    try{
        const res = await axios.get(`${KEEPNOTESAPI}/api/v1/me`,
        {
            headers: {
                "Content-Type": "application/json",
                "authorization":`${token}`

            },
        }); 
        dispatch({
            type:LOAD_USER,
            payload:res.data
        });    
    }
    catch(error){
       toast.error(error.response.data.message)
    }
};

