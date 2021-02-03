import React from 'react';
import HeroSection from '../../herosection/HeroSection';
import { homeObjectFour, homeObjectOne, homeObjectThree , homeObjectTwo } from './Data';


function Home() {

  return (
    <>
    <HeroSection  {...homeObjectOne} />   
    <HeroSection  {...homeObjectThree} />   
    <HeroSection  {...homeObjectTwo } />   
    <HeroSection  {...homeObjectFour} />   
    </>
  )
}

export default Home;
