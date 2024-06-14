import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  // Initializing the navigate 
  const navigate  = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // change the proxy in the vite.config.js

    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All fields are required");
    }

    try {

      // Setting the loading effect
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if(data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);

      // used react useNavigate hook
      if(res.ok) {
        navigate('/sign-in')
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

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
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>  
              <div>
                <Label value='Your Username' />
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                  onChange={handleChange}
                  />
              </div>
              <div>
                <Label value='Your Email' />
                <TextInput
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  onChange={handleChange}
                  />
              </div>
              <div>
                <Label value='Your Password' />
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                  />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                {
                  loading ? (
                    <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading ...</span>
                    </>
                  ) : 'Sign Up'
                }
              </Button>
            </form>
            <div className="text-sm mt-3">
              <Link to='/sign-in' className='text-blue-500'>
              <span className='text-black'>Have an Account? </span>
                Sign In
              </Link>
            </div>
            { 
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              ) 
            }
          </div>
        </div>
      </div> 
    </>
  )
}

export default SignUp

// last video time - 2:04:42 / 11:51:31