import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hook/useAuth";


function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { admin, setAdmin, singIn } = useAuth()

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        singIn(() => navigate(fromPage, { replace: true }))
    }

    return (
        <div className="loginFormWrapper">
            <form >
                <h1>Login </h1>
                <input
                    onChange={(e) => setAdmin({ ...admin, login: e.target.value })}
                    value={admin.login}
                    type="text"
                    placeholder="Login" />
                <input
                    onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
                    value={admin.password}
                    type="text" placeholder="Password" />
                <button onClick={(e) => handleSubmit(e)}>Войти</button>
            </form>
        </div>
    )
}

export default Login