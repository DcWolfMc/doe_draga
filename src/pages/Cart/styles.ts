import styled from "styled-components";
export const CartContainer = styled.main`
padding: 10rem 10rem;
flex: 1;
display: flex;
flex-direction: column;
gap: 3.5rem;

.requiredField{
    border: 1px solid ${props=>props.theme["red-500"]};
}
hr{
    width: 100%;
    border: 0px solid transparent;
    box-shadow: none;
    border-bottom: 2px solid ${props=>props.theme["gray-400"]};
    
}

`
export const CartForm = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
gap: 2rem;
>div{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap:1rem;
}
    h2{
        font-family: 'Baloo 2', cursive;
        line-height: 1.3;
        font-size: 1.125rem;
    }


`
export const FormSectionTitle = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;
div{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3{
        font-size: 1rem;
        line-height: 1.3;
        font-weight: normal;
    }
    p{
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: normal;
    }
}

`

export const FormInputSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 1rem;
`
const BaseInput = styled.input`
    display: flex;
    padding: 0.75rem;
    border: 1px solid transparent;
    border-radius: 8px;
    line-height: 1.3;
    color:${props => props.theme["gray-800"]};
    background: ${props => props.theme["gray-400"]};
`
export const InputTypeNumber = styled(BaseInput)`
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }

`
export const InputTypeText = styled(BaseInput)`
`
export const InputTypeTextFlex = styled(BaseInput)`
width: 100%;
flex: 1;
`
export const InputTypeTextSmall = styled(BaseInput)`
width: 4rem;
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    label{
        width: 11.5rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;

        font-size: 0.75rem;
        font-family: 'Roboto' sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        
        color:${props => props.theme["gray-800"]};
        background: ${props => props.theme["gray-400"]};
        border: 1px solid transparent;
        border-radius: 8px;

        transition: ease-in-out 0.2s;
        :hover{
            background: ${props => props.theme['gray-500']};
            cursor: pointer;
        }
        
    }
    .active , .active:hover{
            background: ${props => props.theme['purple-300']};
            border: 1px solid  ${props => props.theme["purple-500"]};
            
        }
`
const BaseBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2rem;
gap: 1.5rem;

background: ${props => props.theme["gray-300"]};

`

export const CartItemBox = styled(BaseBox)`
border-radius: 6px 44px;
>button{
    width: 100%;
    flex:1;
    padding: 0.75rem 0.5rem;
    border-radius: 8px;
    border: 1px solid transparent;

    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.3;

    background-color: ${props=>props.theme["yellow-500"]};
    color: ${props=>props.theme.white};
    :hover:not(:disabled){
        background-color: ${props=>props.theme["yellow-700"]};
        cursor: pointer;
    }
    :disabled{
        cursor: not-allowed;
        opacity: 50%;
    }
}
`
export const FormSection = styled(BaseBox)`
border-radius: 8px;

`
export const CartInfo = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:0.75rem;
font-size: 0,875rem;
line-height: 1.3;
font-weight: normal;
div{
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    strong{
        font-size: 1.25rem;
    }

}
`