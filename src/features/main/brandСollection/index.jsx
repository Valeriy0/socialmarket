import React from "react";
import { Item } from "./item";

export const BrandCollection = ({img, title, desc, link}) => {
    return (
        <div className="flex flex-col space-y-12 w-full pt-[120px]">
            <span className="text-[32px] text-black font-semibold">Коллекции брендов</span>
            <div className="flex items-center justify-between">
               <Item img={'1'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
               <Item img={'2'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
               <Item img={'3'} title={'Stain Worldwide'} desc={"Кроссовки Nike Air Force 1 Low '07 с верхом из гладкой кожи, нубука и замши с дизайном в стиле колор-блок."} link={'/main'} />
            </div>
        </div>
    )
}