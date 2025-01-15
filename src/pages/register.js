import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    // checking login or not
    const isLoggedIn = JSON.parse(localStorage.getItem('login credentials'))
    console.log("isLoggedIn", isLoggedIn)
    if (isLoggedIn) {
      navigate('/')
    }
  }, [navigate])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstname) formErrors.firstname = 'Firstname is required';
    if (!formData.lastname) formErrors.lastname = 'Lastname is required';
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Perform signup logic here
      console.log('Form submitted', formData);
      localStorage.setItem('login credentials', JSON.stringify(formData))
      navigate('/')
      setFormData({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      setErrors({})
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center read-only:'>
        <div className='p-8 bg-gradient-to-b from-[#DEF4F9] to-[#F7EEF7] text-center w-1/2 max-w-lg border border-black-300 rounded-2xl'>
          <h1 className='text-sky-500 font-bold text-3xl uppercase'>Create An Account</h1>

          <form onSubmit={handleSubmit}>
          <div className='mt-8'>
              <label className='text-slate-900 font-medium flex ml-2'>First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                className='my-1 w-full h-8 rounded-md px-4'
                onChange={handleChange}
              />
              {errors.firstname && <span className='text-red-600 text-sm'>{errors.firstname}</span>}
            </div>
            <div className='mt-8'>
              <label className='text-slate-900 font-medium flex ml-2'>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                className='my-1 w-full h-8 rounded-md px-4'
                onChange={handleChange}
              />
              {errors.lastname && <span className='text-red-600 text-sm'>{errors.lastname}</span>}
            </div>
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
            <div className='mt-8'>
              <label className='text-slate-900 font-medium flex ml-2'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className='my-1 w-full h-8 rounded-md px-4'
                onChange={handleChange}
              />
              {errors.email && <span className='text-red-600 text-sm'>{errors.email}</span>}
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
            <div className='mt-4'>
              <label className='text-slate-900 font-medium flex ml-2'>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                autoComplete=''
                value={formData.confirmPassword}
                className='my-1 w-full h-8 rounded-md px-4 relative'
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className='text-red-600 text-sm'>{errors.confirmPassword}</span>}
            </div>
            <button type="submit"
              className=' border-none bg-sky-500 text-xl text-white w-full h-8 font-medium my-8 cursor-pointer rounded-xl hover:bg-sky-600'
            >Register</button>
            <h4 className='mt-0'>Already have an account?
              <Link className="text-sky-500 font-medium ml-2 cursor-pointer" to={'/login'}>Login</Link>
            </h4>
          </form >

        </div >
      </div >
    </>
  );
};

export default SignupForm;

