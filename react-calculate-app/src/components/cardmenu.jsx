import React from 'react'
import Bmi from "../assets/bmi.png"


export default function cardmenu({img, title, sub}) {
  return (
    <>
        <div className='w-100 border border-gray-500 p-10 rounded-3xl shadow-2xl flex flex-col items-center'>
            <img src={img} alt='Bmi' className='w-35'/>

            <p className='mt-3 font-kanit text-xs font-bold'>
                {title}
            </p>

            <p className='mt-4 font-charm text-lg text-gray-500 text-center'>
                {sub}
            </p>
        </div>
    </>
  )
}
