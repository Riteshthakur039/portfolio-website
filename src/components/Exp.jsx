import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import reactImage from '../assets/reactImage.png'
import cpp from '../assets/cpp.png'
import tailwindcss from '../assets/tailwindcss.png'
import github from '../assets/github.png'
import js from '../assets/js.png'
import nextjs from '../assets/nextjs.png'
import nodejs from '../assets/nodejs.png'

const Exp = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-600'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-yellow-600'
        },
        {
            id:3,
            src:js,
            title:'JAVASCRIPT',
            style:'shadow-green-600'
        },
        {
            id:4,
            src:nextjs,
            title:'NEXTJS',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:reactImage,
            title:'REACT',
            style:'shadow-sky-600'
        },
        {
            id:6,
            src:cpp,
            title:'C++',
            style:'shadow-red-600'
        },
        {
            id:7,
            src:tailwindcss,
            title:'TAILWINDCSS',
            style:'shadow-pink-600'
        },
        {
            id:8,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-600'
        },
        {
            id:9,
            src:nodejs,
            title:'NODEJS',
            style:'shadow-purple-600'
        }
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-2 mt-28'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Exprience</p>
            <p className='py-4'>These are technologies I've worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-3 px-12 sm:px-0'>

            {
                techs.map(({id, src, title, style}) => (
                    <div
                    key={id} className={' shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+
                    " "+ style}>
                <img src={src} alt="" className=' w-5 md:w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
                ))
            }

            
        </div>
      </div>
    </div>
  )
}

export default Exp
