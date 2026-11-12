import React from 'react'
import Navbar from '../components/navbar'
import { FaGithub } from 'react-icons/fa'

import imgBike from '../assets/img2.png'
import imgLearnify from '../assets/img3.png'
import imgAnime from '../assets/img4.png'
import imgTechZ from '../assets/img5.png'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar pname="portfolio" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-serif text-center mb-16">Portfolio</h1>

        <div className="flex flex-col gap-16">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img src={imgBike} alt="Bikes and Beards" className="rounded-xl w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-bold mb-2">Bikes and Beards</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  View
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-gray-300">
                  <FaGithub className="text-xl" />
                  Git code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-lg font-bold mb-2">Learnify</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  View
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-gray-300">
                  <FaGithub className="text-xl" />
                  Git code
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src={imgLearnify} alt="Learnify" className="rounded-xl w-full" />
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img src={imgAnime} alt="Anime-X" className="rounded-xl w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-bold mb-2">Anime-X</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed!
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  View
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-gray-300">
                  <FaGithub className="text-xl" />
                  Git code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-lg font-bold mb-2">Tech-Z</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                  View
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-gray-300">
                  <FaGithub className="text-xl" />
                  Git code
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src={imgTechZ} alt="Tech-Z" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
