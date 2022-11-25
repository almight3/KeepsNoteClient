import axios from axios;
import {
    LOGIN_USER,
    SIGNUP_USER,
    LOAD_USER,
} from "../utils/constants.js";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

import KEEPNOTESAPI from "./Api.js"

// register user
export const signupUser = async(data,dispatch)=>{
  
    try{
        const navigate = useNavigate();
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/register`,{
            data
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
       toast.error(error.response.data.message)
    }
};

// login user
export const loginUser = async(data,dispatch)=>{
  
    try{
        const navigate = useNavigate();
        const res = await axios.post(`${KEEPNOTESAPI}/api/v1/login`,{
            data
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }); 
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

// logout user
