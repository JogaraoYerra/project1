import React, { useState } from 'react'

const App = () => {
  const [data,setData] =useState({  
      username :'',
      password :''   
  })
  const {username,password}=data;
  const changeHolder= e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventfault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>

          Name:<input type="text" name="username" value={username} onChange={changeHolder}/> <br/>

         Password: <input type="password" name="password" value={password} onChange={changeHolder}/> <br/>

          <input type="submit" name="submit"/> <br/>

        </form>
      </center>
    </div>
  )
  }
export default App