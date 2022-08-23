import React, {useState} from 'react';

const initialFormData = {
    username: "",
    password: ""
}

const Login = () => {
    
    const [ formData, setFormData] = useState(initialFormData);

    const setForm = (evt) => {
        const { name, value} = evt.target
        setFormData({
            ...formData, 
            [name] : value
        })
        }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='login'>
                <input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={setForm}
                    />
                    <br/>
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={setForm}
                    />
                    <br/>
                <button className='login-button'>Login</button>
            </form>
        </div>
    )
}

export default Login