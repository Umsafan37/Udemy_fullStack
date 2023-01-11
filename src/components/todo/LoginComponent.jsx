import  React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){

    const [username, setUsername] = useState('safan')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth();


    function handleUserNameChange(event){ 
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){ 
        setPassword(event.target.value)
    }
   
    function handleSubmit(){
        if(authContext.login(username,password)){

            navigate(`/welcome/${username}`)
 
        }
        else{ 
            setShowErrorMessage(true)
        }
    }
    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return <div className='successMessage'>Authentication Success</div>
        }
        return null
    }

    function ErrorMessageComponent(){
        if(showErrorMessage){
            return <div className='successMessage'>Authentication failed</div>
        }
        return null
    }
    
        return (
        <div className='Login'>
            <h1>Time to Login!</h1>
            
            <ErrorMessageComponent />
            <div className='LoginForm' >
                <div>
                    <label style={{margin:'10px', padding:'5px' }}>User Name:</label>
                    <input type='text' name='username' value ={username} onChange={handleUserNameChange} 
                    style={{margin:'10px', padding:'5px' }} />
                </div>
                <div>
                    <label style={{margin:'10px', padding:'5px' }}>Password:</label>
                    <input type='password' name='password'  value ={password} onChange={handlePasswordChange} 
                    style={{margin:'10px', padding:'5px' }} />
                </div>
                <div>
                    <button type='button' name='login' onClick={handleSubmit}
                    style={{margin:'10px', padding:'5px'}}>Login</button>
                </div>
            </div>
        </div>
    )
} 
