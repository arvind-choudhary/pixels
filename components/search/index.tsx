"use client";

import { useCallback, memo, useState } from "react"
import { SearchIcon } from "../_actionsIcons"
import { CrossIcon } from "../_actionsIcons/crossIcon";

export const Search = memo(({ className = "p-2", extendCss = '' }) => {
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setSearchValue(value);
    }, []);

    const onClickCloseIcon = useCallback(() => {
        setSearchValue('');
    }, [])

    return (
        <section className={className}>
            <label className="relative w-full flex place-items-center">
                <input 
                    type="text" 
                    className="border w-full rounded-full p-2 px-4" 
                    placeholder="Search for free photos"
                    onChange={onChangeInput}
                    value={searchValue}
                />
                <span className="absolute right-4 flex place-items-center">
                    {searchValue.length ? <CrossIcon onClick={onClickCloseIcon} className="mx-2" /> : false }
                    <SearchIcon />
                </span>
            </label>
        </section>
    )
})