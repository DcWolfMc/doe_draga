import styled from 'styled-components';
import { Box } from '@mui/material'

export const Container = styled.main`
flex: 1;
height: 100%;
width: 100%;
padding: 10% 3rem 1rem;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap:1rem;
`

export const InfoWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap:2rem;
`

export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:4rem;

`

export const ImageWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
min-width: 32rem;
min-height: 32rem;

border-radius: 8px 0px 0px 8px;

background-color: ${props => props.theme["blue-700"]};

div {
    flex:1;
    width: 100%;
    height: 32rem;
    display: flex;
    border-radius: 8px 0px 0px 8px;
    
    image-orientation:from-image;
    background-size:cover;
    background-position: center;
}
`;
export const Button = styled.button`
flex:1;
width: 100%;
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

font-size: 2rem;
font-weight: bold;
:hover{
    cursor: pointer;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
}
`

export const InfoDetails = styled.div`
display: flex;
flex-direction: column;
`
export const InfoItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
span{
    margin:1rem;
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme['gray-600']};
}
`

export const ContentContainer = styled.section`
flex: 1;
padding: 4rem 4rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:2.5rem;
border: 1px solid transparent;
border-radius:  0 16px 16px 0;

background: ${props => props.theme['gray-100']};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const ContentWrapper = styled.div`
max-width: 45rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap:2.5rem;
div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:1rem;
}
`
export const TitleText = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${props => props.theme["blue-500"]};

`
export const ContentText = styled.p`
font-size: 1rem;
line-height: auto;
font-weight: 400;
color: ${props => props.theme['gray-900']};
`

export const ModalContainer = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50rem;
    
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform: translate(-50%, -50%);
    background: ${props => props.theme['gray-100']};
    border: 2px solid #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    
`
export const ModalRowDivider = styled.div`
    width:100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
`
export const QRcodeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:1rem;
span{

    font-size: 1.5rem;
    max-width: 20rem;
    text-align: center;
    font-weight: bold;
}
`
export const QRcodeImage = styled.img`
    width:20rem;
    padding: 0.5rem;
    border: 2px solid ${props => props.theme['gray-900']};
`
export const DonationInformationColunm = styled.div`
padding:1rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 1rem;

div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap:1rem;
}
`


const BaseInput = styled.input`
    display: flex;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme["gray-500"]};
    border-radius: 8px;
    line-height: 1.3;
    color:${props => props.theme["gray-800"]};
    background: ${props => props.theme["gray-300"]};
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