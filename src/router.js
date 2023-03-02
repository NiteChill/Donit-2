import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Error from "./components/Error/Error";
import Account from "./pages/account/account";
import Daily from "./pages/daily/daily";
import Home from "./pages/home/home";
import MyTodo from "./pages/myTodo/myTodo";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/my-todo',
        element: <MyTodo />,
      },
      {
        path: '/daily',
        element: <Daily />,
      },
    ],
  },
]);