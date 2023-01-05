import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'

const Login = () => {
  const {token}=useSelector(state=>state.userInfo)
  
  const {register, handleSubmit}=useForm()

 

  const dispatch=useDispatch()

  const submit=(data)=>{
    console.log(data);
    dispatch(loginUserThunk(data))
  }

  const handleClickLogout=()=>{
    dispatch(logOutThunk())
  }


  return (
    <main>
      {
        token?(
          <section>
            <i className='bx bxs-user-circle' ></i>
            <h3></h3>
            <button onClick={handleClickLogout}>Logout</button>
          </section>
        ): (
          <form onSubmit={handleSubmit(submit)}>
        <h3></h3>
        <div>
          <h4>Test data</h4>
          <p>john@gmail.com</p>
          <p>john1234</p>
        </div>
        <div>
          <label >Email</label>
          <input type="email"{...register("email")} />
        </div>
        <div>
          <label >Password</label>
          <input type="password"{...register("password")} />
        </div>
        <button>Login</button>
        <p>Don't have an account <span>Sign up NOW</span> </p>
      </form>
        )
      }

      
    </main>
  )
}

export default Login