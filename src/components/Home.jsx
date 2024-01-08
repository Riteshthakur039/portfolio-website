import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-gradient-to-b from-black via-black to-gray-800 text-white w-full h-screen'>
      <div className='pb-2 max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold'>I'am a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md '>A well-organized, creative and goal- oriented graduate possessing excellent communication, problem-solving and
leadership skills with a flair to explore suitable avenues in Computer Science Engineering while developing advanced projects with efficiency and quality
.</p>

            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer'>
                    Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={20} className='ml-1'/></span>
                </Link>
            </div>
        </div>

        <div>
            <img src={HeroImage} alt="my profile" className='h-60 md:h-auto rounded-2xl mx-auto md:w-[80%]' />
        </div>
      </div>
    </div>
  )
}

export default Home
