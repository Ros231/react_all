import React from 'react'
import { Link } from 'react-router-dom'
import Bmiimg from './../assets/bmi.png'

export default function Bmi() {
  return (
    <>
      <div className=' w-200 mt-40 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-25'>
        {/* ส่วนคำนวน */}
        <p className='text-3xl font-kanit font-bold text-center'>
          BMI (ดัชนีมวลกาย)
        </p>
        <p className='text-lg font-kanit text-center text-gray-700'>
          คำนวนดัชนีมวลกาย
        </p>
        {/* ส่วนรูป */}
        <img src={Bmiimg} alt='Bmi' className='wt-5 w-30'/>
        {/* ส่วนของ form */}
        <form className='w-full flex flex-col'>
            <label className='text-lg font-kanit font-bold text-gray-700'>
              น้ำหนัก (กิโลกรัม)
            </label>
            <input type="number" className='w-full border-2 border-gray-100 shadow-2xl p-2' />

            <label className='text-lg font-kanit font-bold text-gray-700'>
              ส่วนสูง (เมตร)
            </label>
            <input type="number" className='w-full border-2 border-gray-100 shadow-2xl p-2' />

            <button className='w-full bg-blue-500 text-white font-kanit font-bold p-2 mt-5 cursor-pointer'>
              คำนวน
            </button>

            <button className='w-full bg-red-500 text-white font-kanit font-bold p-2 mt-5 cursor-pointer'>
              ยกเลิก
            </button>
          {/* ส่วนแสดงผล */}
          <div className='flex items-center justify-center mt-5 gap-5'>
            <p className='text-lg font-kanit font-bold text-gray-700'>
              ค่า BMI ที่คำนวนได้
            </p>
            <p className='text-lg font-kanit font-bold text-gray-700'>
               : 0.0
            </p>
          </div>
          {/* ลิงค์ไปหาหลัก */}
          <Link to="/" className='w-full text-center bg-gray-500 text-white p-2 mt-2 rounded-sm font-kanit font-bold cursor-pointer'>
          กลับหน้าหลัก
          </Link>
        </form>
      </div>
    </>
  )
}
