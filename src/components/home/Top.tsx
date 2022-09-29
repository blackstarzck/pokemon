import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { TopStyles } from './Top.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { search, ThunkDispatch } from '../../store/actions/search';
import setLoadingStatus from '../../store/actions/loading';
import { RootState } from '../../store/reducers';
import setFilterItem from '../../store/actions/filter';

export interface Props {
}

type Param = string;

export const Top: FC = (props: Props) => {
  // const [ filter, setFilter ] = useState<string>("pokemon");
  const { filter } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<ThunkDispatch>(); // ThunkDispatch: 함수 또는 객체만
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(() => {
    const input = inputRef.current as HTMLInputElement;
    if((filter !== "pokemon" && input.value) || filter === "pokemon"){
      dispatch( setLoadingStatus(true) );
      dispatch( search(filter, input.value) );
    }
  }, [filter]);

  useEffect(() => {
    const fItems = document.querySelectorAll(".filter-item");
    fItems.forEach(elem => {
      let fAttr = elem.getAttribute("data-param");
      if(fAttr === filter){
        elem.classList.add("active");
      }else{
        elem.classList.remove("active");
      }
    });
  }, [filter]);

  console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Top ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

  return (
    <TopStyles>
        <h1 className="title">Search your Pokemon!</h1>
        <div className="search-box">
            <input ref={inputRef} onKeyDown={e => e.key === "Enter" && handleSearch()} type="text" placeholder="Name of Pokemon or Number"/>
            <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <ul className="filter-wrapper">
            <li onClick={() => dispatch(setFilterItem("pokemon"))} data-param="pokemon" className="filter-item">Pokemon</li>
            <li onClick={() => dispatch(setFilterItem("ability"))} data-param="ability" className="filter-item">Ability</li>
            <li onClick={() => dispatch(setFilterItem("type"))} data-param="type" className="filter-item">Type</li>
        </ul>
    </TopStyles>
  );
}