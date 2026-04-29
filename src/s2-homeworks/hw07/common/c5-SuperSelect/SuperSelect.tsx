import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType =
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type OptionType = {
    id: number
    value: string 
}

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: OptionType[]
    onChangeOption?: (id: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChangeOption,
    value,
    ...restProps
}) => {
    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            id={restProps.id}
            className={finalSelectClassName}
            value={String(value)}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                onChangeOption?.(Number(e.currentTarget.value))
            }
        >
            {options?.map(o => (
                <option key={o.id} value={String(o.id)}>
                    {o.value}
                </option>
            ))}
        </select>
    );
}

export default SuperSelect;