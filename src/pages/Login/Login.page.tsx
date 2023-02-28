import { useDispatch } from "react-redux"
import { createUser } from "../../redux/states/user"
import { getMorty } from "../../services"

export const Login = () => {
    const dispatch = useDispatch()
    const login = async () => {
        try {
            const result = await getMorty()
            dispatch(createUser(result))
        } catch (error) {

        }

    }
    return <>
        <div>Login Page</div>
        <button onClick={login}>LOGIN</button>
    </>

}
