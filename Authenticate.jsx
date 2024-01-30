import React from 'react'

export default function Authenticate({token}) {
    async function handleClick() {
        try {
            const res = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate"), {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const json = await res.json();
            console.log(json);
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
      <button onClick={handleClick}>Authenticate</button>
    </div>
  );
}
