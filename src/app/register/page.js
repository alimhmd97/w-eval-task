"use client"

import { Button, TextField } from '@mui/material'
import styles from './register.module.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
export default function Page() {

const [userData, setUserData] = useState({
  email:'',
  password:''
});

const register=async(e)=>{
e.preventDefault();
try{
  let user=await createUserWithEmailAndPassword(auth, userData.email, userData.password)
  console.log(user);
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
      <form onSubmit={register} className={styles.register_form}>
        <h3>Register</h3>

        <TextField id="Email" label="Email" variant="filled" size='small'
          InputLabelProps={{
            style: { color: '#000 ' }
          }}
          value={userData.email||''}
          onChange={(e)=>{
            setUserData(prev=>({...prev,email: e.target.value}))
          }}
          />
        <TextField id="Email" label="Email" variant="filled" size='small'

          InputLabelProps={{
            style: { color: '#000' }
          }}
          value={userData.password||''}
          onChange={(e)=>{
            setUserData(prev=>({...prev,password: e.target.value}))
          }} />
        <Button type='submit' variant='contained' color='primary'>Register</Button>
      </form>

    </div>
  )
}
