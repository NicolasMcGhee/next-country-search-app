import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunIcon from "../public/icons8-sun-50.png"
import MoonIcon from "../public/icons8-moon-symbol-60.png"
import Image from "next/image";
import React from "react";
import 'tailwindcss/tailwind.css'

export default function Navbar() {
    
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])



    function renderThemeChanger() {
        if(!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if(currentTheme === 'dark') {
            return (
                <Image src={SunIcon} alt="Sun Icon" width={50} height={50} onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <Image src={MoonIcon} alt="Moon Icon" width={50} height={50} onClick={() => setTheme('dark')} />
            )
        }
    }

    return(
        <div className="bg-[#ffffff] p-10 font-['Noto_sans'] dark:bg-[#2b3945]">
            <nav className="container m-auto">
                <div className="flex justify-between text-black dark:text-white">                
                    <h2 className="font-bold text-3xl">Where in the world?</h2>
                    {renderThemeChanger()}
                </div>
            </nav>
        </div>
        
    )
}