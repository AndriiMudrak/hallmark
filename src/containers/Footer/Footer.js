import React from 'react';

import FooterImg from '../../public/footer.png';

import { Wrapper } from './Footer.style';

const Footer = () => {

  return (
    <Wrapper>
      <img src={FooterImg} alt="footer" />
    </Wrapper>
  );
}

export default Footer;
