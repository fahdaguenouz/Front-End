// DynamicRouter.jsx

import React,{ Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "../Layouts/GuestLayouts/GuestLayout";
import UserLayout from "../Layouts/UsersLayouts/UserLayout";
// import AboutUs from "../Pages/AboutUs";

import LoginLayouts from "../Layouts/GuestLayouts/LoginLayouts";
import Home from './../Pages/home/Home';
import Login from "../Pages/Login/Login";
import About from './../Pages/about/About';
import CourseHome from './../Pages/allcourses/CourseHome';
import Team from './../Pages/team/Team';
import Pricing from './../Pages/pricing/Pricing';
import Blog from './../Pages/blog/Blog';
import Contact from './../Pages/contact/Contact';

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
  
]);

export default router;
