import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import UserApi from '../../Service/api/UserApi';
import { Usercontext } from '../../Context/AuthProvider';

const Login = () => {
    const { login, setAuthenticated, setToken } = Usercontext()

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [ErrMsg,setErrMsg]=useState('');
    const [isActive, setIsActive] = useState(false);
    const navigate=useNavigate()
    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };
    const HandleLogin= async(e)=>{
        e.preventDefault()
        setErrMsg("")
        console.log('Attempting login with:', { email, password });

        try {
            const response = await login(email, password);
            const { status, data } = response;
            if (status === 200 || status === 204) {
              setAuthenticated(true);
              if (data.token) {
                setToken(data.token);
              }
              navigate('/user');
            }
          } catch (error) {
            console.error("Loginnn error :", error);
            if (error.response) {
              console.log('statuss:' + error.response.status);
              switch (error.response.status) {
                case 401:
                  setErrMsg('Non autorisé. Vérifiez vos identifiants "Email ou Password"');
                  break;
                case 400:
                  setErrMsg('Adresse email ou mot de passe manquant');
                  break;
                case 500:
                  setErrMsg('Un problème est survenu sur le serveur. Veuillez réessayer plus tard.');
                  break;
              }
            } else if (!error.response) {
              setErrMsg('Aucune réponse du serveur');
      
            } else {
              setErrMsg('Échec de la connexion. Veuillez réessayer');
            }
      
      
          }
    }

    return (
        <div className='all-container'>
        <div className={`container-loggin ${isActive ? "active" : ""}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                    <button onClick={()=>navigate('/')}>Annuler</button>

                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email"  name='email' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)} />
                    <a href="#">Forget Your Password?</a>
                    <button type='submit' onClick={HandleLogin}>Sign In</button>
                    <button onClick={()=>navigate('/')}>Annuler</button>
                    { ErrMsg && <p className='Error'>{ErrMsg}</p>}
                </form>
            </div>
            <div className="" id='toggle-container'>
                <div className="" id='toggle'>
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
