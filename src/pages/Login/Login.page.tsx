import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../models"
import { ROLES } from "../../models/rol.model"
import { createUser, resetUser } from "../../redux/states/user"
import { getMorty } from "../../services"

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(resetUser())
        navigate(`/${PUBLIC_ROUTES.LOGIN}`, { replace: true });
    }, [])

    const login = async () => {
        try {
            const result = await getMorty()
            //! dispatch(createUser({...result, rol:ROLES.ADMIN})) modificando el rol a la fuerza
            dispatch(createUser(result))
            /**
             * 
             */
            navigate(`/${PRIVATE_ROUTES.PRIVATE}`, { replace: true });
        } catch (error) {

        }

    }
    return <>
        <div>Login Page</div>
        <button onClick={login}>LOGIN</button>
    </>

}

export default Login
