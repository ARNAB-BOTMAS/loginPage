import React, { useState } from 'react';
import './style.css';

const Login = () => {
    const [activePanel, setActivePanel] = useState('sign-in');

    const togglePanel = (panel) => {
        setActivePanel(panel);
    };
    return (
    <div className={`container ${ activePanel === "sign-up" ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" onClick={() => togglePanel('sign-in')}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" onClick={() => togglePanel('sign-up')}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;
