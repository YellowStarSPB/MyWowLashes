import React from "react"



function Login() {
    
    return (
        <div className="loginFormWrapper">
            <form >
                <h1>Login </h1>
                <input type="text" placeholder="Login" />
                <input type="text" placeholder="Password" />
                <button>Войти</button>
            </form>
        </div>
    )
}

export default Login