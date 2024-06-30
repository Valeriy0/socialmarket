import React from "react";

export const Input = ({title, placeholder }) => {
    return (
        <div className="flex flex-col space-y-3">
            <span className="text-black">{title}</span>
            <input className="h-[60px] pl-4 bg-[#F8F8F8] placeholder:font-light placeholder:black-300" placeholder={placeholder}/>
        </div>
    )
}