import React, { useCallback } from 'react';

import { Wrapper } from './Footer.style';

const Footer = () => {

  const onLinkClick = useCallback(() => {}, []);

  return (
    <Wrapper>
      <p>
        <span>NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCE OF WINNING.</span>
        Sweepstakes begins at 10:00:00am ET on 10/22/21 and ends at 11:59:59pm ET on 12/26/21.
        Each day the entry period begins at 12:00am ET with all prize days ending at 11:59:59pm ET on 12/26/21.
        Promotion is open to legal residents of 50 United States or D.C who are 21 years of age or older.
        Void where prohibited by law. <span className="link" onClick={onLinkClick}>CLICK HERE</span> for complete Official Rules
        including prize details and separate daily entry periods.
        Sponsor: Crown Media United States, LLC. Ballard Designs is not the administrator for this promotion.
      </p>
    </Wrapper>
  );
}

export default Footer;
