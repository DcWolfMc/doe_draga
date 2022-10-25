import styled from "styled-components";

export const DeliverySendContainer = styled.main`
padding-top: 11.5rem;
padding-left:10rem;
flex: 1;
display: flex;
flex-direction: column;

gap: 2.5rem;
>div{
    strong{
        color: ${props => props.theme["yellow-700"]};;
        font-size: 2rem;
        font-family: 'Baloo 2', cursive;
    }
    >p{
        font-size: 1.25rem;
    }
}
a{
    text-decoration: none;
}
`
export const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
gap: 6.375rem;
`



export const ContentInfo = styled.div`
position: relative;
border: 1px solid transparent;
border-radius: 6px 36px;
background-color: #fff;
::before{
    position: absolute;
    top: -2px; bottom: -2px;
    left: -2px; right: -2px;
    background: linear-gradient( 102.89deg , ${props=> props.theme["yellow-500"]} 2.61%, ${props=> props.theme["purple-500"]} 98.76%);
    content: '';
    z-index: -1;
    border-radius: 6px 36px;
}
padding: 2.5rem;

display: flex;
flex-direction: column;
align-items: flex-start;
align-content: center;
gap: 2rem;
div{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    gap: 0.75rem;
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
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 100%;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme[ICONS_BACKGROUND[props.backgroundColor]]};
    `
export const ReturnButton = styled.button`
    width: fit-content;
    padding: 0.875rem 1.5rem;
    border-radius: 8px;
    border: 1px solid transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.875rem;
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
`