import { useNavigate } from 'react-router-dom'
import { PUBLIC_ROUTES } from '../../models'
import { clearLocalStorage, LOCAL_STORAGE_ITEMS } from '../../utilities'

export default function Logout() {
    const navigate = useNavigate()

    const logout = () => {
        clearLocalStorage(LOCAL_STORAGE_ITEMS.USER)
        navigate(`/${PUBLIC_ROUTES.LOGIN}`, { replace: true });
    }
    return (
        <button onClick={logout}>Logout</button>
    )
}
