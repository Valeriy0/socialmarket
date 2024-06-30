import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../components/Title";
import { TitleBlock } from "../../features/checkout/ordering/TitleBlock";
import { PersonalData } from "../../features/checkout/ordering/PersonalData";
import { AddressDate } from "../../features/checkout/ordering/AddressDate";
import { Payment } from "../../features/checkout/ordering/Payment.";

export const Checkout = () => {
    return (
        <BaseLayout>
            <Title className={"mb-12"}>Оформление заказа</Title>
            <div className="flex flex-col space-y-12 w-full justify-between max-w-[800px]">
                <PersonalData />
                <AddressDate />
                <Payment />
            </div>
        </BaseLayout>
    )
}