import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';

function Signup ({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        const user = { username, password };


        const results = await registerUser(user);

        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem("token", results.data.token)
        }

    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                    type='text'
                    placeholder='Enter Username'
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className='register-form' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;