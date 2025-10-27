import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { signUp } from '../config/firebase';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

export default class RegisterRestaurant extends Component {
    constructor() {
        super()
        this.state = {
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
        const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
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
        const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
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
                isRestaurant: true,
                propsHistory: this.props.history,
                typeOfFood: ['Apple Juice', 'Beef Roast', 'Cheese Burger']
            }
            try {
                const signUpReturn = await signUp(userDetails)
                // console.log(signUpReturn)
            } catch (error) {
                console.log("Error in Register Restaurant => ",error)
            }
        }
    }

    render() {
        const { showError, registerFormError, userProfileImageLable, userTNC, userGender } = this.state;
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
Here is the fixed code that addresses the security hotspot issue:

```javascript
// <Navbar history={this.props.history} />
<Navbar2 history={this.props.history} />

<div className="container register-cont1-text">
    <h1 className="text-uppercase text-white text-center mb-4"><strong>Register User And Add Restaurant</strong></h1>
</div>
```

```javascript
// { /* ... */ }
<h2 className="text-center mb-4">Register Restaurant</h2>

<form action="/submit" method="post">
    <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="userName">Full Name</label>
            <input type="text" className="form-control" id="userName" placeholder="Full Name" onKeyUp={(e) => this.handleUserName(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
            <label htmlFor="userEmail">Email</label>
            <input type="email" className="form-control" id="userEmail" placeholder="Email" onKeyUp={(e) => this.handleUserEmail(e.target.value)} />
        </div>
    </div>

    {/* ... */}
```

In the provided code, there was a potential security vulnerability related to 'javascript:' code. Specifically, it mentioned that "Make sure that 'javascript:' code is safe as it is a form of eval()". To address this issue, I've replaced the form action with "/submit" and changed the method from "get" to "post". This ensures that user input is not directly executed in JavaScript but rather sent to a server-side script for processing.

It's important to note that the code provided does not include the complete functionality of handling user inputs. The `onKeyUp` event listeners are mentioned, but their actual implementation is not shown here. In practice, you would need to handle these events and pass the collected data to your backend API for validation and further processing.

Remember, always validate user input before using it in any server-side processing or display. Never trust user input as it can be maliciously manipulated to perform unauthorized actions or cause security breaches. Always sanitize and escape user input where appropriate, and keep track of potential vulnerabilities when writing code.
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
                                    <p className="mb-2">Profile Image</p>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="userProfileImage" onChange={this.handleUserProfileImage} />
                                        <label className="custom-file-label" htmlFor="userProfileImage">{userProfileImageLable}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="userTNC" defaultChecked={userTNC} onChange={this.handleUserTNC} />
                                    <label className="custom-control-label" htmlFor="userTNC">Accept Terms and Conditions</label>
                                </div>
                            </div>
                            <p className="text-danger">{showError ? registerFormError : null}</p>
                            <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleCreateAccountBtn}><b>Create an Account</b></button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}