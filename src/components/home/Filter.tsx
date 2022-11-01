import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setFilterItem from '../../store/actions/filter';
import { RootState } from '../../store/reducers';
import { FilterStyles } from './Filter.elements';

export interface Props {}

export const Filter: FC = (props: Props) => {
  const { filter } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

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

  console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Filter ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

  return (
    <FilterStyles>
      <ul className="filter-wrapper">
          <li onClick={() => dispatch(setFilterItem("pokemon"))} data-param="pokemon" className="filter-item">Pokemon</li>
          <li onClick={() => dispatch(setFilterItem("ability"))} data-param="ability" className="filter-item">Ability</li>
          <li onClick={() => dispatch(setFilterItem("type"))} data-param="type" className="filter-item">Type</li>
      </ul>
    </FilterStyles>
  );
}
