import React from "react";
import { Link } from 'react-router-dom';

export const Menu = () => {
    const menuItem = [
        {
            title: 'Новинки',
            link: '',
        },
        {
            title: 'Бренды',
            link: '',
        },
        {
            title: 'Одежда',
            link: '',
        },
        {
            title: 'Обувь',
            link: '',
        },
        {
            title: 'Аксессуары',
            link: '',
        },
        {
            title: <span className="text-[#FF4040]">Sale</span>,
            link: '',
        }
    ]
    return (
        <div className="flex w-[567px] justify-between">
            {menuItem.map((item, itemIndex) => {
                return (
                    <a href={item?.link} key={itemIndex} className="z-[111] hover:text-white cursor-pointer">
                        <span className="text-black font-medium">{item?.title}</span>
                    </a>
                )
            })}
        </div>
    )
}