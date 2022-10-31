import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;

border-radius: 8px;

`;
export const ImageWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
min-width: 28rem;
min-height: 28rem;

border-radius: 8px 0px 0px 8px;

background-color: ${props => props.theme["blue-700"]};

div {
    flex:1;
    width: 100%;
    height: 28rem;
    display: flex;
    border-radius: 8px 0px 0px 8px;
    
    image-orientation:from-image;
    background-size:cover;
    background-position: center;
}
`;
export const ContentWrapper = styled.div`
height: auto;
padding: 1.5rem 1.5rem ;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;



background: ${props => props.theme['gray-200']};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 8px 8px 0px;


`;
export const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 2.5rem;
`
export const Title = styled.h1`
width: 100%;
font-style: normal;
font-weight: 700;
font-size: 2rem;
line-height: 2.5rem;

color: ${props => props.theme['blue-500']};
`;
export const ContentPreview = styled.p`
width: 100%;
font-weight: 400;
font-size: 1rem;
color: ${props => props.theme['gray-900']};
`;
export const Footer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
`;
export const DatesInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
`;
export const DateItem = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;

span{
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme['gray-600']};
}
`
export const Button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
font-weight: 700;
font-size: 1rem;

border: 0px solid transparent;

color: ${props => props.theme['yellow-300']};
:hover{
    cursor:pointer;
    color: ${props=>props.theme["yellow-500"]}
}
`