import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState, useRef, useEffect } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({options, className, onChange, onChangeOption, value, ...restProps}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption = options?.find(o => o.id === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const onClickOption = (id: any) => {
        onChangeOption?.(id);
        setIsOpen(false);
    };

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <div
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  onClick={() => onClickOption(o.id)}
              >
                  {o.value}
              </div>
          ))
        : [];

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <div className={s.selectWrapper} ref={selectRef}>
            <div
                id={restProps.id}
                className={finalSelectClassName}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption?.value || 'Select...'}</span>
            </div>
            {isOpen && (
                <div className={s.options}>
                    {mappedOptions}
                </div>
            )}
        </div>
    );
}

export default SuperSelect
