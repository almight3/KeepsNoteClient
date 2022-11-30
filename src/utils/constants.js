//User Auth

const LOGIN_USER = "LOGIN";
const SIGNUP_USER = "SIGNUP";
const LOAD_USER = "LOAD_USER";
const LOGOUT_USER = "LOGOUT";
// User Notes
const FETCH_ALL_NOTES = "ALL_NOTES";
const FETCH_SINGLE_NOTE = "MOTE_DETAILS";
const CREATE_NOTE = "NEW_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE"
const PIN_NOTE="PINNED_NOTE"

// trash notes
const FETCH_DELETED_NOTES = "ALL_TRASHED_NOTE"
const RESTORE_DELETED_NOTES = "RESTORE_NOTES"
const DELETE_NOTE_FROM_TRASH = "DELETE_NOTE_TRASH"



export {
    LOGIN_USER,
    SIGNUP_USER,
    LOAD_USER,
    LOGOUT_USER,
    FETCH_ALL_NOTES, 
    FETCH_SINGLE_NOTE, 
    CREATE_NOTE,  
    UPDATE_NOTE, 
    DELETE_NOTE ,
    PIN_NOTE,
    FETCH_DELETED_NOTES,
    RESTORE_DELETED_NOTES,
    DELETE_NOTE_FROM_TRASH
}
