// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = () => {
  return (
    <div className='w-2/6 h-[150px] border border-grey-200 flex gap-5 justify-evenly items-center' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <img src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png' alt='card-img' />
        <div>
            <h3 className='text-xl'>Kalvium</h3>
            <p className='text-gray-500'>
                You have a new course!
            </p>
        </div>

    </div>
  )
}

export default Card;