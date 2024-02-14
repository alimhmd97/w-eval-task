"use client"

import { Button, TextField } from '@mui/material'
import styles from './login.module.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useDispatch } from 'react-redux';
import {authenticateUser} from '../../store/auth-slice'

export default function Page() {
 const dispatch=useDispatch()
const [userData, setUserData] = useState({
  email:'',
  password:''
});

const login= async(e)=>{
e.preventDefault();
dispatch(authenticateUser({}))
  e.preventDefault();
  try{
    let user=await signInWithEmailAndPassword(auth, userData.email, userData.password)

  }catch(e){
    console.log(e);
  }


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
      </form>

    </div>
  )
}
