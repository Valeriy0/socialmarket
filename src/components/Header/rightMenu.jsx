import React from "react";
import { Link } from "react-router-dom";

export const RightMenu = () => {
    return (
        <div className="flex items-center jsutify-between space-x-3">
            <button>
                <img src="/icons/header/searchIcon.svg"/>
            </button>
            <button>
                <img src="/icons/header/favoritesIcon.svg"/>
            </button>
            <Link to={'/cart'} className="flex items-center justify-center bg-black rounded-full w-[64px] h-8 space-x-1">
                <img className="z-[11]" src="/icons/header/basketIcon.svg"/>
                <span className="text-white font-extralight text-sm">12</span>
            </Link>
            <button>
                <img src="/icons/header/accountIcon.svg"/>
            </button>
        </div>
    )
}