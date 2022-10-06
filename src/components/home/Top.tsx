import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { TopStyles } from './Top.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { search, ThunkDispatch } from '../../store/actions/search';
import { RootState } from '../../store/reducers';
import { Filter } from './Filter';

export interface Props {
}

export const Top: FC = (props: Props) => {
  const { filter } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<ThunkDispatch>(); // ThunkDispatch: 함수 또는 객체만
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(async () => {
    const input = inputRef.current as HTMLInputElement;
    if((filter !== "pokemon" && input.value) || filter === "pokemon"){
      dispatch( search(filter, input.value) );
    }
  }, [filter]);

  console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Top ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

  return (
    <TopStyles>
        <h1 className="title">Search your Pokemon!</h1>
        <div className="search-box">
            <input ref={inputRef} onKeyDown={e => e.key === "Enter" && handleSearch()} type="text" placeholder="Name of Pokemon or Number"/>
            <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <Filter />
    </TopStyles>
  );
}