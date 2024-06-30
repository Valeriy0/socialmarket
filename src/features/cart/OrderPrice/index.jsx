import React from "react";
import { Link } from "react-router-dom";

export const OrderPrice = () => {
    return (
        <div className="flex flex-col space-y-8 w-full max-w-[888px]">
            <div className="flex w-full">
                <input className="w-full h-[60px] bg-[#F8F8F8] pl-4 placeholder:font-light placeholder:black-300 placeholder:text-sm" placeholder="Введите промокод"></input>
                <button className="h-full bg-black min-w-[238px] sm:min-w-[151px]">
                    <span className="text-white">Применить</span>
                </button>
            </div>
            <div className="flex flex-col space-y-7 sm:space-y-3">
                <div className="flex flex-col space-y-4 sm:space-y-1">
                    <ul className="sumPrice">
                        <li className="text-sm font-light text-black-300 leading-none whitespace-nowrap leading-[16.8px]">Стоимость продуктов<span className="text-xl font-light text-black font-medium leading-none whitespace-nowrap value sm:text-base">7990 ₽</span></li>
                    </ul>
                    <ul className="sumPrice">
                        <li className="text-sm font-light text-[#FF4040] leading-none whitespace-nowrap leading-[16.8px]">Скидка<span className="text-xl font-light text-[#FF4040] font-medium leading-none whitespace-nowrap value sm:text-base">- 1300 ₽</span></li>
                    </ul>
                </div>
                <ul className="sumPrice">
                    <li className="text-xl font-light text-black leading-none font-medium whitespace-nowrap leading-6">Итого<span className="text-2xl font-light text-black font-medium leading-none whitespace-nowrap value sm:text-xl">6690 ₽</span></li>
                </ul>
            </div>
            <Link to='/checkout' className="flex items-center justify-center h-[60px] bg-black w-full">
                <span className="text-white">Оформить заказ</span>
            </Link>

        </div>
    )
}