import { Navigate } from 'react-router-dom'

import App from '~/components/app'

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to={'/'} replace />,
  },
]
