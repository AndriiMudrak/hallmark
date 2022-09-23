import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../lib/themes';
import { Root } from '../Root';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
