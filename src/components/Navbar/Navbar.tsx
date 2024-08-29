import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

// Assets
import logo from '@/assets/img/moon-logo-transparent.png';

import './Navbar.css';

const cssPrefix = 'navbar';

const Navbar = () => {

  const t = useTranslations();

  return (
    <AppBar
      component={"nav"}
      position='fixed'
      color='transparent'
      className={`${cssPrefix}-app-bar`}
    >
      <Container
        maxWidth={"lg"}
        className={`${cssPrefix}-container`}
        disableGutters
      >
        <Toolbar disableGutters>
          <Image
            className={`${cssPrefix}-logo`}
            src={logo}
            alt='logo'
          />
          <Typography
            variant='h5'
            noWrap
            component={'a'}
            href='/'
          >
            {t('store_name')}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;