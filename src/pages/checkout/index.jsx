import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../components/Title";
import { PersonalData } from "../../features/checkout/Ordering/PersonalDate";
import { AddressDate } from "../../features/checkout/Ordering/AdddressDate";
import { Payment } from "../../features/checkout/Ordering/Payment";
import { OrderInfo } from "../../features/checkout/OrderInfo";

export const Checkout = () => {
    return (
        <BaseLayout>
            <Title className={"mb-12"}>Оформление заказа</Title>
            <div className="flex w-full justify-between">
                <div className="flex flex-col space-y-12 w-full justify-between max-w-[800px]">
                    <PersonalData />
                    <AddressDate /> 
                    <Payment />
                </div>
                <OrderInfo />
            </div>
        </BaseLayout>
    )
}