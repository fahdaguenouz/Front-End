// DynamicRouter.jsx

import React,{ Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "../Layouts/GuestLayouts/GuestLayout";
import UserLayout from "../Layouts/UsersLayouts/UserLayout";
// import AboutUs from "../Pages/AboutUs";

import LoginLayouts from "../Layouts/GuestLayouts/LoginLayouts";
import Login from "../Pages/Login/Login";
import AuthHome from './../Pages/AuthPages/AuthHome/AuthHome';
import Contact from './../Pages/GuestPages/contact/Contact';
import Blog from './../Pages/GuestPages/blog/Blog';
import Pricing from './../Pages/GuestPages/pricing/Pricing';
import Team from './../Pages/GuestPages/team/Team';
import CourseHome from './../Pages/GuestPages/allcourses/CourseHome';
import About from './../Pages/GuestPages/about/About';
import Home from './../Pages/GuestPages/home/Home';
import AuthAdmin from "@/Pages/AuthPages/AuthHome/AuthAdmin";


export const router = createBrowserRouter([
    {
        element: <GuestLayout/>,
        children: [
          {
            path: '/',
            element:<Home />
          },
          {
            path: '/about',
            element:<About />
          },
          {
            path: '/tutorials',
            element:<CourseHome />
          },
          {
            path: '/team',
            element:<Team />
          },
          {
            path: '/pricing',
            element:<Pricing />
          },
          {
            path: '/blog',
            element:<Blog />
          },
          {
            path: '/contact',
            element:<Contact />
          },
        ]
      },
  {
    element: <LoginLayouts/>,
    children: [
      {
        path: '/login',
        element:  <Login />
      },
    ]
  }, 
  {
    element: <UserLayout/>,
    children: [
      {
        path: '/user',
        element:  <AuthAdmin />
      },
      {
        path: '/',
        element:<Home />
      },
    ]
  },
  
]);

export default router;
