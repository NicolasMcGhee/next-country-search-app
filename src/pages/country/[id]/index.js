import React from "react";
import { useRouter } from "next/router";
import 'tailwindcss/tailwind.css'

//w-screen

export default function Country({ country }) {
    const router = useRouter()
    const { id } = router.query 
    return(
        <div className="font-['Noto_sans']">
            <div className="my-10 container m-auto">
                 <button type="button" onClick={() => router.back()} className="bg-[#ffffff] dark:bg-[#2b3945] drop-shadow-lg rounded-md">
                    <h1 className="text-white text-2xl  py-[10px] px-[50px]">&larr; Back</h1>
                </button>
            </div>
            
            {country.map(item => (
               <div key={item.altSpellings[0]} className="container font-['Noto_sans'] text-[16px] font-[600] m-auto flex justify-center md:space-x-20 md:flex-row sm:flex-col">
                    <div>
                        <img className="w-screen" src={item.flags.png} alt={item.flags.alt} />
                    </div>
        
                    <div className="container text-white">
                        <h1 className="pt-10 font-bold text-[40px]">{item.name.common}</h1>
                        <div className="flex md:flex-row sm:flex-col space-y-11 leading-loose md:space-x-10  items-baseline whitespace-nowrap">
                            <section>
                                <p><strong>Native Name</strong>: {Object.values(item.name.nativeName).map(({common}) => common).join(", ")}</p>
                                <p><strong>Population</strong>: {item.population.toLocaleString()}</p>
                                <p><strong>Region</strong>: {item.region}</p>
                                <p><strong>Sub Region</strong>: {item.subregion ? item.subregion : "None"}</p>
                                <p><strong>Capital</strong>: {item.capital ? item.subregion : "None"}</p>
                            </section>
                            <section className="">
                                <p><strong>Top Level Domain</strong>: {item.tld[0]}</p>
                                <p><strong>Currencies</strong>: {Object.values(item.currencies ? item.currencies : "None").map(({name}) => name).join(", ")}</p>
                                <p><strong>Lanugauges</strong>: {Object.values(item.languages).join(", ")}</p>
                            </section>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${context.params.id}`)
    const country = await res.json()
    
    return { props: { country } }
}