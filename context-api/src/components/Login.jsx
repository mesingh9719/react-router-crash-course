import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username})
    }
  return (
    <div>
        <div>
            <h2>
            Login
            </h2>
        </div>
        <div>
            <input 
            type="text" 
            placeholder='enter username' 
            onChange={(e)=>setUsername(e.target.value)}
            value={username} />
            <input type="text" onChange={(e)=>setPassword(e.target.value)}
            value={password} placeholder='please neter passwpoord'/>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login