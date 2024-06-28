import React, { useMemo, useState } from "react";
import { Sorting } from "../../../components/Sorting";
import { ProductCard } from "../../../components/ProductCard";


export const Catalog = () => {
    const [isShowAll, setIsShowAll] = useState(false);

    const catalog = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    ]

    const catalogItem = useMemo(() => { 
        if (isShowAll) {
            return catalog;
        }
        return catalog.slice(0, 8);
    }, [isShowAll, catalog])

    return (
        <div className="flex flex-col space-y-12 w-full mt-[120px] sm:px-4 sm:mt-10">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-end space-x-[10px]">
                    <span className="text-[32px] text-black font-bold sm:font-medium sm:leading-5">Каталог</span>
                    <img className="hidden sm:flex" src="/icons/general/arrowBot.svg" />
                </div>
                <Sorting />
            </div>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-3 ">
                {catalogItem.map((item, itemIndex) => {
                    return (
                       <ProductCard />
                    )
                })}
            </div>
            <button onClick={() => setIsShowAll(prev => !prev)} className="bg-black w-full h-[60px]">
                <span className="text-white">{isShowAll ? 'Скрыть' : 'Смотреть еще'}</span>
            </button>
        </div>
    )
}