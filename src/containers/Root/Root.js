import React from 'react';

import { Header } from '../Header';
import { Content } from '../Content';
import { RightBar } from '../RightBar';
import { Footer } from '../Footer';
import { Wrapper } from './Root.style';

const Root = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Content />
        <RightBar />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default Root;
