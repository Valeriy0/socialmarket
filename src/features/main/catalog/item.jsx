import React from "react";

export const Item = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#F8F8F8] h-[440px] w-[318px] relative">
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
}