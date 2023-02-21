import React, { useState } from "react";
import 'tailwindcss/tailwind.css'

export default function Search(props) {
    return (
        <div className="font-['Noto_sans'] font-[600] py-10 container flex  flex-col mx-auto justify-between md:flex-row">
            {/* Search Bar */}
            <div id="Search bar">
                <input 
                    type={"text"}
                    placeholder="Search for a Country..."
                    value={props.query}
                    onChange={(e) => props.setQuery(e.target.value)}
                    className=" px-20 rounded-sm text-left py-3 border-none text-white bg-[#ffffff] dark:bg-[#2b3945] shadow-md"
                />
            </div>
            
           {/* Dropdown Menu */}
            <div>

               <button id="dropdownButton" className="flex bg-[#ffffff] dark:bg-[#2b3945] py-2 px-4 text-white rounded-sm shadow-md mt-10 md:mt-0" onClick={(e) => props.setIsActive(!props.isActive)}>{props.selected}
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                 {/* Dropdown List */}

                <div className="text-sm shadow-md" aria-labelledby="dropdownDefaultButton">
                   {props.isActive && (
                        <ul className="absolute z-10 text-black bg-[#ffffff] dark:bg-[#2b3945] mt-1 w-[152px] text-left rounded-sm">
                            {props.options.map(option => (
                                <li onClick={(e) => {
                                        props.setSelected(option)
                                        props.setIsActive(false)
                                    }} 
                                    className="block px-4 py-2 cursor-pointer hover:bg-violet-600 dark:hover:bg-white dark:hover:text-white "
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )} 
                </div>
                
            </div>
            
        </div>
    )
}
