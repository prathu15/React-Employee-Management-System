import React, { useState } from 'react'



    
     
    const Login = ({ handleLogin }) => {
        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');
    
        const submitHandler = (e) => {
            e.preventDefault();
            handleLogin(email, password);  // This should now correctly call handleLogin
            setemail('');
            setpassword('');
        };

  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e) =>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 placeholder:text-gray-400 border-emerald-600 py-4 px-5 text-xl rounded-full' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e) =>{
                    setpassword(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 mt-3 placeholder:text-gray-400 border-emerald-600 py-4 px-5 text-xl rounded-full' type="password" placeholder='Enter password' />
                <button className='text-white outline-none  border-2 mt-5 border-none placeholder:text-white bg-emerald-600 py-4 px-5 text-xl rounded-full'>Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
