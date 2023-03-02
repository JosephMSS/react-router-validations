import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Logout } from './components/Logout'
import AuthGuard from './guard/auth.guard'
import RoleGuard from './guard/role.guard'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './models'
import { ROLES } from './models/rol.model'
import store from './redux/store'
import { RoutesWithNotFound } from './utilities'
/**
 * Tiene que funcionar con un export default
 */
const Login = lazy(() => import('./pages/Login/Login.page'))
const Private = lazy(() => import('./pages/Private/Private.page'))
function App() {
  /**
   * al entrar de redirige la parte privada,  
   * !en caso de que el usuario no tenga información el GUARD lo redirige al LOGIN
   */
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />} />
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
              <Route element={<AuthGuard isPrivate={true} />}>
                {/* Esto seria el outlet */}
                <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard rol={ROLES.ADMIN} />}>
                {/* Esto seria el outlet */}
                <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
