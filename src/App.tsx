import React from 'react';
import './App.css';
import Table from './components/employer/table';
import Form from './components/employer/EditForm';
import Login from './components/auth/LogIn';
import Register from './components/auth/Signup';
import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';
import Profile from './components/Profile';
import BasicCard from './components/employer/Card';
import UserDetails from './components/recruiter/userDetails';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './components/recruiter/dashboard';
import RecruiterCard from './components/recruiter/RCard';
import AddForm from './components/employer/addForm';

const App = () => {
  const userData = useSelector((state: any) => state?.loginUser?.user);
  // console.log('app', userData);

  // Define the base routes
  const baseRoutes = [
    { path: '/', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/user-profile', element: <Profile /> },
    // { path: '/emp-dashboard', element: <BasicCard /> },
   
    // { path: '/listView', element: <Table /> },
  
  ];

  // Conditionally include the dashboard route based on the user's role
  if (userData?.user?.role === "recruiter") {
    baseRoutes.push(
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/grid', element: <RecruiterCard /> },
      { path: `/user/:id`, element: <UserDetails /> },
    );
  } else if(userData?.user?.role === 'employee'){
    baseRoutes.push( { path: '/grid', element: <BasicCard /> },
    { path: '/add-portfolio', element: <AddForm/> }
    );
  }

  const routes = useRoutes(baseRoutes);

  return routes;
};

export default App;
