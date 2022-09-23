import React from 'react';

import { Button } from '../../lib/ui/Button'
import { Wrapper } from './PrizeCard.style';

const PrizeCard = ({ date, image }) => {

  return (
    <Wrapper>
      <span className="date">{date}</span>
      <div className="card">
        <div>
          <img src={image} alt="prize"/>
        </div>
        <span className="sponsor-logo">Sponsor Logo.</span>
        <Button primary>ENTER NOW</Button>
      </div>
    </Wrapper>
  );
};

export default PrizeCard;
export { PrizeCard };
