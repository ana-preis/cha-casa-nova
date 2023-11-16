import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from '../src/pages/Homepage';
import List from '../src/pages/List';
import Hints from '../src/pages/Hints';
import Contact from '../src/pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/lista",
    element: <List/>,
  },
  {
    path: "/dicas",
    element: <Hints/>,
  },
  {
    path: "/contato",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
