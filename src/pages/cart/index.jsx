import React from "react";
import { CatalogLayout } from "../../layouts/CatalogLayout";
import { Title } from "../../components/Title";

export const Cart = () => {
    return (
        <CatalogLayout>
            <div className="flex flex-col space-y-12 items-center">
                <Title className={'sm:mt-[40px]'}>Корзина</Title>
                <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-3 w-full ">


                </div>

            </div>

        </CatalogLayout>
    )
}