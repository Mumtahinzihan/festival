import React from 'react';
import './SignUpPage.css';


class SignUpPage extends React.Component {

    render() {
        return (
            <>
                <button className="fb">Sign Up With Facebook</button>
                <p id="or"><span>or</span></p>
                <p>sign up with your email address</p>
                <form>
                    <input type="text" placeholder="*Festival name" required></input>
                    <input type="text" placeholder="*Email" required></input>
                    <input type="text" placeholder="*Password" required></input>
                    <input type="text" placeholder="*Confirm Password" required></input>
                    <p>I'm not a robot</p>
                    <input type="checkbox"></input>
                </form>
                <div className="container">
                    <button className="item">Sign Up</button>
                </div>
            </>
        );
    }
}
export default SignUpPage; 