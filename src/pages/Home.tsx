import React, { FC } from 'react';
import { Body } from '../components/home/Body';
import { Top } from '../components/home/Top';

let posY = 0;
const root = document.getElementById("root") as HTMLElement;
const wHeight = window.innerHeight;
const cHeight = root.offsetHeight;
const endPos = Math.abs(wHeight - cHeight);

window.onscroll = (evt) => {
    posY = window.pageYOffset;
    if(posY >= endPos){
        console.log("페이지 최하단에 왔습니다~!", posY, endPos);
    }
}

export interface Props {}

export const Home: FC = (props: Props) => {
  return (
    <>
      <Top />
      <Body />
    </>
  );
}