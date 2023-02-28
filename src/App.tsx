import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthGuard from './guard/auth.guard'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './models'
import { Private, Login } from './pages'
import { RoutesWithNotFound } from './utilities'

function App() {
  /**
   * al entrar de redirige la parte privada,  
   * !en caso de que el usuario no tenga información el GUARD lo redirige al LOGIN
   */
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />} />
          <Route path='*' element={<>NOT FOUND</>} />
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            {/* Esto seria el outlet */}
            <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  )
}

export default App
