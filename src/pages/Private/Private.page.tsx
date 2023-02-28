import React from 'react'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PRIVATE_ROUTES } from '../../models'
import { RoutesWithNotFound } from '../../utilities'
import { Dashboard } from './Dashboard'
import { Home } from './Home'

export const Private = () => {
  return <RoutesWithNotFound>
    <Route path='/' element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />} />
    <Route path={PRIVATE_ROUTES.DASHBOARD} element={<Dashboard />} />
    <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
  </RoutesWithNotFound>
}
