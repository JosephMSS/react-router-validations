import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PUBLIC_ROUTES, UserInfo } from "../models"
import { AppStore } from "../redux/store"

export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => (store.user))
    /**
     * si tenemos datos retornamos el outlet
     * *Va a ejecutar todas las rutas que estén en su interior 
     */
    return userState.name ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
}
export default AuthGuard

