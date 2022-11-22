import styled from "styled-components";

export const HomeContainer = styled.main`
display: flex;
flex:1;
padding-top: 6rem;
display: flex;
flex-direction: column;
align-items: stretch;
gap: 3.5rem;
>h1{
    margin-left: 10rem;
    font-family: 'Inter', sans-serif;
}
`
export const Cover = styled.div`
min-height: 10rem;
padding: 5.75rem 10rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap:5rem;
background-image: url("/src/assets/bg-blur.png");
background-size: cover;
background-repeat: no-repeat;
`
export const CoverContent = styled.div`
min-height: 28.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

`
export const CoverTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    max-width: 588px;
    gap: 1rem;

    h1{
        font-family: 'Inter', sans-serif;
        font-size: 3rem;
        font-weight: bolder;
        line-height: 1.3;
        line-break: loose;
    }
    p{
        font-size: 1.25rem;
        line-height: 1.3;
        line-break: loose;
    }
`
export const LinkButton = styled.button`
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

a{
    color: inherit;
    display: flex;
    align-items: center;
    align-content: center;
    text-decoration: none;
    
}
:hover{
    cursor: pointer;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["gray-100"]};
}
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.25rem;
    
    }
    a{
        flex:1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

`
const ICONS_BACKGROUND = {
    yellow: 'yellow-500',
    brown: 'yellow-700',
    purple: 'purple-500',
    black: 'gray-700',
} as const

interface InfoIconsProps {
    backgroundColor: keyof typeof ICONS_BACKGROUND
}
export const InfoIcons = styled.span<InfoIconsProps>`
        padding: 0.5rem;
        border-radius: 100%;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme[ICONS_BACKGROUND[props.backgroundColor]]};
    `
export const Menu = styled.div`
    
    padding: 5.75rem 10rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    `