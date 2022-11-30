import React from 'react';
import SideBar from './component/SideBar/SideBar';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Auth/Login';
import Notes from './pages/Notes/Notes';
import NoteEditor from './pages/Notes/NoteEditor';
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes';
import ReadNote from './pages/Notes/ReadNote';
import Trash from './pages/Trash/Trash';
import Search from './pages/Search/Search';
function App() {
  return (
  <BrowserRouter>
     <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
      // Define default options
         duration: 2000,
     }}
    />
     <SideBar />
     <Navbar />
     <Routes>
        <Route element={<ProtectedRoutes />}>
               <Route path="/notes"  element={<Notes />} />
               <Route path="/"  element={<Navigate to="/notes" />} />
               <Route path="/notes/new"  element={<NoteEditor />} />
               <Route path="/note/edit/:id"  element={<NoteEditor />} />
               <Route path="/note/read/:id" element={<ReadNote />} />
               <Route path="/search" element={<Search />} />
               <Route path="/trash"  element={<Trash />} />
         </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" />
     </Routes>
  </BrowserRouter>
  )
}

export default App