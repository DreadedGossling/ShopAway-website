import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const Login = () => {
  const userLoggedIn = JSON.parse(localStorage.getItem('login credentials'));
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [alert, setAlert] = useState()
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/')
    }
  })

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        setUsers(data.users)
      });
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = '*Username is required';
    if (!formData.password) formErrors.password = '*Password is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      const user = users.find((u) => u.username === formData.username && u.password === formData.password)
      if (user) {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({

            username: formData.username,
            password: formData.password,
            expiresInMins: 30,
          })
        })
          .then(res => res.json())
          .then((data) => {
            localStorage.setItem('login credentials', JSON.stringify(data))
            navigate('/')
            setErrors({})
          });
      } else {
        setErrors({})
        setAlert(
          <div className='bg-yellow-400 text-white p-4 mt-1 w-fill flex font-medium'>
            <IoWarningOutline className='text-2xl mr-2' />
            <span>Invalid Credentials</span>
          </div>
        )
        setTimeout(() => {
          setAlert(null)
        }, 5000)
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <p className='absolute'>{alert}</p>
      </div>


      <div className='main'>
        <div className='main2'></div>
      </div>


      <div className='h-screen flex items-center justify-center read-only:'>
        <div className='p-8 bg-gradient-to-b from-[#DEF4F9] to-[#F7EEF7] text-center w-1/2  max-w-lg h-[450px] border border-black-300 rounded-2xl'>
          <h1 className='text-sky-500 font-bold text-3xl'>LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <div className='mt-8'>
              <label className='text-slate-900 font-medium flex ml-2'>User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                className='my-1 w-full h-8 rounded-md px-4'
                onChange={handleChange}
              />
              {errors.username && <span className='text-red-600 text-sm'>{errors.username}</span>}
            </div>
            <div className='mt-4'>
              <label className='text-slate-900 font-medium flex ml-2'>Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                autoComplete=''
                value={formData.password}
                className='my-1 w-full h-8 rounded-md px-4 relative'
                onChange={handleChange}
              />
              <i onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute -ml-6 mt-3 cursor-pointer">
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </i>
              {errors.password && <span className='text-red-600 text-sm'>{errors.password}</span>}
            </div>
            <button type="submit"
              className=' border-none bg-sky-500 text-xl text-white w-full h-8 font-medium my-8 cursor-pointer rounded-xl hover:bg-sky-600'
            >Login</button>
            <h4 className='mt-0'>Don't have an account?
              <Link className="text-sky-500 font-medium ml-2 cursor-pointer" to={'/register'}>Click to register</Link>
            </h4>
          </form >

        </div>
      </div>
    </>
  )
}

export default Login