import React from "react";

const Login = () =>{


    return(
            <>
        <header>
            <h1>Kenzie Hub</h1>
        </header>
        <div>
        <h4>Login</h4>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="senha" />
        <button >Entrar</button>
        <p>Ainda nao possui uma conta?</p>
        <button>Cadastre-se</button>
        </div>
        </>
    )
}

export default Login