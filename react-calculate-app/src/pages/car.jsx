import React, { useState } from 'react'
import carimg from "../assets/car.png"
import { Link } from 'react-router'

export default function car() {
  const [customerName, setCustomerName] = useState('')
  const [carPrice, setCarPrice] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [downPaymentPercent, setDownPaymentPercent] = useState('10')
  const [months, setMonths] = useState('24')
  const [installmentResult, setInstallmentResult] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!carPrice || !interestRate) {
      alert('กรุณากรอกราคารถและอัตราดอกเบี้ยให้ครบถ้วน')
      return
    }

    const price = parseFloat(carPrice)
    const rate = parseFloat(interestRate)
    const downPercent = parseFloat(downPaymentPercent)
    const totalMonths = parseInt(months, 10)

    // คำนวณงวดรถ เริ่มจาก
    // • คำนวณยอดจัดไฟแนนซ์: ราคารถ - เงินดาวน์
    const downPayment = price * (downPercent / 100)
    const financeAmount = price - downPayment

    // • คำนวณดอกเบี้ย: ยอดจัดไฟแนนซ์ x อัตราดอกเบี้ยรายปี x จำนวนปีที่ผ่อน
    const years = totalMonths / 12
    const totalInterest = financeAmount * (rate / 100) * years

    // • คำนวณยอดรวมทั้งหมดที่ต้องผ่อน: ยอดจัดไฟแนนซ์ + ดอกเบี้ยทั้งหมด
    const totalAmount = financeAmount + totalInterest

    // • คำนวณค่างวดต่อเดือน: ยอดรวมทั้งหมดที่ต้องผ่อน / จำนวนเดือนที่ผ่อน
    const monthlyInstallment = totalAmount / totalMonths

    setInstallmentResult(
      monthlyInstallment.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    )
  }

  const handleReset = () => {
    setCustomerName('')
    setCarPrice('')
    setInterestRate('')
    setDownPaymentPercent('10')
    setMonths('24')
    setInstallmentResult('0.00')
  }

  return (
    <>
      <div className='flex flex-col items-center p-15 w-200 mt-20 mb-20 mx-auto rounded-xl 
      border-2 border-gray-500 shadow-2xl'>
        {/* show calculate */}
        <p className='text-3xl font-kanit font-bold text-center'>
          Car Installment Calculator
        </p>

        <p className='text-lg font-kanit text-center text-gray-700'>
          คำนวนค่างวดรถยนต์
        </p>

        {/* img */}
        <img src={carimg} alt="car" className='mt-5 w-30' />

        {/* insert data */}
        <form onSubmit={handleCalculate} className='w-full flex flex-col'>
          <label className='font-kanit font-bold'> ชื่อผู้ขอสินเชื่อ</label>
          <input 
            type='text' 
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="เช่น สมชาย ใจดี"
            className='border border-gray-300 rounded-sm p-2' 
          />

          <label className='font-kanit font-bold mt-5'> ราคารถ (บาท)</label>
          <input 
            type='number' 
            step="any"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            placeholder="เช่น 600000"
            className='border border-gray-300 rounded-sm p-2' 
          />

          <label className='font-kanit font-bold mt-5'> ดอกเบี้ยต่อปี (%)</label>
          <input 
            type='number' 
            step="any"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="เช่น 4"
            className='border border-gray-300 rounded-sm p-2' 
          />

          <label className='font-kanit font-bold mt-5'> เงินดาวน์ (%)</label>
          <div className='flex items-center gap-6 mt-2'>
            {['10', '15', '20', '25', '30'].map((percent) => (
              <label key={percent} className='flex items-center gap-1 font-kanit text-gray-700 cursor-pointer'>
                <input 
                  type='radio' 
                  name='downPayment' 
                  value={percent} 
                  checked={downPaymentPercent === percent} 
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                  className='cursor-pointer' 
                />
                {percent}%
              </label>
            ))}
          </div>

          <label className='font-kanit font-bold mt-5'> จำนวนเดือนที่ผ่อน</label>
          <select 
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className='border border-gray-300 rounded-sm p-2 font-kanit bg-white cursor-pointer'
          >
            <option value='24'>24 เดือน</option>
            <option value='36'>36 เดือน</option>
            <option value='48'>48 เดือน</option>
            <option value='60'>60 เดือน</option>
            <option value='72'>72 เดือน</option>
            <option value='84'>84 เดือน</option>
          </select>

          <div className='flex gap-3 mt-5'>
            <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer'>
              คำนวน
            </button>
            <button type='button' onClick={handleReset} className='w-full bg-gray-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-gray-800 cursor-pointer'>
              ยกเลิก
            </button>
          </div>
        </form>

        {/* showing data */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>ค่างวดต่อเดือนเป็นเงิน</p>
          <p className='font-kanit font-bold mt-5 text-blue-400'>{installmentResult}</p>
          <p className='font-kanit font-bold mt-5'>บาท</p>
        </div>

        {/* back to home page */}
        <Link to="/" className='mt-5 w-full text-center bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold'>
          back to home page
        </Link>
      </div>
    </>
  )
}
