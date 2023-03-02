import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PRIVATE_ROUTES } from "../../models"
import { createUser } from "../../redux/states/user"
import { getMorty } from "../../services"

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = async () => {
        try {
            const result = await getMorty()
            dispatch(createUser(result))
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
