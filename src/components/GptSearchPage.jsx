import React from 'react'
import GptSearchBar from './gptSearchBar'

const GptSearchPage = () => {
  return (
    <div className=''>
      <img src="\src\assets\bg.jpg" alt="" className='-z-10 absolute h-[1000px] md:h-[717px] w-full object-cover -mt-28 md:-mt-28'/>
      <GptSearchBar />
      <h1 className='text-white text-3xl text-center py-16 md:py-8 md:text-5xl'>This feature is coming soon...</h1>
    </div>
  )
}

export default GptSearchPage