import styled from 'styled-components';

const getColor = (props:any) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 3px;
  border-radius: 8px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${props=>props.theme['blue-300']};
  color: ${props=>props.theme['gray-600']};
  outline: none;
  transition: border .24s ease-in-out;
`;