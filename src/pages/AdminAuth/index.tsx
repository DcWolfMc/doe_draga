import React ,{ FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthForm, AuthWrapper, Container, LinkButton, PasswordInput, TextInput, ErrorText } from "./styles"
import { CircularProgress } from '@mui/material'

export const AdminAuth = ()=>{

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);
    const [loading,  setLoading] = useState<boolean>(false)
    const navigation = useNavigate()
    
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        setLoading(true)
        setShowError(false)
        setError('')
        if(username == "adAdmin" && password == "adAdmin"){
            localStorage.setItem("@doeDraga_Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2VkYzZjNjNjYTljOTg4ODhiODkwYyIsImlhdCI6MTY2ODA4NzI5NywiZXhwIjoxNjY4MDg4MTk3fQ.VFStA89Wb_Lz_NnkL0T7UBzruWg-135tq-2zkT8rwo0")
            navigation("/adAdmin/list")
        }else{
            setShowError(true)
            setError('Credenciais erradas')
            setLoading(false)
        }
    }

    return(
    <Container>

        <AuthWrapper>
            <h1>admin authentication</h1>
            <AuthForm onSubmit={(e)=>handleSubmit(e)}>
                <TextInput value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="USERNAME" type="text"  />
                <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="PASSWORD" type="password"  />
                <LinkButton type="submit">{loading?<CircularProgress color="inherit" />:"Entrar"}</LinkButton>
                {showError&&<ErrorText>{error}</ErrorText>}
            </AuthForm>
        </AuthWrapper>

    </Container>
    )
}