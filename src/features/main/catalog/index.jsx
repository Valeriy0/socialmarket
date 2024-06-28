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
        <div className="flex flex-col space-y-12 w-full pt-[120px]">
            <div className="flex justify-between w-full items-center">
                <span className="text-[32px] text-black font-bold fff">Каталог</span>
                <div className="flex items-center rounded-full w-[249px] h-[40px] bg-black-300 px-6">
                    <span className="font-light">Сортировать:</span>

                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 ">
                {catalogItem.map((item, itemIndex) => {
                    return (
                        <div className="flex flex-col items-center justify-center bg-[#F8F8F8] h-[440px] w-[318px] relative space-y-8" key={itemIndex}>
                            <img src="/images/main/catalog/1.png"/>
                            <div className="flex flex-col items-center space-y-6">
                                <div className="flex flex-col items-center space-y-3">
                                    <span className="font-medium">Stain Worldwide</span>
                                    <span className="text-sm text-black-300">Лонгслив Join</span>
                                </div>
                                <span className="text-black text-xl font-medium">7990 ₽</span>
                            </div>
                            <div className="absolute top-4 left-4 bg-black rounded-full flex items-center justify-center w-[49px] h-[22px]">
                                <span className="text-sm text-white font-light">New</span>
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