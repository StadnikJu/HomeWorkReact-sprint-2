import React from 'react';
import downIconImg from '../../../../assets/icons/arrow-down.svg';
import upIconImg from '../../../../assets/icons/arrow-up.svg';
import upIconBlack from "../../../../assets/icons/icon-up-black.svg";
import downIconBlack from "../../../../assets/icons/icon-down-black.svg";
import s from "../c9-SuperPagination/SuperPagination.module.css";

const downIcon = downIconImg
const upIcon = upIconImg
const iconBlackDw = downIconBlack
const iconBlackUp = upIconBlack
const noneIcon = ''

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(sort === "") return down; 
    else if(sort === down) return up;
    else if (sort === up) return "";
    else return down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {sort === '' ? (
                <span className={s.doubleArrow}>
                    <img src={upIconImg} alt="up" />
                    <img src={downIconImg} alt="down" />
                </span>
            ) : (
                <img
                    src={sort === up ? iconBlackUp : iconBlackDw}
                    alt="sort"
                />
            )}
        </span>
    )
}

export default SuperSort;
