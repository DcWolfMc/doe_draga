import styled from "styled-components";


export const SearchBarContainer = styled.form`
padding:0.25rem;
padding-right: 2rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap:2rem;

border-radius: 32px;

background-color: ${props => props.theme.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
export const InputWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: center;
`

export const SearchIconContainer = styled.div`
position: relative;
right: -0.5rem;
padding: 0.25rem 1rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

border-radius: 32px 0 0 32px;

background-color: ${props=>props.theme["gray-500"]};

`

export const SearchInput = styled.input`
width: 30rem;
z-index: 5;
padding: 0.75rem;
background-color: ${props => props.theme["gray-300"]};
border-radius: 4px;
border: 0px solid transparent;

`
export const SearchButton = styled.button`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-content: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border: 2px solid transparent;
border-radius: 8px;
text-transform: uppercase;

color: ${props => props.theme["gray-100"]};
background: ${props => props.theme["yellow-500"]};
:hover{
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
    cursor: pointer;
}
`