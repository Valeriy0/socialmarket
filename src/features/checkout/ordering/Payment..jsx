import React from "react";
import { TitleBlock } from "./TitleBlock";
import { Input } from "./Input";

export const Payment = () => {
    return (
        <div className="flex flex-col space-y-12">
            <TitleBlock title={"Оплата"} count={"3"} />
            <div className="flex flex-col space-y-6">
                <span className="text-2xl">Способ оплаты</span>
                <div className="flex flex-col space-y-6">
                    <div className="w-full flex flex-col space-y-6 ">
                        <div className="flex space-x-3 items-center justify-between w-full">
                            <span className="text-xl font-medium">СБП</span>
                            <img src="/icons/payment/sbp.svg"/>
                        </div>
                        <div className="flex space-x-3 items-center justify-between w-full">
                            <span className="text-xl font-medium">Оплата онлайн</span>
                            <img src="/icons/payment/online.svg"/>
                        </div>
                        <div className="flex space-x-3 items-center justify-between w-full">
                            <span className="text-xl font-medium">Долями</span>
                            <img src="/icons/payment/share.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}