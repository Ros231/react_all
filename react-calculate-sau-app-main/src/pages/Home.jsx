import React from 'react'
import calculate from './../assets/calculate.png'
import Bmi from './../assets/bmi.png'
import Bmr from './../assets/bmr.png'
import Car from './../assets/car.png'
import CardMenu from './../components/CardMenu'
import Footer from './../components/Footer'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center'>
        {/* ส่วนใส่รูป */}
        <img src={calculate} alt="calculate" className='w-30 mt-20'/>
        {/* ส่วนใส่ข้อความ */}
        <p className='font-kanit text-3xl font-bold mt-5'>
          เครื่องคำนวนออนไลน์
        </p>
        <p className='font-itim text-xl'>
          เลือกการคำนวนจากแถบเมนูด้านล่าง
        </p>
        {/* ส่วนเมนู 3 เมนู */}
        <div className='flex mt-20 gap-10'>
          <Link to="bmi">
          <CardMenu imgshow={Bmi} titleshow="BMI (คำนวนดัชนีมวลกาย)" stitleshow="คำนวนน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่"/>
          </Link>

          <Link to="bmr">
          <CardMenu imgshow={Bmr} titleshow="BMR (อัตราเผาผลาญร่างกาย)" stitleshow="คำนวนอัตราเผาผลาญที่ร่างกายต้องการ"/>
          </Link>

          <Link to="car">
          <CardMenu imgshow={Car} titleshow="BMI (เงินผ่อนรถต่อเดือน)" stitleshow="คำนวนเงินผ่อนรถยนต์หรือรถจักรยานยนต์ต่อเดือน"/>
          </Link>
        </div>
        {/* ส่วน footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
