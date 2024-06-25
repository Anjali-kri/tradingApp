import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import States from './States';
import Priceing from './Priceing';
import Education from './Education';
import OpenAccount from '.././OpenAccount';


const HomePage = () => {
  return (
    <>
        <Hero />
        <Awards/>
        <States/>
        <Priceing/>
        <Education/>
        <OpenAccount/>
    </>
  )
}

export default HomePage