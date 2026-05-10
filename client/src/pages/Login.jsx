import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { fbAuth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigateTo = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await signInWithEmailAndPassword(fbAuth, email, password);
            navigateTo("/dashboard");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="container">
                <h1>Market View</h1>

                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={login}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Login