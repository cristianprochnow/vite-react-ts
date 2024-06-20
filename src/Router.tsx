import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { NotFound } from './screens/NotFound.tsx';
import { Home } from './screens/Home.tsx';
import { Article } from './screens/Article.tsx';
import { Profile } from './screens/Profile.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Home />,
    children: [
      {
        index: true,
        element: <Article />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]);

export function Router() {
  return <RouterProvider router={routes}/>;
}
