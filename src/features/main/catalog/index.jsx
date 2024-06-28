import React, { useMemo, useState } from "react";

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
                <div className="flex items-center rounded-full w-[249px] h-[40px] shadowSort px-6 sm:w-[146px] ">
                    <span className="font-light sm:hidden">Сортировать:</span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-3 ">
                {catalogItem.map((item, itemIndex) => {
                    return (
                        <div className="flex flex-col items-center justify-center bg-[#F8F8F8] h-[440px] w-[318px] relative sm:w-full sm:h-full sm:relative" key={itemIndex}>
                            <img className="sm:mt-8" src="/images/main/catalog/1.png"/>
                            <div className="flex flex-col items-center space-y-6 mt-6 sm:space-y-3">
                                <div className="flex flex-col items-center space-y-3 sm:space-y-1">
                                    <span className="font-medium sm:text-sm">Stain Worldwide</span>
                                    <span className="text-sm text-black-300 sm:text-xs">Лонгслив Join</span>
                                </div>
                                <span className="text-black text-xl font-medium sm:text-base">7990 ₽</span>
                            </div>
                            <div className="absolute top-4 left-4 bg-black rounded-full flex items-center justify-center px-[10px] py-1">
                                <span className="text-sm text-white font-light sm:text-center leading-3">New</span>
                            </div>
                        </div>  
                    )
                })}
            </div>
            <button onClick={() => setIsShowAll(prev => !prev)} className="bg-black w-full h-[60px]">
                <span className="text-white">{isShowAll ? 'Скрыть' : 'Смотреть еще'}</span>
            </button>
        </div>
    )
}