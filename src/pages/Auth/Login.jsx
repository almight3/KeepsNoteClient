import React,{useState} from 'react'
import { useAuth } from '../../Context/Provider/AuthProvider'
import {loginUser} from "../../services/Auth";
import {useNavigate} from "react-router-dom";
import { Ring } from '@uiball/loaders'



function Login() {
  const navigate = useNavigate();
  const {authDispatch} = useAuth();
  const [loading,setLoading] = useState(false);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  const changeHandler = (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    loginUser(formData,authDispatch,navigate);
    
  }
  const guestLogin =()=>{
    setFormData({email:"test@mail.com",password:"12345678"})
  }

  return (
    <>
    {
     loading ?
      <div>
        <Ring 
            size={40}
            lineWeight={5}
            speed={2} 
            color="black" 
        />
      </div>
      :
      <form className='w-1/5 h-96 mx-auto m-40	bg-secondary text-midnight flex flex-col justify-center items-center' onSubmit={(e)=>handleSubmit(e)}>
          <lable htmlFor="email" className="w-4/6">Email</lable>
          <input type="email" value={formData.email} name="email" className="w-4/6	p-3 mb-3 m-1 bg-input" onChange={(e)=>changeHandler(e)} required />
          <lable htmlFor="password" className="w-4/6">Password</lable>
          <input type="password"  value={formData.password} name="password" className='w-4/6	p-3 mb-3 m-1 bg-input' onChange={(e)=>changeHandler(e)} required />
          <p className='text-sm mb-2 w-4/6 flex justify-end underline underline-offset-2 cursor-pointer	' onClick={guestLogin}>Guest login</p>
          <button type="submit" className='p-2.5 m-2 w-36 bg-midnight text-default rounded'>Login</button>
      </form>
    }
      
    </>
  )
}

export default Login