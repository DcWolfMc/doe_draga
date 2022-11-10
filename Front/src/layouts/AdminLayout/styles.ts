import styled from "styled-components";
export const Container = styled.div`
flex: 1;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:8rem;

background-color: ${props=>props.theme["blue-700"]};
`