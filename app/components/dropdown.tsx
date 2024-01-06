import React, { useState, Children, ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Dropdown({heading, menuOpen, setMenuOpen, children}: {heading:string, menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, children: ReactNode}) {
    const [dropdownOpen, setDropDownOpen] = useState(false)
    return (
        <div className="[dropdown]">
            <div className="[dropdownButton] w-full h-[60px] px-[10px] space-x-[10px] border-2 border-gray-400 bg-gray-200 cursor-pointer flex flex-row" onClick={()=>setDropDownOpen(!dropdownOpen)}>
                <div className="[left] h-full w-full flex items-center justify-center">
                    <h3>{heading}</h3>
                </div>
                <div className="[right] h-full w-full flex items-center justify-center">
                    <FaAngleRight className={"text-xl transition-all duration-[1s] ease [&.active]:rotate-90 " + (dropdownOpen && "active")}/>
                </div>
            </div>
            <div className={"[subDropdown] flex flex-col w-full border-2 border-gray-400 p-[20px] transition-all duration-[1s] ease opacity-0 relative -top-[60px] z-[-1] [&.active]:opacity-100 [&.active]:top-0 [&.active]:z-0 " + (dropdownOpen && "active")}>
                {Children.map(children, (child: ReactNode) => {
                    if (React.isValidElement(child)) {
                        // Wrap the <p> element in an <li>
                        return <div onClick={()=>{setMenuOpen(false); setDropDownOpen(false);}} >{child}</div>;
                    }
                })}
            </div>
        </div>
        
    )
}
