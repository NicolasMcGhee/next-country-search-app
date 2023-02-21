import Link from "next/link"
import React from "react";
import 'tailwindcss/tailwind.css'


export default function Countries({ countryData }) {
    return (
      <section className="container m-auto bg-[rgb(32, 44, 55)] dark:bg-[#202c37] text-[14px] px-10 grid gap-14 grid-cols-1 xl:md:grid-cols-4 lg:md:grid-cols-3 md:grid-cols-2 md:px-0">
      {countryData.map(item => (
        <div key={item.altSpellings[0]} className="drop-shadow-lg rounded-lg bg-[#ffffff] dark:bg-[#2b3945]">
          {/* Country Card */}
            <div>
              <img src={item.flags.png} alt="Flag of Country" className="h-48 w-96 rounded-t-lg  z-0"/>
            </div>
            <div className=" text-left ml-8 text-white py-6 leading-7 font-['Noto_sans']">
                <Link href="/country/[id]" as={`/country/${item.ccn3}`}><h1 className="mb-6 text-2xl font-[800]">{item.name.common}</h1></Link>
                <h3><strong>Population:</strong> {item.population.toLocaleString()}</h3>
                <p><strong>Region:</strong> {item.region}</p>
                <p><strong>Capital:</strong> {item.capital ? item.capital : "None"}</p>
                <p><strong>Border:</strong> {item.subregion ? item.subregion : "None"}</p>
            </div>
        </div>
    ))}
    </section>
    )
}