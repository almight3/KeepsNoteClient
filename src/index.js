import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/Provider/AuthProvider';
import { UserDataProvider } from './Context/Provider/UserDataProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider>
     <UserDataProvider>
     <App />
     </UserDataProvider>
    </AuthProvider>
  </React.StrictMode>
);

