import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { breakpoints } from '../../lib/themes/default';
import VeryMerryLogo from '../../public/VeryMerryLogo.png';
import BoarsHeadLogo from '../../public/BoarsHeadLogo.png';
import BoarsHeadLogoHorizontal from '../../public/BoarsHeadLogoHorizontal.png';
import EnvyLogo from '../../public/EnvyLogo.png';
import AvailableToWin from '../../public/AvailibleToWin.png';
import TodayPrize from '../../public/TodayPrize.png';
import SponsorLogo from '../../public/SponsorLogo.svg';

import { DateBauble } from '../../components/DateBauble';
import { Button } from '../../lib/ui/Button';
import { PrizeCard } from '../../components/PrizeCard';

import { prizes } from './assets';
import { Wrapper } from './Content.style';

const Content = () => {
  const windowWidth = useWindowWidth();
  const isMobile = breakpoints.md > windowWidth;

  return (
    <Wrapper>
      <div className="title">
        <div className="left-title">
          <DateBauble />
          <div className="very-marry-logo">
            <img src={VeryMerryLogo} alt="Very Merry logo" />
          </div>
          <div className="empty"/>
        </div>
        <div className="presented-by-logos">
          <div className="presented-by-container">
            <span>Presented By</span>
            <img src={BoarsHeadLogo} alt="Boars Head Logo" />
          </div>
          <div className="delimiter" />
          <div className="presented-by-container">
            <span>Presented By</span>
            <img src={EnvyLogo} alt="Envy Logo" />
          </div>
        </div>
      </div>
      <div className="chance-description">
        <span>
          Enter daily for a chance to win <span className="hot">$10,000</span> for you and <span className="hot">$10,000</span> to share with a friend or someone in need! 
        </span>
        <div className="courtesy-of-container">
          <img src={BoarsHeadLogoHorizontal} alt="Envy Logo" />
        </div>
        <span className="additional-description">Plus, win one + share one of our daily merry prizes!</span>
      </div>
      <div className="prizes">
        <div className="prizes-img">
          <img src={AvailableToWin} alt="Available To Win" />
        </div>
        <div className="today-prize">
          <img src={TodayPrize} alt="TodayPrize" />
          <Button primary>ENTER NOW</Button>
          <div className="sponsor-logo">
            <span>Presented By</span>
            <img src={SponsorLogo} alt="Sponsor Logo" />
          </div>
        </div>
      </div>
      <div className="daily-prizes">
        <div className="prizes-title">
          <span>More Daily Prizes</span>
          <span className="link">{isMobile ? "VIEW ALL" : "VIEW ALL PRIZES"}</span>
        </div>
        <div className="prizes-cards">
          {prizes.map((prize) => <PrizeCard {...prize} />)}
        </div>
      </div>
      <div className="how-works-btn">
        <Button>HOW IT WORKS</Button>
      </div>
      <div className="rule-description">
        <p>
          <span>NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCE OF WINNING.</span>
          Sweepstakes begins at 10:00:00am ET on 10/22/21 and ends at 11:59:59pm ET on 12/26/21.
          Each day the entry period begins at 12:00am ET with all prize days ending at 11:59:59pm ET on 12/26/21.
          Promotion is open to legal residents of 50 United States or D.C who are 21 years of age or older.
          Void where prohibited by law. <span className="link">CLICK HERE</span> for complete Official Rules
          including prize details and separate daily entry periods.
          Sponsor: Crown Media United States, LLC. Ballard Designs is not the administrator for this promotion.
        </p>
      </div>
    </Wrapper>
  );
}

export default Content;
