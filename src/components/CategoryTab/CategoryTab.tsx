'use client'

import { Category } from '@/models';
import { Button } from '@mui/material';
import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './CategoryTab.css';
import { Product } from '@prisma/client';

const cssPrefix = 'category-tabs';

type CategoryProps = SwiperProps & {
  items?: Category[];
  onSelectTab?: (products: Product[]) => void;
}

const CategoryTab = ({ items, onSelectTab, ...rest }: CategoryProps) => {

  const getProducts = async (categoryId: number | string) => {
    const resp = await fetch(`/api/categories/${categoryId}`);
    const products = await resp.json();
    onSelectTab?.(products);
  }

  return (
    <div className={`${cssPrefix}`}>
      <Swiper
        className={`${cssPrefix}-swiper`}
        {...rest}
      >
        {items && items.map(item =>
          <SwiperSlide className={`${cssPrefix}-slide`} key={`${item.id}-tab-slide`}>
            <Button
              className={`${cssPrefix}-button`}
              type='button'
              color='primary'
              onClick={() => getProducts(item.id)}
            >
              {item.name}
            </Button>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default CategoryTab;