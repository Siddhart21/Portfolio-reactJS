import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FoodView from './components/FoodView';
import SchoolView from './components/SchoolView';
import Portview from './components/Portview';
import Error from './components/Error';
import Body from './Body';
import Myinfo from './components/Myinfo';

const appRout = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // This will render your main App component at the root route
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/Foodview",
        element: <FoodView />,  // This will render the FoodView component at the '/view' route
      },
      {
        path:"/Schoolview",
        element:<SchoolView/>
      },
      {
        path:"/portview",
        element:<Portview/>
      },
      {
        path:"/myinfo",
        element:<Myinfo/>
      }
    ],
    errorElement:<Error/>
  },
  {
    path:"/skills",
    element:<App/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRout} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
