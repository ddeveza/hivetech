import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usersStatusSelector } from '../../features/users/usersSelector';
import { signin } from '../../features/users/usersSlice';
import './Signin.css';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialValues);
  const { loading, error, success } = useSelector(usersStatusSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (success) {
    navigate('/home');
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSignin = () => {
    dispatch(signin(values));
  };

  return (
    <section className='main-wrapper'>
      <div className='sign-in'>
        <p className='title'>SIGN IN</p>
        <div className='form-container'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='custom-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            required
            value={values.email}
            onChange={handleChange}
          />

          <label className='mt-2' htmlFor='email'>
            Password
          </label>
          <input
            className='custom-input'
            type='password'
            name='password'
            placeholder='Enter Password'
            required
            value={values.password}
            onChange={handleChange}
          />

          <button className='custom-btn' onClick={onSignin}>
            {loading ? 'Signing in.....' : 'SIGN IN'}
          </button>
          <p>
            New Customer ? <Link to={'/signup'}>Register</Link>
          </p>
          <p style={{ color: 'red', fontWeight: 'bold' }}>{error?.error}</p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
