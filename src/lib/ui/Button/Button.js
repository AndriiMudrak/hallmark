import React from 'react';

import { ReactComponent as ChevronRight } from '../../../public/ChevronRight.svg';

import { Wrapper } from './Button.style';

const Button = ({ children, primary }) => {
  return (
    <Wrapper primary={primary} >
      {children}
      <ChevronRight  />
    </Wrapper>
  );
}

export default Button;
