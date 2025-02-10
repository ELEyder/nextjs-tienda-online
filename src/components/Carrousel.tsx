'use client';

import { Carousel } from 'flowbite-react';
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    "base": "relative h-[500px] w-full",
  },
  scrollContainer: {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
  },
};

export default function Carrousel() {

  return (
    <Carousel indicators theme={customTheme}>
      <div className='w-full h-[500px] grid justify-center'>
        <img className='h-[500px]' src="/img/b1.jpg" alt="..." />
      </div>
      <div className='w-full h-[500px] grid justify-center'>
        <img className='h-[500px]' src="/img/b2.jpg" alt="..." />
      </div>
    </Carousel>
  );
}