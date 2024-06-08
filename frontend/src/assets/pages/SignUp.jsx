import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col  md:flex-row md:items-center">

          {/* Left */}
          <div className="flex-1">
            <Link to="/" className='text-4xl sm:text-xl font-bold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                    webwizards
                </span>
                    blog
            </Link>
            <p className='text-xm mt-5'>
              This is demo project. You can sign up with your email and password
              or with Google.
            </p>
          </div>

          {/* Right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4'>  
              <div>
                <Label value='Your Username' />
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                  />
              </div>
              <div>
                <Label value='Your Email' />
                <TextInput
                  type='text'
                  placeholder='name@company.com'
                  id='email'
                  />
              </div>
              <div>
                <Label value='Your Password' />
                <TextInput
                  type='text'
                  placeholder='Password'
                  id='password'
                  />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' className=''>
                Sign Up
              </Button>
            </form>
            <div className="text-sm mt-3">
              <Link to='/sign-in' className='text-blue-500'>
              <span className='text-black'>Have an Account? </span>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default SignUp
