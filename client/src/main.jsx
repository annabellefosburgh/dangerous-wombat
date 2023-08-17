import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "picnic/picnic.min.css";
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Flashcard from './pages/Flashcard.jsx';
import Quizzes from './pages/Quizzes.jsx'
import Podcasts from './pages/Podcasts.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Quiz1 from './components/Quizzes/quiz1.jsx'
import Quiz2 from './components/Quizzes/quiz2.jsx'
import Quiz3 from './components/Quizzes/quiz3.jsx'
import Quiz4 from './components/Quizzes/quiz4.jsx'

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
      },  {
        path: '/quiz1',
        element: <Quiz1 />
      },  {
        path: '/quiz2',
        element: <Quiz2 />
      },  {
        path: '/quiz3',
        element: <Quiz3 />
      },  {
        path: '/quiz4',
        element: <Quiz4 />
      },   {
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