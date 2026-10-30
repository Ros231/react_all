import React, { useState } from 'react'
import bmrimg from "../assets/bmr.png"
import { Link } from 'react-router'

export default function bmr() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmrResult, setBmrResult] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!weight || !height || !age) {
      alert('กรุณากรอกข้อมูลน้ำหนัก ส่วนสูง และอายุให้ครบถ้วน')
      return
    }

    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)

    let result = 0
    if (gender === 'male') {
      // สำหรับผู้ชาย : BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) - (6.8 x อายุ)
      result = 66 + (13.7 * w) + (5 * h) - (6.8 * a)
    } else {
      // สำหรับผู้หญิง : BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) - (4.7 x อายุ)
      result = 665 + (9.6 * w) + (1.8 * h) - (4.7 * a)
    }

    setBmrResult(result.toFixed(2))
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setAge('')
    setGender('male')
    setBmrResult('0.00')
  }

  return (
    <>
      <div className='flex flex-col items-center p-15 w-200 mt-20 mb-20 mx-auto rounded-xl 
      border-2 border-gray-500 shadow-2xl'>
        {/* show calculate */}
        <p className='text-3xl font-kanit font-bold text-center'>
          BMR Calculator
        </p>

        <p className='text-lg font-kanit text-center text-gray-700'>
          คำนวนหาค่า BMR
        </p>

        {/* img */}
        <img src={bmrimg} alt="bmr" className='mt-5 w-30' />

        {/* insert data */}
        <form onSubmit={handleCalculate} className='w-full flex flex-col'>
          <label className='font-kanit font-bold'> น้ำหนัก (กิโลกรัม)</label>
          <input 
            type='number' 
            step="any"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="เช่น 60"
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

          <label className='font-kanit font-bold mt-5'> อายุ (ปี)</label>
          <input 
            type='number' 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="เช่น 25"
            className='border border-gray-300 rounded-sm p-2' 
          />

          <label className='font-kanit font-bold mt-5'> เพศ</label>
          <div className='flex flex-col gap-2 mt-2'>
            <label className='flex items-center gap-2 font-kanit text-gray-700 cursor-pointer'>
              <input 
                type='radio' 
                name='gender' 
                value='male' 
                checked={gender === 'male'} 
                onChange={(e) => setGender(e.target.value)}
                className='cursor-pointer' 
              />
              ชาย
            </label>
            <label className='flex items-center gap-2 font-kanit text-gray-700 cursor-pointer'>
              <input 
                type='radio' 
                name='gender' 
                value='female' 
                checked={gender === 'female'} 
                onChange={(e) => setGender(e.target.value)}
                className='cursor-pointer' 
              />
              หญิง
            </label>
          </div>

          <div className='flex gap-3 mt-5'>
            <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer'>
              คำนวน BMR
            </button>
            <button type='button' onClick={handleReset} className='w-full bg-red-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-red-800 cursor-pointer'>
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* showing data */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>BMR ที่คำนวนได้</p>
          <p className='font-kanit font-bold mt-5 text-blue-400'>{bmrResult}</p>
        </div>

        {/* back to home page */}
        <Link to="/" className='mt-5 w-full text-center bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold'>
          back to home page
        </Link>
      </div>
    </>
  )
}
