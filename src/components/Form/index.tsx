import React from 'react';
import validator from '@rjsf/validator-ajv8';

import { RJSFSchema } from '@rjsf/utils';
import { mainFormSchema } from '../../shemas/MainForm';
import { StyledForm } from './styles';

const schema: RJSFSchema = {
    title: 'Todo',
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string', title: 'Title', default: 'A new task' },
      done: { type: 'boolean', title: 'Done?', default: false },
    },
  };
  
  const log = (type: any) => console.log.bind(console, type);
  
  const FormComponent = () => (
    <StyledForm
      schema={mainFormSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
    />
  );

  export {FormComponent};