import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password);

            if(isLogged){
                navigate('/');
            }else{
                alert("DEU ERRO!");
            }
        }
    }


    return(
    <div>
        <h2>Página Fechada</h2>

        <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Digite seu e-mail" 
        /><br />
        <input
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Digite sua senha" 
        /><br />

        <button onClick={handleLogin}>Logar</button>
    </div>
)}