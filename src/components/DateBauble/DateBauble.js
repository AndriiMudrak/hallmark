import React from 'react';

import { MONTH } from '../../constants/time';
import { Wrapper } from './DateBauble.style';

const DateBauble = () => {
  const date = new Date();
  const day = date.getDate();
  const month = MONTH[date.getMonth()];

  return (
    <Wrapper>
      <span className="month">{month}</span>
      <span className="day">{day}</span>
    </Wrapper>
  );
};

export default DateBauble;
export { DateBauble };
