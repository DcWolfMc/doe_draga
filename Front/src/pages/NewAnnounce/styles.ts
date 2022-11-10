import styled from "styled-components";


export const Container = styled.main`
flex:1;
width: 100%;
padding: 10% 10rem 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:8rem;
`

export const FormContainer = styled.form`
flex:1;
width: 100%;
padding: 1.5rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 2rem;

`
export const AdFormWrapper = styled.div`
flex:1;

width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1.5rem;
`
export const AdFormHeaderWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`

export const AdContactInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1.5rem;

div{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:1rem;

    
    p{
        font-size: 1rem;
        max-width: 20rem;
        line-height: 1.3;
        color: ${props => props.theme["gray-600"]}
    }
}

`
export const AdDateInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1.5rem;

div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:1rem;
}
`
export const CheckBoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap:1rem;
`

export const AdFormContentWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
export const AdFormContentFields = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap:1.5rem;
`
export const AdImageWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap:2.5rem

}
`
export const InputFile = styled.input.attrs({ type: 'file' })`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
button{
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
}

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

export const AdTitleAndHistory = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap:2.5rem;

`

export const DonationFormWrapper = styled.div`
width:30rem;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1.5rem;
div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:1rem;
}
`
export const TitleText = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${props => props.theme["gray-900"]};

`

const BaseInput = styled.input`
    display: flex;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme["gray-500"]};
    border-radius: 8px;
    line-height: 1.3;
    color:${props => props.theme["gray-800"]};
    background: ${props => props.theme["gray-300"]};
    :hover{
        cursor: pointer;
    }
    :disabled{
        opacity:50%;
        cursor: not-allowed
    }
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
max-width:26rem;
flex: 1;
`
export const InputTypeTextSmall = styled(BaseInput)`
width: 4rem;
`
export const TextArea = styled.textarea`
flex:1;
width: 60rem;
min-width: 100%;
display: flex;
padding: 0.75rem;
border: 1px solid ${props => props.theme["gray-500"]};
border-radius: 8px;
line-height: 1.3;
color:${props => props.theme["gray-800"]};
background: ${props => props.theme["gray-300"]};

`
