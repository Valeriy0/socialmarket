import React from "react";
import { Item } from "./item";

export const Catalog = () => {
    return (
        <div className="flex flex-col space-y-12 w-full pt-[120px]">
            <div className="flex justify-between w-full items-center">
                <span className="text-[32px] text-black font-semibold">Каталог</span>
                <div className="flex items-center rounded-full w-[249px] h-[40px] bg-black-300 px-6">
                    <span className="font-light">Сортировать:</span>

                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 ">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}