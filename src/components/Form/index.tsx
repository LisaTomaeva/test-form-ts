import React from 'react';
import validator from '@rjsf/validator-ajv8';

import { mainFormSchema } from '../../shemas/MainForm';
import { StyledForm } from './styles';
  
  const log = (type: any) => console.log.bind(console, type);

  const handleOnError = () => {
    log('errors');
    alert('Проверьте корректность заполнения полей');
  }
  
  const FormComponent = () => (
    <StyledForm
      schema={mainFormSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={handleOnError}
    />
  );

  export {FormComponent};