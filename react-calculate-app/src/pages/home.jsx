import React from 'react'

import Calculate from './../assets/calculate.png'
import bmi from "../assets/bmi.png"
import bmr from "../assets/bmr.png"
import car from "../assets/Car.png"

import Cardmenu from '../components/cardmenu'
import Footer from '../components/footer'

import { Link } from 'react-router'
export default function home() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <img src={Calculate} alt='calculate' className='w-30 mt-30' />


        <p className='font-kanit text-3xl font-bold mt-5'>
          เครื่องคำนวนออนไลน์
        </p>

        <p className='font-itim text-xl text-gray-700'>
          เลือกการคำนวนที่ต้องการจากเมนูด้านล่าง
        </p>

        {/* show menu for calculate */}

        <div className='flex mt-30 gap-10'>
          <Link to = '/Bmi'>
            <Cardmenu img = {bmi} title = "BMI (ดัชนี้มวลกาย)" sub = "คำนวนว่าน้ำหนักกับส่วนสูงเหมาะสมกันไหม" />
          </Link>

          <Link to = '/Bmr'>
            <Cardmenu img = {bmr} title = "BMR (อัตราการเผาผลาญร่างกาย)" sub = "คำนวนความต้องการในการเผาผลาญร่างกาย" />
          </Link>

          <Link to = '/Car'>
            <Cardmenu img = {car} title = "Car (เงินผ่อนต่อเดือน)" sub = "คำนวนเงินผ่อนต่อเดือน"/>
          </Link>
        </div>

      {/* footer */}
      <Footer/>
      </div>

    </>
  )
}
