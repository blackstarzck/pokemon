import React, { FC, memo, useEffect, useRef, useCallback } from 'react';
import { SortStyles } from './Sort.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import sortToggle, { SELECT_OPEN, SELECT_CLOSE } from '../../store/actions/sort';
import { ThunkDispatch } from '../../store/actions/search';

export const LN = "Lowest Number" as const;
export const HN = "Highest Number" as const;
export const ASC = "A-Z" as const;
export const DESC = "A-Z" as const;

export interface Props {
    pData: any
}

export const Sort: FC = memo(props => {
    const { data } = useSelector((state: RootState) => state.search);
    const sort = useSelector((state: RootState) => state.sort);
    const selected = useRef<HTMLSpanElement>(null);
    const dispatch = useDispatch<ThunkDispatch>();

    const toggle = useCallback((e: React.MouseEvent): void => {
        const ele = e.target as HTMLElement;
        dispatch(
            sortToggle({
                type: sort.isOpen ? SELECT_CLOSE : SELECT_OPEN,
                sortType: ele.dataset.sortType,
                pData: data
            })
        );
    }, [sort.isOpen]);

    useEffect(() => {
        console.log("sort: ", sort);
        if(!sort.isOpen){
            const elem = selected.current as HTMLSpanElement;
            elem.innerText = sort.sortType;
        }
    }, [sort.isOpen]);

    console.log("data: ", data.pokemons);
    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Sort ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <SortStyles isLoaded={data.pokemons?.length > 0 ? true : false} isOpen={sort.isOpen}>
            <span className="head">Sort</span>
            <div className="select-box">
                <div onClick={(e) => (data.pokemons?.length > 0) && toggle(e)} className="selected">
                    <span ref={selected}>Lowest Number</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <ul className="option-wrapper">
                    <li onClick={(e) => toggle(e)} data-sort-type={LN} className="option">{LN}</li>
                    <li onClick={(e) => toggle(e)} data-sort-type={HN} className="option">{HN}</li>
                    <li onClick={(e) => toggle(e)} data-sort-type={ASC} className="option">{ASC}</li>
                    <li onClick={(e) => toggle(e)} data-sort-type={DESC} className="option">{DESC}</li>
                </ul>
            </div>
        </SortStyles>
    );
});
