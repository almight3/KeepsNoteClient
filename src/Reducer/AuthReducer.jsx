import {
    LOGIN_USER,
    SIGNUP_USER,
    LOAD_USER,
    LOGOUT_USER
} from "../utils/constants.js"


export const authReducer = (state,action)=>{
  switch(action.type){
    case SIGNUP_USER:
    case LOGIN_USER:{
       return{
            ...state,
            user:action.payload.user,
            token:action.payload.token,
            isAuthenticated:true
        }
    };
    case LOAD_USER:{
        return{
            ...state,
            user:action.payload.user,
        }
    }
    case LOGOUT_USER:{
        localStorage.removeItem('token')
        return {
            ...state,
            user:{},
            token:null,
            isAuthenticated:false
        }
    }
    default:
        return state;  
  }
};

