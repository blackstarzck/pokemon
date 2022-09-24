import React, { FC } from 'react';
import { Body } from '../components/home/Body';
import { Top } from '../components/home/Top';

export interface Props {
}

export const Home: FC = (props: Props) => {
  return (
    <>
      <Top />
      <Body />
    </>
  );
}