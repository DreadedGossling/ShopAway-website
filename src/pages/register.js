import React, { useState, useEffect } from 'react';
import '../styles/register.css'
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create An Account</h1>

          <img src="/shop@way.png" alt="shop@way" height={100} />

          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
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
            <input
              type="password"
              name="password"
              autoComplete=''
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              autoComplete=''
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Sign Up</button>
          <h4>Already have an account?
            <Link to={'/login'}
              style={{ color: 'blue', marginLeft: '4px' }}>Login</Link>
          </h4>

        </form>
      </div>
    </>
  );
};

export default SignupForm;

