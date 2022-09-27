import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { TopStyles } from './Top.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons'
import { useDispatch } from "react-redux";
import { search, ThunkDispatch } from '../../store/actions/search';

export interface Props {
}

type Param = string;

export const Top: FC = (props: Props) => {
  const [ activeParm, setActiveParam ] = useState<string>("pokemon");
  const dispatch = useDispatch<ThunkDispatch>(); // ThunkDispatch: 함수 또는 객체만
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const input = inputRef.current as HTMLInputElement;
    dispatch( search(activeParm, input.value) );
  }, [activeParm]);

  useEffect(() => {
    const fItems = document.querySelectorAll(".filter-item");
    fItems.forEach((item) => {
      if(item.getAttribute("data-param") === activeParm){
        item.classList.add("active");
      }else{
        item.classList.remove("active");
      }
    });
  }, [activeParm]);

  const setParam = (e: React.MouseEvent<HTMLElement>) => {
    const activeParam = e.currentTarget.dataset.param as Param;
    setActiveParam(activeParam);
  }

  console.log("렌더");

  return (
    <TopStyles>
        <h1 className="title">Search your Pokemon!</h1>
        <div className="search-box">
            <input ref={inputRef} type="text" placeholder="Name of Pokemon or Number"/>
            <button onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <ul className="filter-wrapper">
            <li onClick={setParam} data-param="pokemon" className="filter-item">Pokemon</li>
            <li onClick={setParam} data-param="ability" className="filter-item">Ability</li>
            <li onClick={setParam} data-param="type" className="filter-item">Type</li>
        </ul>
    </TopStyles>
  );
}