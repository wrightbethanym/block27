import React, { useState } from 'react'

export default function SignupForm({setToken}) {
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
        })
        .then((res)=>res.json())
        .then((json)=>{console.log(json)
       setToken(json.token)})
        .catch((er)=>console.log(er));
        } catch(err) {
        console.log(err)
        }
    }

  return <>
    <form onSubmit={handleSubmit}>
        <label>
            Username: 
            <input type="text"
            value={username} 
            placeholder="username" 
            onChange={(e)=>setUsername(e.target.value)}
            />
        </label>
        <label>
            Password
            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
        <button>Submit</button>
    </form>
  </>; 
}
