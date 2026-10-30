import React, { useState } from 'react'
import bmiimg from "../assets/bmi.png"
import { Link } from 'react-router'

export default function bmi() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiResult, setBmiResult] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!weight || !height) {
      alert('กรุณากรอกข้อมูลน้ำหนักและส่วนสูงให้ครบถ้วน')
      return
    }

    const w = parseFloat(weight)
    const h = parseFloat(height) / 100 // แปลงเซนติเมตรเป็นเมตร

    if (w > 0 && h > 0) {
      const result = w / (h * h)
      setBmiResult(result.toFixed(2))
    }
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setBmiResult('0.00')
  }

  return (
    <>
      <div className='flex flex-col items-center p-15 w-200 mt-20 mb-20 mx-auto rounded-xl 
      border-2 border-gray-500 shadow-2xl'>
        {/* show calculate */}
        <p className='text-3xl font-kanit font-bold text-center'>
          BMI (ดัชนีมวลการ)
        </p>

        <p className='text-lg font-kanit text-center text-gray-700'>
          คำนวนค่าดัชนีมวลกาย
        </p>

        {/* img */}
        <img src={bmiimg} alt="bmi" className='mt-5 w-30' />

        {/* insert data */}
        <form onSubmit={handleCalculate} className='w-full flex flex-col'>
          <label className='font-kanit font-bold'> น้ำหนัก (กิโลกรัม)</label>
          <input 
            type='number' 
            step="any"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="เช่น 65"
            className='border border-gray-300 rounded-sm p-2' 
          />
          
          <label className='font-kanit font-bold mt-5'> ส่วนสูง (เซนติเมตร)</label>
          <input 
            type='number' 
            step="any"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="เช่น 170"
            className='border border-gray-300 rounded-sm p-2' 
          />

          <button type='submit' className='bg-blue-600 text-white p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer'>
            คำนวน
          </button>
          <button type='button' onClick={handleReset} className='bg-gray-600 text-white p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-gray-800 cursor-pointer'>
            ยกเลิก
          </button>
        </form>

        {/* showing data */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>BMI ที่คำนวนได้</p>
          <p className='font-kanit font-bold mt-5 text-blue-400'>{bmiResult}</p>
        </div>
        
        {/* back to home page */}
        <Link to="/" className='mt-5 w-full text-center bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold'>
          back to home page
        </Link>
      </div>
    </>
  )
}
