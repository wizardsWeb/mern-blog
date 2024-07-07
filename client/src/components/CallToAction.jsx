import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <>
    <div className="flex flex-col sm:flex-row border p-3 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
        <div className="flex-1 justify-center flex flex-col text-center">
            <h1 className='text-2xl'>
                Want to learn more about Javascript
            </h1>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 javascript
            </p>
            <Button gradientDuoTone={'purpleToPink'} className='rounded-tl-xl rounded-bl-none'>
                <a href="#" rel='noopener noreferrer'>
                    100 JavaScript Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" alt="JavaScript" />
        </div>
    </div> 
    </>
  )
}
