import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routers';



const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App;