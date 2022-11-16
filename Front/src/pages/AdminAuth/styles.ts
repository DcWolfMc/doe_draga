import styled from "styled-components";

export const Container = styled.main`

flex: 1;
height: 100%;
padding: 10rem 10rem 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:8rem;

`
export const AuthWrapper = styled.div`
width: 40rem;
padding: 5rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
background-color: ${props => props.theme["gray-300"]};

border: 2dpx solid ${props => props.theme["yellow-300"]};
border-radius: 8px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

h1{
    text-transform: uppercase;
}

`
export const AuthForm = styled.form`
    flex:1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap:1.5rem;
`

const BaseInput = styled.input`
    display: flex;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme["gray-600"]};
    border-radius: 8px;
    line-height: 1.3;
    color:${props => props.theme["gray-800"]};
    background: ${props => props.theme["gray-500"]};
    :hover{
        cursor: pointer;
    }
    :disabled{
        opacity:50%;
        cursor: not-allowed
    }
    :focus{
        background: ${props => props.theme["gray-200"]};
    }
    font-weight: bold; 
    text-align: center;

`



export const TextInput = styled(BaseInput)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PasswordInput = styled(BaseInput)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkButton = styled.button`
min-width: 12rem;
flex:1;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-content: center;
gap: 0.5rem;
padding: 1rem;
border: 1px solid transparent;
border-radius: 8px;
text-transform: uppercase;

color: ${props => props.theme["gray-100"]};
background: ${props => props.theme["yellow-500"]};

:hover{
    cursor: pointer;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
}
`
export const ErrorText = styled.span`
    font-weight: bold;
    color: ${props=>props.theme["red-500"]};
`