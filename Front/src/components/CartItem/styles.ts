import styled from "styled-components";

export const CartItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
gap: 3rem;
>div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    img{
        width: 4rem ;
        height: 4rem ;
    }
}
>span{
    width: 4rem;
    font-weight: bold;
}

`

export const ItemDetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;

`
export const ActionContainer = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;


`
export const InputNumberContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: stretch;
align-content: center;
border-radius: 8px;
span{
    width: 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center ;

    line-height: 1.3;
    
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-900"]};
}
`


const BaseInputButton = styled.button`

padding: 0.75rem;
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: 1px solid transparent;
text-align: center;
line-height: 1.3;
background: ${props => props.theme["gray-400"]};
&:first-child{
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
}
&:last-child{
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
}
:hover{
    cursor: pointer;
    color: ${props => props.theme["purple-700"]};
}

`
export const InputNumberButton = styled(BaseInputButton)`
    color: ${props => props.theme["purple-500"]};
`

export const RemoveButton = styled(BaseInputButton)`
border-radius: 8px;


`
