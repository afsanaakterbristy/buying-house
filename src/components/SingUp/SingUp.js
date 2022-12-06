import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SingUp.css'
const SingUp = () => {
    const [error, setError] = useState(null);
    const {createUser}=useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault(0)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        if (password !== confirm) {
            setError('password not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }
    return (
       <div className='form-container'>
            <h2 className='form-title'>Please SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required/>
                </div>
                <input className='btn-submit' type="submit" value='SignUp'/>
            </form>
            <p className='new-account'>Have you any account <Link to='/login'>login</Link></p>
            <p>{error}</p>
                
            </div>
    );
};

export default SingUp;