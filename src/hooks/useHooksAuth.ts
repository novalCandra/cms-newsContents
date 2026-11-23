import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHooksAuthLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const request = await fetch(`http://localhost:3000/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const response = await request.json();
            setEmail(response.data.email)
            sessionStorage.setItem("token", response.data.token)
            // document.cookie = `token=${response.data.token}; expriries` + new Date(9999, 0,1).toUTCString()
            navigate("/article")
        } catch (error) {
            return console.log(error)
        }
    }

    return { email, setEmail, password, setPassword, navigate, handleSubmit }
}


export const useHooksAuthRegister = () => {
    const [fullname, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const request = await fetch(`http://localhost:3000/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    password
                })
            })
            const response = await request.json();
            setFullName(response.data.fullname)
            setEmail(response.data.email)
            setPassword(response.data.email)
            navigate("/auth/login")
        } catch (error) {
            return console.log(error)
        }
    }

    return { fullname, setFullName, email, setEmail, password, setPassword, handleSubmit }
}