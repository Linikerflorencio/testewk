import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [usermail, setUsermail] = useState("");
    const [password, setpassword] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(event);
    };
    

  return (
    <div className='container'>
      <form>
        <h1>Faça seu cadastro</h1>
        <div className="input-name">
            <input type='String' placeholder='Nome' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-name">
            <input type='mail' placeholder='Email' onChange={(e) => setUsermail(e.target.value)} />
        </div>
        <div className="input-name">
            <input type='password' placeholder='Digite sua senha' onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <div className="input-name">
            <input type='password' placeholder='Confirme sua senha' />
        </div>
        <button onClick={() => {
            if (username === '') {
                alert("O preenchimento do nome é Obrigatório")
            }

            if (usermail === '') {
                setErro("O preenchimento do Email é Obrigatório")
            }

            if (password === '') {
                setErro("O preenchimento da senha é Obrigatório")
            }

            if (password == '(password)') {
                setErro("O preenchimento do nome é Obrigatório")
            }
        }}
        >Cadastrar</button>
      </form>
    </div>
  )
}

export default Login
