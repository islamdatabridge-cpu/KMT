import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Stats from '../components/Stats';
import FeaturedProject from '../components/FeaturedProject';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Stats />
      <FeaturedProject />
      <Portfolio />
    </>
  );
}
