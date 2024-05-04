import "./App.css"

import React from 'react';


import { router } from './Router/index.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider.jsx';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}

export default App;
