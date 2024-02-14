"use client"

import { Button, TextField } from '@mui/material'
import styles from './login.module.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useDispatch } from 'react-redux';
import {authenticateUser} from '../../store/auth-slice'
import MuiSnackbar from '@/components/snackbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();

 const dispatch=useDispatch()
const [userData, setUserData] = useState({
  email:'',
  password:''
});
const [errMsg, setErrMsg] = useState('');
// ------------------------------------------------------------------------------------------------
const login= async(e)=>{
e.preventDefault();
  e.preventDefault();
  try{
    let user=await signInWithEmailAndPassword(auth, userData.email, userData.password)
dispatch(authenticateUser(JSON.stringify(user)))
router.push('/');


  }catch(error){
    setErrMsg(error.message==='Firebase: Error (auth/invalid-credential).'?"Invalid Email or Password":error.message)

  }

// ------------------------------------------------------------------------------------------------

}

  return (
    <div style={{ backgroundColor: ' #080710', height: '100vh' }}>

      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form onSubmit={login} className={styles.login_form}>
        <h3>Login</h3>

        <TextField id="Email" label="Email" variant="filled" size='small'
          InputLabelProps={{
            style: { color: '#000 ' }
          }}
          value={userData.email||''}
          onChange={(e)=>{
            setUserData(prev=>({...prev,email: e.target.value}))
          }}
          />
        <TextField id="Email" label="Password" variant="filled" size='small'

          InputLabelProps={{
            style: { color: '#000' }
          }}
          value={userData.password||''}
          onChange={(e)=>{
            setUserData(prev=>({...prev,password:  e.target.value}))
          }} />
        <Button type='submit' variant='contained' color='primary'>Login</Button>
        <p className="mt-3">Dont have an account? <Link style={{color:'blue'}} href="/register">Register</Link></p>

      </form>

      <MuiSnackbar msg={errMsg} setMsg={setErrMsg}/>

    </div>
  )
}
