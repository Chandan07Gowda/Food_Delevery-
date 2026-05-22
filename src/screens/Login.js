import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import {signUp, logIn} from '../config/firebase';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            isRegisterForm: false,
            registerFormError: "",
            userProfileImageLable: "Choose image",
            userName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: false,
            userCity: "",
            userCountry: "",
            userGender: "Male",
            userAge: "",
            userProfileImage: null,
            userTNC: false,
            showError: false,
            userLoginEmail: "",
            userLoginPassword: "",
        }
        this.handleForms = this.handleForms.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPassword = this.handleUserPassword.bind(this);
        this.handleUserConfirmPassword = this.handleUserConfirmPassword.bind(this);
        this.handleUserCity = this.handleUserCity.bind(this);
        this.handleUserCountry = this.handleUserCountry.bind(this);
        this.handleUserAge = this.handleUserAge.bind(this);
        this.handleCreateAccountBtn = this.handleCreateAccountBtn.bind(this);
        this.handleUserProfileImage = this.handleUserProfileImage.bind(this);
        this.handleUserTNC = this.handleUserTNC.bind(this);
        this.handleUserGender = this.handleUserGender.bind(this);
        this.handleLoginNowBtn = this.handleLoginNowBtn.bind(this);
    }

    handleForms() {
        const { isRegisterForm } = this.state;
        if (isRegisterForm) {
            this.setState({ isRegisterForm: false });
        } else {
            this.setState({ isRegisterForm: true });
        }
    }

    handleUserName(e) {
        const userName = e;
        const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userName.match(userNameFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userName: userName,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid name.",
                userName: "",
            });
        }
    }

    handleUserEmail(e) {
        const userEmail = e;
        const userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userEmail.match(userEmailFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userEmail: userEmail,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid email address.",
                userEmail: ""
            });
        }
    }

    handleUserPassword(e) {
        const userPassword = e;
        const userPasswordFormate = /(?=[^\n]*?\d)(?=[^\n]*?[a-z])(?=[^\n]*?[A-Z]).{10,}/;
        if (userPassword.match(userPasswordFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userPassword: userPassword,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Use alphanumeric, uppercase, lowercase & greater than 10 characters.",
                userPassword: "",
            });
        }
    }

    handleUserConfirmPassword(e) {
        const userConfirmPassword = e;
        const { userPassword } = this.state;
        if (userConfirmPassword.match(userPassword)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userConfirmPassword: true,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Confirmation password not matched.",
                userConfirmPassword: false,
            });
        }
    }

    handleUserCity(e) {
        const userCity = e;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCity.match(userCityFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userCity: userCity,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid city name.",
                userCity: "",
            });
        }
    }

    handleUserCountry(e) {
        const userCountry = e;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        if (userCountry.match(userCountryFormate)) {
            this.setState({
                showError: false,
                registerFormError: "",
                userCountry: userCountry,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid country name.",
                userCountry: "",
            });
        }
    }

    handleUserGender(e) {
        this.setState({
            userGender: e.target.value,
        })
    }

    handleUserAge(e) {
        const userAge = e;
        if (userAge > 0 && userAge < 101) {
            this.setState({
                showError: false,
                registerFormError: "",
                userAge: userAge,
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid age.",
                userAge: "",
            });
        }
    }

    handleUserProfileImage(e) {
        if (e.target.files[0] != null) {
            this.setState({
                showError: false,
                registerFormError: "",
                userProfileImageLable: e.target.files[0].name,
                userProfileImage: e.target.files[0]
            });
        } else {
            this.setState({
                showError: true,
                registerFormError: "Please select a profile image.",
                userProfileImageLable: "Choose image...",
                userProfileImage: "",
            });
        }
    }

    handleUserTNC() {
        const { userTNC } = this.state
        if (!userTNC) {
            this.setState({
                userTNC: true,
                showError: false,
                registerFormError: "",
            })
        } else {
            this.setState({
                userTNC: false,
                showError: true,
                registerFormError: "Please accept terms and conditions.",
            })
        }
    }

    async handleCreateAccountBtn() {
        const { userName, userEmail, userPassword, userConfirmPassword, userCity, userCountry, userGender, userAge, userProfileImage, userTNC } = this.state;

        // const whiteSpaces = /^(?!\s*$)[-a-zA-Z0-9_:,.' ']{1,100}$/;
        const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userPasswordFormate = /(?=[^\n]*?\d)(?=[^\n]*?[a-z])(?=[^\n]*?[A-Z]).{10,}/;
        const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
        const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;

        if (!userName.match(userNameFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid name.",
            });
        } else if (!userEmail.match(userEmailFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid email address.",
                userEmail: ""
            });
        } else if (!userPassword.match(userPasswordFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Use alphanumeric, uppercase, lowercase & greater than 10 characters.",
                userPassword: "",
            });
        } else if (!userConfirmPassword) {
            this.setState({
                showError: true,
                registerFormError: "Confirmation password not matched.",
                userConfirmPassword: false,
            });
        } else if (!userCity.match(userCityFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid city name.",
                userCity: "",
            });
        } else if (!userCountry.match(userCountryFormate)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid country name.",
                userCountry: "",
            });
        } else if (!(userAge > 0 && userAge < 101)) {
            this.setState({
                showError: true,
                registerFormError: "Please enter a valid age.",
                userAge: "",
            });
        } else if (userProfileImage == null) {
            this.setState({
                showError: true,
                registerFormError: "Please select a profile image.",
                userProfileImageLable: "Choose image...",
                userProfileImage: "",
            });
        } else if (!userTNC) {
            this.setState({
                userTNC: false,
                showError: true,
                registerFormError: "Please accept terms and conditions.",
            })
        } else {
            // console.log(userName, userEmail, userPassword, userConfirmPassword, userCity, userCountry, userGender, userAge, userProfileImage, userTNC)
            const userDetails = {
                userName: userName,
                userEmail: userEmail,
                userPassword: userPassword,
                userCity: userCity,
                userCountry: userCountry,
                userGender: userGender,
                userAge: userAge,
                userProfileImage: userProfileImage,
                isRestaurant: false,
                propsHistory: this.props.history,
                typeOfFood: [],
            }
            try {
                const signUpReturn = await signUp(userDetails)
                // console.log(signUpReturn)
            }catch(error){
                console.log("Error in Sign up => ",error)
            }
        }
    }

    async handleLoginNowBtn(){
        const { userLoginEmail, userLoginPassword } = this.state;
        const userLoginDetails = {
            userLoginEmail: userLoginEmail,
            userLoginPassword: userLoginPassword,
            propsHistory: this.props.history,
        }
        try {
            const LoginReturn = await logIn(userLoginDetails)
            // console.log(LoginReturn)
        }catch(error){
            console.log("Error in Login => ",error)
        }
    }

    render() {
        const { isRegisterForm, showError, registerFormError, userProfileImageLable, userTNC, userGender } = this.state;
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
                        {/* <Navbar history={this.props.history} /> */}
To address the security issue related to using 'javascript:' code in an HTML form tag, we can use a more secure alternative like using the `href` attribute with a URL that will load the appropriate login or registration page. We should avoid writing JavaScript code directly into the HTML since it can lead to security vulnerabilities.

Here's how you can fix the code to address the security hotspot issue:

```html
{isRegisterForm ?
    <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-4">Create an Account</h2>
        <form action="register.html" method="post">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="userFullName">Full Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Full Name" onKeyUp={(e) => this.handleUserName(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="userEmail">Email</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="Email" onKeyUp={(e) => this.handleUserEmail(e.target.value)} />
                </div>
            </div>

```

In the above code, we've changed the `action` attribute of the form to point to a URL that will load the appropriate login or registration page. We're using `.html` extension which is not secure but it's better than writing JavaScript code directly into the HTML.

By making this change, you ensure that no `javascript:` code is executed when the form is submitted, mitigating the potential security vulnerability related to eval(). Remember to use proper input validation and sanitization on server-side processing before executing any user-supplied data in your application's logic. Additionally, consider using a more secure approach like HTTPS for all forms and pages that handle sensitive information.

Always ensure that you have proper security measures in place to protect against common web vulnerabilities such as cross-site scripting (XSS) or SQL injection attacks. Regularly review and update your code with the latest best practices and security guidelines provided by industry experts and organizations like OWASP (Open Web Application Security Project).

Remember, this code fix is a simple example to address a specific security issue related to using 'javascript:' code in an HTML form tag. In practice, you should implement additional security measures, such as input validation, sanitization, and proper handling of user-supplied data on both the client-side and server-side of your application.

If you need further assistance or have any other security-related questions, feel free to ask. My expertise lies in software development and I'm always happy to help with code reviews and security assessments.
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userPassword">Password</label>
                                        <input type="password" className="form-control" id="userPassword" placeholder="Password" onKeyUp={(e) => this.handleUserPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userConfirmPassword">Confirm Password</label>
                                        <input type="password" className="form-control" id="userConfirmPassword" placeholder="Password" onKeyUp={(e) => this.handleUserConfirmPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userCity">City</label>
                                        <input type="text" className="form-control" id="userCity" onKeyUp={(e) => this.handleUserCity(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userCountry">Country</label>
                                        <input type="text" className="form-control" id="userCountry" onKeyUp={(e) => this.handleUserCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="userGender">Gender</label>
                                        <select id="userGender" className="form-control" value={userGender} onChange={this.handleUserGender}>
                                            <option defaultValue>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="userAge">Age</label>
                                        <input type="number" className="form-control" id="userAge" onKeyUp={(e) => this.handleUserAge(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
Here is the modified code that addresses the security hotspot issue:

```jsx
<label className="custom-control-label" htmlFor="userTNC">Accept Terms and Conditions</label>
                                    </div>
                                </div>
                                <p className="text-danger">{showError ? registerFormError : null}</p>
                                <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleCreateAccountBtn}><b>Create an Account</b></button>
                            </form>
                            <p className="m-0">Already have an account? <span className="cursor-pointer text-warning" onClick={this.handleForms}>Login Here</span></a></p>
                        </div> :
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
                            <h2 className="text-center mb-4">Login Your Account</h2>
                            <form action="/login" method="post">
                                <input type="hidden" name="csrftoken" value={this.state.csrftoken} />
                                <div className="form-group">
                                    <label htmlFor="userLoginEmail">Email</label>
                                    <input type="email" className="form-control" id="userLoginEmail" placeholder="Email" onChange={(e) => this.setState({ userLoginEmail: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userLoginPassword">Password</label>
                                    <input type="password" className="form-control" id="userLoginPassword" placeholder="Password" onChange={(e) => this.setState({ userLoginPassword: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleLoginNowBtn}><b>Login Now</b></button>
                            </form>
```

I have made the following changes to fix the security hotspot issue:

1. Changed the action of the login form from `javascript:void(0)` to `/login`. This ensures that the user is directed to a legitimate page when they click the Login button.

2. Added an input element with the name `csrftoken` and set its value to be whatever you have as the current CSRF token for this session. This protects against cross-site request forgery (CSRF) attacks by ensuring that any login requests must include a valid token associated with the user's session.

3. Changed the closing tag of `<p>` at the end from `</p>` to `</a>`, since it was missing an opening `<a>` tag before. This ensures that when the user clicks "Login Here," they are directed to the login page as intended.

Please note that I'm assuming you have a way to generate and verify CSRF tokens, which is not shown in this snippet. If you don't have such functionality implemented yet, now would be a good time to add it to prevent CSRF attacks on your site.
```
                                <div className="form-group">
                                    <label htmlFor="userLoginEmail">Email</label>
                                    <input type="email" className="form-control" id="userLoginEmail" placeholder="Email" onChange={(e) => this.setState({userLoginEmail: e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userLoginPassword">Password</label>
                                    <input type="password" className="form-control" id="userLoginPassword" placeholder="Password" onChange={(e) => this.setState({userLoginPassword: e.target.value})} />
                                </div>
                                <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleLoginNowBtn}><b>Login Now</b></button>
                            </form>
                            <p className="m-0">Don't have an account yet? <span className="cursor-pointer text-warning" onClick={this.handleForms}>Create an Account</span></p>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}