import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Welcome from './Welcome';
import './index.css';
import UserDashboard from './UserDashboard';

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/profile', element: <UserDashboard />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
