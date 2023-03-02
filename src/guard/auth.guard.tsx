import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PRIVATE_ROUTES, PUBLIC_ROUTES, UserInfo } from "../models"
import { AppStore } from "../redux/store"
interface Props {
    isPrivate: boolean
}
const PrivateValidation = <Outlet />
const PublicValidation = <Navigate replace to={PRIVATE_ROUTES.PRIVATE} />
export const AuthGuard = ({ isPrivate }: Props) => {
    const userState = useSelector((store: AppStore) => (store.user))
    /**
     * si tenemos datos retornamos el outlet
     * *Va a ejecutar todas las rutas que estén en su interior 
     */
    if (!userState.name) {
        return <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
    }
    if (!isPrivate) {
        return PublicValidation
    }
    return PrivateValidation
}
export default AuthGuard

