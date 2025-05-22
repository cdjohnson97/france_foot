import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inscription from './components/Inscription.jsx';
import Connexion from './components/Connexion.jsx'
import Articles from './components/Articles.jsx';
import Effectif from './components/Effectif.jsx';
import Player from './components/Player.jsx';
import CreateArticle from './components/CreateArticle.jsx';
import CreateAdmin from './components/CreateAdmin.jsx';






const router = createBrowserRouter ([

  {
    path: '/',
    element: <App />
  },

  {
   path: '/inscription',
   element: <Inscription />,
  },
  
  {
    path:'/connexion',
    element: <Connexion />
  },

  {
    path: '/Articles',
    element: <Articles />
  },

  {
    path: '/effectif',
    element: <Effectif />
  },

  {
    path: '/player/:slug',
    element: <Player />
  },

  {
    path: '/createArticle/',
    element: <CreateArticle />
  }, 

  {
    path: '/createAdmin/',
    element: <CreateAdmin />
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
