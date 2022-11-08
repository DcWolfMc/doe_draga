import React, { FunctionComponent } from 'react';
import {useDropzone} from 'react-dropzone';
import {Container} from './styles'

export const StyledDropzone:FunctionComponent = (props)=> {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject} = useDropzone({accept: {'image/*': []}});
  
  return (
    <div className="container">
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Arreste e solte as imagens aqui, ou click para escolher o arquivo</p>
      </Container>
    </div>
  );
}
