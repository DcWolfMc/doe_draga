import styled from "styled-components";

export const HeaderContainer = styled.header`
position: fixed;
z-index: 10;
width: 100%;
padding: 1rem 2rem;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
align-content: center;
gap: 12.5rem;

background: ${props => props.theme["blue-700"]};
nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    
}


    
`
const LinkButton = styled.button`
min-width:7.5rem;
min-height:3.75rem;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-content: center;
gap: 0.5rem;
padding: 1rem;
border: 2px solid transparent;
border-radius: 8px;
text-transform: uppercase;
a{
    color: inherit;
    display: flex;
    align-items: center;
    align-content: center;
    text-decoration: none;
    
}
:hover{
    cursor: pointer;
}
`
export const BlueButton = styled(LinkButton)`
color: ${props => props.theme["gray-100"]};
background: ${props => props.theme["blue-500"]};
:hover{
    background: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["blue-500"]};
    border-color:${props => props.theme["blue-500"]};
    
}
`
export const YellowButton = styled(LinkButton)`
color: ${props => props.theme["gray-100"]};
background: ${props => props.theme["yellow-500"]};
:hover{
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
}
`
export const LocationField = styled.div`
padding: 0.5rem;
    background: ${props => props.theme["purple-300"]} ;
    color: ${props => props.theme["purple-500"]};
    
    border: 1px solid transparent;
    border-radius: 8px;

    display: flex;
    align-items: center;
    align-content: center;
    gap: 0.25rem;

span{
    color: ${props => props.theme["purple-700"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
}
`
export const CartButton = styled.button`
position: relative;
display: flex;
align-items: center;
align-content: center;

padding: 0.5rem;
border: 1px solid transparent;
border-radius: 8px;

color: ${props => props.theme["yellow-500"]};
background: ${props => props.theme["yellow-300"]};
a{
    color: inherit;
    display: flex;
    align-items: center;
    align-content: center;
    text-decoration: none;
    
}
:hover{
    cursor: pointer;
    background: ${props => props.theme["yellow-500"]};
    color: ${props => props.theme["yellow-300"]};
}
`
export const Badge = styled.span`
        
        padding: 0.25rem;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        background: ${props => props.theme["yellow-700"]};

        border: 1px solid transparent;
        border-radius: 100%;
        font-weight: bold;
        font-size: 0.75rem;
        color: ${props => props.theme.white};
        

`