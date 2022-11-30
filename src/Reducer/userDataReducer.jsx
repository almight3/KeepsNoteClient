import {
    FETCH_ALL_NOTES, 
    FETCH_SINGLE_NOTE, 
    CREATE_NOTE,  
    UPDATE_NOTE, 
    DELETE_NOTE,
    FETCH_DELETED_NOTES,
    RESTORE_DELETED_NOTES,
    DELETE_NOTE_FROM_TRASH ,
    PIN_NOTE
    } 
    from "../utils/constants.js";

export const userDataReducer  =(state,action)=>{
    switch(action.type){
        case FETCH_ALL_NOTES:{
         return {...state,notes:action.payload.notes}
        };
        case FETCH_SINGLE_NOTE:{
        return {...state,notesDetail:action.payload.noteDetails[0]}
        }
        case CREATE_NOTE:{
          return {...state,notes:action.payload.notes}
        }
        case UPDATE_NOTE:{
            return {...state,notes:action.payload.notes}  
        }
        case DELETE_NOTE:{
            return {...state,notes:action.payload.notes}  
        }
        case FETCH_DELETED_NOTES:{
            return {...state,trash:action.payload.trashNotes}
        }
        case RESTORE_DELETED_NOTES :{
            return {...state,notes:action.payload.notes,trash:action.payload.trashNotes} 
        }
        case DELETE_NOTE_FROM_TRASH:{
            return {...state,trash:action.payload.trashNotes}
        }
        case PIN_NOTE:{
            return {...state,notes:action.payload.notes}  
        }
        default:
            return 
    }   
};  