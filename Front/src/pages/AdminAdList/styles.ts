import styled from "styled-components";


export const HistoryContainer = styled.main`
flex: 1;
padding: 5rem 10rem 10rem;
display: flex;
flex-direction: column;
h1{
    font-weight: bold;
    font-size: 1.5rem;
    color: ${props => props.theme["gray-100"]};
}

`
export const HistoryList = styled.div`
    overflow: auto;
    margin-top:2rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    table{
        flex:1;
        width: 100%;
        border-collapse: collapse;
        min-width: 60rem;

        th{
            background-color: ${props => props.theme["gray-600"]};
            padding: 1rem;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6;
            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            &:last-child{
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }
        td{
            
            
            background-color: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
            color: ${props=>props.theme["gray-300"]};
            
            
            &:first-child{
               width: 40%;
               padding-left: 1.5rem;
            }
            &:last-child{
                min-width: 8rem;
                padding-right: 1.5rem;
            }
        }

    }
`
const STATUS_COLORS = {
    yellow: 'yellow-500',
    red: 'red-500',
    green: 'green-500',
} as const

interface StatusDotProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const StatusDot = styled.span<StatusDotProps>`
    display:flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        content:'';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};


    }
`

const BaseIconButton = styled.button`

border: 0px solid transparent;
outline: 0px solid transparent;
background: transparent;
color: ${props=>props.theme["blue-500"]};
:hover{
    cursor: pointer;
    color: ${props => props.theme["blue-300"]};
}
`
export const ActionIconButtonBlue = styled(BaseIconButton)`
color: ${props=>props.theme["blue-500"]};
:hover{
    cursor: pointer;
    color: ${props => props.theme["blue-300"]};
}
`
export const ActionIconButtonGreen = styled(BaseIconButton)`
color: ${props=>props.theme["green-500"]};
:hover{
    cursor: pointer;
    color: ${props => props.theme["green-300"]};
}
`
export const ActionIconButtonRed = styled(BaseIconButton)`
color: ${props=>props.theme["red-500"]};
:hover{
    cursor: pointer;
    color: ${props => props.theme["red-300"]};
}
`
export const ActionIconButtonYellow = styled(BaseIconButton)`
color: ${props=>props.theme["yellow-500"]};
:hover{
    cursor: pointer;
    color: ${props => props.theme["yellow-300"]};
}
`
