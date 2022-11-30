import React,{useContext, useReducer} from 'react';
import {userDataReducer} from "../../Reducer/userDataReducer" 
export const UserDataContext = React.createContext();
function UserDataProvider({children}) {
 const [state,dispatch] = useReducer(userDataReducer,{
  notes:[],
  notesDetail:'',
  trash:[],
 }) 
  return (
  <UserDataContext.Provider value={{userDataState:state, userDataDispatch:dispatch}}>
         {children}
  </UserDataContext.Provider>
  )
}
const useUserData = ()=>useContext(UserDataContext);
export  {UserDataProvider,useUserData}