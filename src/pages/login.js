import React, { useState, useEffect } from 'react';
import '../styles/register.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('login successfull', formData);
      localStorage.setItem('login credentials', JSON.stringify(formData))
      navigate('/')
      setErrors({})
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="form-container" >
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>

          <img src="/shop@way.png" alt="shop@way" height={100} />
          <div style={{ marginTop: '40px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <div className="pass-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                autoComplete=''
                value={formData.password}
                onChange={handleChange}
              />
              <i onClick={() => setPasswordVisible(!passwordVisible)}
                className="password-toggle-button">
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </i>
              {errors.password && <span>{errors.password}</span>}
            </div>

          </div>
          <button type="submit">Login</button>
          <h4>Don't have an account?
            <Link to={'/register'}
              style={{ color: 'blue', marginLeft: '4px' }}>Create an account</Link>
          </h4>
        </form >
      </div >
    </>
  );
};

export default Login;

