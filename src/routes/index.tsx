import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from './publicRoutes'

const Router = React.memo(() => {

  const routes = publicRoutes
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  )
})

export default Router
