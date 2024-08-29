import React from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import heroLogo from '@/assets/img/moon-hero.png';

import './HomepageHero.css';

const cssPrefix = 'home-hero';

const HomepageHero = () => {
  return (
    <Container maxWidth={"lg"} className={`${cssPrefix}`}>
      <div>
        <Image src={heroLogo} alt='' />
      </div>
    </Container>
  );
};

export default HomepageHero;