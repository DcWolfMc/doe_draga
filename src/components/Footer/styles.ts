import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.footer`
z-index: 10;
width: 100%;
min-height: 1rem;
padding: 1rem 2rem;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
gap: 12.5rem;

background: ${props => props.theme["blue-700"]};
`
export const LinkText = styled(Link)`
font-size: 1rem;
text-decoration: none;
color:${props => props.theme["blue-700"]};
:hover{
    color:${props => props.theme["blue-300"]};
}
`