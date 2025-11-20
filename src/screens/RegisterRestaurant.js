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
handleUserEmail(e) {
    const userEmail = e;
    const userEmailAddressFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userEmailAddressFormat.test(userEmail)) {
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
    const userPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    if (userPasswordFormat.test(userPassword)) {
        this.setState({
            showError: false,
            registerFormError: "",
            userPassword: userPassword,
        });
    } else {
        this.setState({
            showError: true,
            registerFormError: "Use alphanumeric, uppercase, lowercase & greater than 10 characters.",
            userPassword: ""
        });
    }
}
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
// const whiteSpaces = /^(?!\s*$)[-a-zA-Z0-9_:,.' ']{1,100}$/;
const userNameFormate = /^([A-Za-z.\s_-]).{5,}$/;
const userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
const userCountryFormate = /^([A-Za-z.\s_-]).{5,}$/;
const userCityFormate = /^([A-Za-z.\s_-]).{5,}$/;

// Fixed regex for userName
const fixedUserNameFormate = new RegExp(`^([A-Za-z.\s_-]).{5,}$`);

// Fixed regex for userEmail
const fixedUserEmailFormate = new RegExp(`^(([^<>()\\[\\\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`);

// Fixed regex for userPassword
const fixedUserPasswordFormate = new RegExp(`(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}`);

// Fixed regex for userCountry
const fixedUserCountryFormate = new RegExp(`^([A-Za-z.\s_-]).{5,}$`);

// Fixed regex for userCity
const fixedUserCityFormate = new RegExp(`^([A-Za-z.\s_-]).{5,}$`);

if (!userName.match(fixedUserNameFormate)) {
    this.setState({
        showError: true,
        registerFormError: "Please enter a valid name.",
    });
} else if (!userEmail.match(fixedUserEmailFormate)) {
    this.setState({
        showError: true,
        registerFormError: "Please enter a valid email address.",
    });
} else if (!userPassword.match(fixedUserPasswordFormate)) {
    this.setState({
        showError: true,
        registerFormError: "Please enter a valid password with at least 10 characters, including digits, lowercase and uppercase letters.",
    });
} else if (!userCountry.match(fixedUserCountryFormate)) {
    this.setState({
        showError: true,
        registerFormError: "Please enter a valid country name.",
    });
} else if (!userCity.match(fixedUserCityFormate)) {
    this.setState({
        showError: true,
        registerFormError: "Please enter a valid city name.",
    });
}
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
html
{ /* <Navbar history={this.props.history} /> */ }
                        <Navbar2 history={this.props.history} />
                        <div className="container register-cont1-text">
                            <h1 className="text-uppercase text-white text-center mb-4"><strong>Register User And Add Restaurant</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
                        <h2 className="text-center mb-4">Register Restaurant</h2>
                        <form action="#register" method="post">
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userPassword">Password</label>
                                    <input type="password" className="form-control" id="userPassword" placeholder="Password" onKeyUp={(e) => this.handleUserPassword(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userConfirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="userConfirmPassword" placeholder="Confirm Password" onKeyUp={(e) => this.handleUserConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userPhone">Phone</label>
                                    <input type="tel" className="form-control" id="userPhone" placeholder="Phone" onKeyUp={(e) => this.handleUserPhone(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userAddress">Address</label>
                                    <input type="text" className="form-control" id="userAddress" placeholder="Address" onKeyUp={(e) => this.handleUserAddress(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userCity">City</label>
                                    <input type="text" className="form-control" id="userCity" placeholder="City" onKeyUp={(e) => this.handleUserCity(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userState">State</label>
                                    <input type="text" className="form-control" id="userState" placeholder="State" onKeyUp={(e) => this.handleUserState(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userZip">Zip</label>
                                    <input type="text" className="form-control" id="userZip" placeholder="Zip" onKeyUp={(e) => this.handleUserZip(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userCountry">Country</label>
                                    <input type="text" className="form-control" id="userCountry" placeholder="Country" onKeyUp={(e) => this.handleUserCountry(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantName">Restaurant Name</label>
                                    <input type="text" className="form-control" id="userRestaurantName" placeholder="Restaurant Name" onKeyUp={(e) => this.handleUserRestaurantName(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantAddress">Restaurant Address</label>
                                    <input type="text" className="form-control" id="userRestaurantAddress" placeholder="Restaurant Address" onKeyUp={(e) => this.handleUserRestaurantAddress(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantCity">Restaurant City</label>
                                    <input type="text" className="form-control" id="userRestaurantCity" placeholder="Restaurant City" onKeyUp={(e) => this.handleUserRestaurantCity(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantState">Restaurant State</label>
                                    <input type="text" className="form-control" id="userRestaurantState" placeholder="Restaurant State" onKeyUp={(e) => this.handleUserRestaurantState(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantZip">Restaurant Zip</label>
                                    <input type="text" className="form-control" id="userRestaurantZip" placeholder="Restaurant Zip" onKeyUp={(e) => this.handleUserRestaurantZip(e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="userRestaurantCountry">Restaurant Country</label>
                                    <input type="text" className="form-control" id="userRestaurantCountry" placeholder="Restaurant Country" onKeyUp={(e) => this.handleUserRestaurantCountry(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
Here is the fixed code with the 'javascript:' removed:

```html
{ /* <Navbar history={this.props.history} /> */ }
                        <Navbar2 history={this.props.history} />
                        <div className="container register-cont1-text">
                            <h1 className="text-uppercase text-white text-center mb-4"><strong>Register User And Add Restaurant</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
                        <h2 className="text-center mb-4">Register Restaurant</h2>
                        <form action="#register" method="post">
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

The main issue was the 'action' attribute of the form tag pointing to a JavaScript URI, which can be used for security vulnerabilities like XSS (Cross-Site Scripting). To fix this, we changed the action to "#register" and kept it as an HTML form submission. This ensures that the form data is sent to the server-side script responsible for handling the registration process.

Please note that this code does not include any validation logic or other functionalities that may be needed in a real-world scenario. It's just meant to address the security issue of using 'javascript:' in the form action attribute.
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