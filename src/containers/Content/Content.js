import React from 'react';

import VeryMerryLogo from '../../public/VeryMerryLogo.png';
import BoarsHeadLogo from '../../public/BoarsHeadLogo.png';
import BoarsHeadLogoHorizontal from '../../public/BoarsHeadLogoHorizontal.png';
import EnvyLogo from '../../public/EnvyLogo.png';
import HorizontalDelimiter from '../../public/HorizontalDelimiter.png';
import AvailableToWin from '../../public/AvailibleToWin.png';
import TodayPrize from '../../public/TodayPrize.png';
import SponsorLogo from '../../public/SponsorLogo.svg';

import { DateBauble } from '../../components/DateBauble';
import { Button } from '../../lib/ui/Button';
import { PrizeCard } from '../../components/PrizeCard';

import { prizes } from './assets';
import { Wrapper } from './Content.style';


const Content = () => {

  return (
    <Wrapper>
      <div className="title">
        <div className="left-title">
          <DateBauble />
          <div >
            <img className="very-marry-logo" src={VeryMerryLogo} alt="Very Merry logo" />
          </div>
          <div/>
        </div>
        <div className="presented-by-logos">
          <div className="presented-by-container">
            <span>Presented By</span>
            <img src={BoarsHeadLogo} alt="Boars Head Logo" />
          </div>
          <img className="horizontal-delimiter" src={HorizontalDelimiter} alt="Envy Logo" />
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
        <div>
          <img src={AvailableToWin} alt="Available To Win" />
        </div>
        <div className="today-prize">
          <img src={TodayPrize} alt="TodayPrize" />
          <Button primary>ENTER NOW</Button>
          <span>Presented By</span>
          <img src={SponsorLogo} alt="Sponsor Logo" />
        </div>
      </div>
      <div className="daily-prizes">
        <div className="prizes-title">
          <span>More Daily Prizes</span>
          <span className="link">VIEW ALL PRIZES</span>
        </div>
        <div className='prizes-cards'>
          {prizes.map((prize) => <PrizeCard {...prize} />)}
        </div>
      </div>
      <div className="how-works-btn">
        <Button>HOW IT WORKS</Button>
      </div>
    </Wrapper>
  );
}

export default Content;
