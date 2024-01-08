import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-2 mt-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            <p className='text-xl mt-20'>
            Hello! I'm Ritesh Thakur, a passionate and versatile software developer with a strong commitment to crafting elegant, efficient, and user-centric solutions. I'm driven by a love for technology and a desire to create meaningful software that makes a difference.
            </p>
            <br />
            <p className='text-xl'>
            I am a graduate in Computer Science and engineering from the University of Chandigarh University.I did my schooling at Alpha Public School.About my family, there are 4 members including me, my sister, and my parents.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
