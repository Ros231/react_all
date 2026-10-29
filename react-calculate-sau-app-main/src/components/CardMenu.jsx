import React from 'react'
import Bmi from './../assets/bmi.png';

export default function CardMenu({imgshow,titleshow,stitleshow}) {
  return (
    <>
      <div className='w-70 border-1 border-gray-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center'>
        <img src={imgshow} alt="bmi" className='w-35'/>
        <p className='mt-5 font-kanit text-xl font-bold'>
          {titleshow}
        </p>
        <p className='mt-5 font-charm text-lg text-gray-500 text-center'>
          {stitleshow}
        </p>
      </div>
    </>
  )
}
