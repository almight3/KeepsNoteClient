import React,{useContext, useReducer,useEffect} from 'react';
import { authReducer } from '../../Reducer/AuthReducer';
import { loadUser } from '../../services/Auth';
export const AuthContex = React.createContext();
function AuthProvider({children}) {
  
   const [state,dispatch] = useReducer(authReducer,{
    token:localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user:{},
    isAuthenticated:localStorage.getItem('token') ? true : false,
   }) 
   useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    if(token  ){
      loadUser(dispatch,token)
    }
    },[dispatch])

  return (
   <AuthContex.Provider value={{authState:state, authDispatch:dispatch}}>
       {children}
   </AuthContex.Provider>
  )
}

const useAuth = ()=>useContext(AuthContex)

export { AuthProvider,useAuth };