import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PUBLIC_ROUTES } from '../../models'
import { resetUser } from '../../redux/states/user'
import { clearLocalStorage, LOCAL_STORAGE_ITEMS } from '../../utilities'

export default function Logout() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const logout = () => {
        dispatch(resetUser())
        navigate(`/${PUBLIC_ROUTES.LOGIN}`, { replace: true });
    }
    return (
        <button onClick={logout}>Logout</button>
    )
}
