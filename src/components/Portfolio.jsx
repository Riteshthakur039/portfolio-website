import React from 'react'
import skill from '../assets/skill.png'
import interest from '../assets/Interest.png'
import language from '../assets/language.png'
import course from '../assets/course.png'
import certificates from '../assets/certificates.png'
import achv from '../assets/achv.png'

const Portfolio = () => {

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
      <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-3'>Check out some of work right here</p>
        </div>

        <div className='w-full text-center grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 px-12 sm:px-0'>
           
            <div
            className='w-60 shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={skill} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='text-red-500 hover:scale-150 '>Team Leadership | Management & Coordination | Decision Making | Team Work</p>
            </div>
            <div
            className='w-60  shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={interest} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='text-red-500 hover:scale-150 '>Painting | Travelling | Reading | Coding</p>
            </div>
            <div
            className='w-60  shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={language} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='mt-2 text-red-500 hover:scale-150 '>English | Hindi </p>
            </div>
            <div
            className='w-60 shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={course} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='text-xs flex text-red-500 hover:scale-150 '>Internshala Trainings- Android Development <br /> Internshala Trainings- Web Development <br /> Udemy Courses- Front End Development</p>
            </div>
            <div
            className='w-60  shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={certificates} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='text-red-500 hover:scale-150 '><a href="https://trainings.internshala.com/view_certificate/3DC79D97-8D21-4ABF-4C9D-C32F4451257E/600CCD32-A3E0-8537-5CB7-CE426491C1D1/">Web development certificate</a><br />
            <a href="https://trainings.internshala.com/view_certificate/1B02CEB6-5591-3397-CCB1-5BDAF1513869/A9CC5F96-61EA-6087-3D2F-6BA9EF11791D/">Android certificate</a><br />
            <a href="https://www.coursera.org/account/accomplishments/verify/EPTD3T2E7JMH">Machine learning certificate</a>
            </p>
            </div>
            <div
            className='w-60  shadow-md shadow-gray-600 rounded-lg hover:scale-105'>
            <img src={achv} alt="" className='w-60 mx-auto rounded-md duration-200 '/>
            <p className='mt-2 text-red-500 hover:scale-150 '> Win Trophy in Science Exhibition</p>
            </div>
     </div>

    </div>
</div>

  )
}

export default Portfolio
