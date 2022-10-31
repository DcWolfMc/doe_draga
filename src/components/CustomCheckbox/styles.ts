import styled from "styled-components";

export const CheckBox = styled.label`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
:disabled{
    opacity: 0.7;
}
`
export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

`

interface StatusProps {
    active: boolean
}
export const CheckboxBox = styled.span<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  background: transparent;
  border: 0.125rem solid ${props=>props.theme["yellow-700"]};
  background: ${props=>props.active && props.theme["yellow-700"]};
  border-radius: 100%;
  margin-right: 0.25rem;
  :hover {
  border-color: ${props=>props.theme["yellow-500"]};
  background: ${props=>props.active? props.theme["yellow-500"]: props.theme["yellow-300"]};
  cursor:pointer;
}

`