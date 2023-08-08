import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Flashcard from './pages/Flashcard.jsx';
import Quizzes from './pages/Quizzes.jsx'
import Podcasts from './pages/Podcasts.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

// create browser router to handle page redirection
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/flashcards',
        element: <Flashcard />
      }, {
        path: '/quizzes',
        element: <Quizzes />
      }, {
        path: '/podcasts',
        element: <Podcasts />
      }
    ]
  },
]);

// creates root element of the page with the router provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);