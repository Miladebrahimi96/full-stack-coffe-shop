import React from 'react';
import { Container, Typography } from '@mui/material';
import clsx from 'clsx';

import './Section.css';

const cssPrefix = 'section';

type SectionProps = {
  children?: JSX.Element;
  title?: JSX.Element;
  className?: string;
}

const Section = ({ children, title, className }: SectionProps) => {
  return (
    <section className={clsx(cssPrefix, className)}>
      <Container
        className={`${cssPrefix}-container`}
        maxWidth={"lg"}
      >
        <Typography
          align='center'
          variant='h3'
          gutterBottom
          color='wheat'
        >
          {title}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

export default Section;