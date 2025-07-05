import '../style/loginPage.css'
import logo from '../assets/logo.svg'

export const LoginPage = () => {
  return (
    <div className='container'>
        <div className='login-box'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='title'>Welcome Back</div>
            <div className='hint'>
                <div className='hint-text'> Don't have an account yet ?</div>
                <a className='hint-link'>Sign up</a>
            </div>
            <div className='input-area'>
                <i className="fa-regular fa-envelope"></i>
                <input type='email' className='input-box' placeholder='         email address'/>
            </div>
            <div className='input-area'>
                <i className="fa-regular fa-lock"></i>
                <input type='password' className='input-box' placeholder='         password'/>
            </div>
            <button className='button'>Login</button>
            <div className='divider'>
                <hr className='solid'></hr>
                <div className='divider-text'>OR</div>
                <hr className='solid'></hr>
            </div>
            <div className='login-button-area'>
                <button className='login-button'><i className="fa-brands fa-apple"></i></button>
                <button className='login-button'><i className="fa-brands fa-google"></i></button>
                <button className='login-button'><i className="fa-brands fa-twitter"></i></button>
            </div>
        </div>
    </div>
  )
}
