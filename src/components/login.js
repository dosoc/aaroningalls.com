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
            <form>
                <input 
                    name='username'
                    placeholder='Username'
                    onChange={setForm}
                    />
                    <br/>
                <input 
                    name='password'
                    placeholder='Password'
                    onChange={setForm}
                    />
                    <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login