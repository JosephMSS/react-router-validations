import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { role } from '.'
import { PRIVATE_ROUTES } from '../models'
import { ROLES } from '../models/rol.model'
import { AppStore } from '../redux/store'
interface Props {
    rol: ROLES
}
function RoleGuard({ rol }: Props) {
    const userState = useSelector((store: AppStore) => store.user)
    const isValidRol = userState.rol === rol
    if (!isValidRol) {
        return <Navigate replace to={PRIVATE_ROUTES.PRIVATE} />
    }
    return <Outlet />
}

export default RoleGuard