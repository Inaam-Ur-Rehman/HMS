import React, { useState } from 'react';

function App() {
  const [data, setData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
    setData({
      username: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <label htmlFor="username">
          Username
          <input className="ring-1 ring-black rounded-md outline-none px-2 block mt-2" type="text" id="username"
            onChange={(e)=>{
              setData({
                ...data,
                username: e.target.value
              })
            }}
            value={data?.username}
          />
        </label>
        <label htmlFor="fullname">
          Full Name
          <input className="ring-1 ring-black rounded-md outline-none px-2 block mt-2" type="text" id="fullname"
          onChange={(e)=>{
            setData({
              ...data,
              fullName: e.target.value
            })
          }}
          value={data?.fullName}
          />
        </label>
        <label htmlFor="email">
          Email
          <input className="ring-1 ring-black rounded-md outline-none px-2 block mt-2" type="email" id="email" 
          onChange={(e)=>{
            setData({
              ...data,
              email: e.target.value
            })
          }}
          value={data?.email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input className="ring-1 ring-black rounded-md outline-none px-2 block mt-2" type="password" id="password" 
          onChange={(e)=>{
            setData({
              ...data,
              password: e.target.value
            })
          }}
          value={data?.password}
          />
        </label>
        <label htmlFor="confirm-password">
          Confirm Password
          <input className="ring-1 ring-black rounded-md outline-none px-2 block mt-2" type="password" id="confirm-password"
          onChange={(e)=>{
            setData({
              ...data,
              confirmPassword: e.target.value
            })
          }}
          value={data?.confirmPassword}
          />
        </label>
        <button type="submit" className="bg-primary max-w-max px-6 text-white rounded-md mx-auto py-1">Signup</button>
      </form>
    </div>
  );
}

export default App;
