import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './layout/Layout.jsx';
import Home from './pages/home.jsx';
import Timeline from './pages/Timeline.jsx';

import Stats from './pages/Stats.jsx';
import FriendDetails from './pages/FriendDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import TimelineProvider from './component/TimelineContext.jsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>
    ,
    children:[
      {
     index:true,
     Component:Home
      },
      {
        path:"timeline",
        Component:Timeline,
      },
      {
        path:"stats",
        Component:Stats
      },
      {
        path:"friend/:id",
        Component:FriendDetails
      },
      {  
          path: "*",
         Component:ErrorPage,
      }
      
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right"/>
    </TimelineProvider>
    
  
  </StrictMode>,
)
