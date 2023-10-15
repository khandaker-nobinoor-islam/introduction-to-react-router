import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenets/Home/Home.jsx';
import About from './componenets/About/About.jsx';
import Contact from './componenets/Contact/Contact.jsx';
import Users from './componenets/Users/Users.jsx';
import UserDetails from './componenets/UserDetails/UserDetails.jsx';
import Posts from './componenets/Posts/Posts.jsx';
import PostDetails from './componenets/PostDetails/PostDetails.jsx';
import ErroPage from './componenets/ErroPage/ErroPage.jsx';
// import Header from './componenets/Header/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]

    // children: [
    //   {
    //     path: '/about',
    //     element: <About></About>
    //   },
    //   {
    //     path: '/contact',
    //     element: <Contact></Contact>
    //   }
    // ]
  },
  // {
  //   path: '/header',
  //   element: <Header></Header>
  // },
  // {
  //   path: '/contact',
  //   element: <div>Call me right now !!</div>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
