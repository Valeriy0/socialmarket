import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Sorting } from "../../components/Sorting";
import { ProductCard } from "../../components/ProductCard";
import { Filters } from "../../components/Filters";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const Catalog = () => {
    const catalogList = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    ]
    return (
        <BaseLayout>
            <div className="flex space-x-[80px] sm:space-x-0 sm:px-4">
                <Filters />
                <div className="flex flex-col space-y-[56.5px] items-start w-full sm:space-y-6">
                    <div className="flex items-center justify-between w-full sm:flex-col-reverse sm:items-start">
                        <span className="text-[32px] text-black font-semibold sm:font-medium sm:leading-5 sm:mt-6 sm:font-semibold">Мужская одежда</span>
                        <Sorting />
                    </div>
                    <div className="grid grid grid-cols-3 gap-6 w-full sm:grid-cols-2 sm:gap-3">
                        {catalogList.map((item, itemIndex) => {
                            return (
                                <ProductCard />
                            )
                        })}  
                    </div>               
                </div>
            </div>
            <div className="flex flex-col space-y-12 mt-[114px] relative sm:space-y-10 sm:mt-[53px] sm:pl-4">
                <span className="text-[32px] text-black font-semibold sm:text-center sm:font-medium sm:leading-5 sm:leading-8 sm:font-semibold">Вам может <br className="hidden sm:flex"/> понравиться</span>
                <div className="flex space-x-6 w-full overflow-auto sm:space-x-4">
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                    <ProductCard className={`!min-w-[290px] sm:!min-w-[173px]`} />
                </div>
            </div>
        </BaseLayout>
    )
}