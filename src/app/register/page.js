"use client"
import { Button, Snackbar, TextField } from '@mui/material';
import styles from './register.module.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useDispatch } from 'react-redux';
import {authenticateUser} from "../../store/auth-slice"
import { useRouter } from 'next/navigation';
import MuiSnackbar from '@/components/snackbar';
import Link from 'next/link';

export default function Page() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [errMsg, setErrMsg] = useState('');
  
  const dispatch=useDispatch()
  const router = useRouter();
// -----------------------------------------------------------------------------------------

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
// -----------------------------------------------------------------------------------------

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setUserData((prev) => ({ ...prev, email: value }));
    setEmailError(validateEmail(value) ? '' : 'Invalid email format');
  };
// -----------------------------------------------------------------------------------------
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setUserData((prev) => ({ ...prev, password: value }));
    setPasswordError(value.length >= 6 ? '' : 'Password must be at least 6 characters long');
  };
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
const register = async (e) => {
    e.preventDefault();

    if (!validateEmail(userData.email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    if (userData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    try {
      let user = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      dispatch(authenticateUser(JSON.stringify(user)));
      router.push('/');
    } catch (error) {
      setErrMsg(error.message==='Firebase: Error (auth/email-already-in-use).'?"Email Already in Use":error.message)
    }
  };
// -----------------------------------------------------------------------------------------

  return (
    <div style={{ backgroundColor: '#080710', height: '100vh' }}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form onSubmit={register} className={styles.register_form}>
        <h3>Register</h3>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          size="small"
          InputLabelProps={{
            style: { color: '#000 ' }
          }}
          value={userData.email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          size="small"
          type="password"
          InputLabelProps={{
            style: { color: '#000' }
          }}
          value={userData.password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <p className="mt-3">have an account? <Link style={{color:'blue'}} href="/login">Login</Link></p>

      </form>
      <MuiSnackbar msg={errMsg} setMsg={setErrMsg}/>
    </div>
  );
}
