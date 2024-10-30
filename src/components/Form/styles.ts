import styled from "styled-components";
import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/mui';

const Form = withTheme(Theme);

export const StyledForm = styled(Form)`
    width: 600px;
}`;