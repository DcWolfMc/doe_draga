import styled from "styled-components";

export const ProductItemContainer = styled.div`
width: 16rem;

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;

border-radius: 6px 36px 6px 36px;
background: ${props => props.theme["gray-200"]};

@keyframes logo-spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
img{
    position: relative;
    top: -20px;
    animation: logo-spin infinite 5s linear;
    animation-play-state: paused;
}
strong{
    margin: 0.5rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
}
p{
    color: ${props => props.theme["gray-600"]};
    font-size: 0.875rem;
    text-align: center;
    margin: 0.5rem 1.25rem
}

:hover{
    img{
        animation-play-state: running;
    }
}
 
`
export const Tags = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
gap: 0.25rem;
span{

    font-size: 0.625rem;
    font-weight: bold;
    font-variant: small-caps;
    text-align: center;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    border-radius: 100px

}
`

export const OrderForm = styled.form`
padding: 1.25rem 1.5rem ;
display: flex;
flex-direction: row;
align-items:center;
gap: 0.5rem;
span{
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: normal;
}
b{
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive ;
    font-weight: 800;
    line-height: 1.3;
}

button[type="submit"]{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    outline: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    color: ${props => props.theme["gray-300"]};
    background: ${props => props.theme["purple-700"]};
    :hover{
    cursor: pointer;
    background: ${props => props.theme["purple-500"]};
}
}

`
export const InputNumberContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: stretch;
align-content: center;
border-radius: 8px;
overflow: hidden;
span{
    outline: transparent;
    border: 1px solid transparent;
    width: 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center ;
    
    line-height: 1.3;
    
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-900"]};
    
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    
    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }
    
}
`
export const InputNumberButton = styled.button`
padding: 0.75rem;
 display: flex;
 justify-content: center;
 align-items: center;
 outline: none;
 border: 1px solid transparent;
 text-align: center;
 line-height: 1.3;
 background: ${props => props.theme["gray-400"]};
 color: ${props => props.theme["purple-500"]};
:hover:not(:disabled){
    cursor: pointer;
    color: ${props => props.theme["purple-700"]};
}
:disabled{
    cursor: not-allowed;
    opacity: 50%;
}

`
