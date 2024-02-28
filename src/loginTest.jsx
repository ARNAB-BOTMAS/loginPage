import React, { useRef, useState } from 'react';
import "./styleTest.css";
import Swal from 'sweetalert2';

const LoginTest = () => {
    const form = useRef();
    const [activeToggel, setActiveToggel] = useState(false)
    const handleToggel = () => {
        setActiveToggel(!activeToggel);
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Under Manufacturing!",
            text: "Sorry for the inconvenient. Please come back later.",
            icon: "info"
          });
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Under Manufacturing!",
            text: "Sorry for the inconvenient. Please come back later.",
            icon: "info"
          });
    };
    return (
        <div className={`container ${ activeToggel ? "active" : ""}`}>
            <div className="form-container sign-up">
                <form ref={form} onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form ref={form} onSubmit={handleSignIn}>
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
                        <button className="hidden" onClick={() => handleToggel()}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={() => handleToggel()}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginTest;
