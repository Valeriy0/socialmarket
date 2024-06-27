import React from "react";
import { Menu } from "./menu";
import { RightMenu } from "./rightMenu";

export const Header = () => {
    return (
        <div className="flex w-full justify-between fixed top-0 h-[72px] bg-white py-5 px-11 headerShadow z-[111]">
            <img className="w-[90px] h-8" src="/icons/header/logoIcon.svg"/>
            <Menu />
            <RightMenu />
        </div>
    )
}