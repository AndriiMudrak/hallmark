const colors = {
  white: '#FFFFFF',
  red: '#BA0020',
  burgundy: '#A91D37',
  darkBlue: '#347AA7',
  gray: '#686868',
  violet: '#7E43AA',
  black: '#333333',
};
  
const defaults = {
  fontSize: 'inherit',
  fontFamily: 'inherit',
};

export const THEME = {
  colors: {
    ...colors,
  },
  text: {
    ...defaults,
  },
  breakpoints: {
    xs: 576,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
  media: {
    tablet: '(max-width: 768px)',
  },
};
