import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
  
  /*const [username, setusername] = useState('')

  if(!data){
    setusername('Admin')
  } else {
    setusername(data.name)
  }*/
  
const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  //window.location.reload()
}

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{name}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header