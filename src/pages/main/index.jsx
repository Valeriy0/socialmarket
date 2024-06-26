import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Partners } from "../../features/main/partners";
import { BrandCollection } from "../../features/main/brandСollection";

export const Main = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col bg-blue w-full">
                <Partners />
                <BrandCollection />
            </div>
        </BaseLayout>
    )
}