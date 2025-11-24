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
            registerFormError: "Please enter a valid email.",
        });
    } else if (!userPassword.match(userPasswordFormate)) {
        this.setState({
            showError: true,
            registerFormError: "Please enter a valid password.",
        });
    } else if (userCountry.match(userCountryFormate) && userCity.match(userCityFormate)) {
        // Additional validation logic here
    } else {
        // Additional validation logic here
    }
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
                            <div className="form-group">
                                <label htmlFor="userAddress">Address</label>
                                <input type="text" className="form-control" id="userAddress" placeholder="Address" onKeyUp={(e) => this.handleUserAddress(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPhone">Phone Number</label>
                                <input type="tel" className="form-control" id="userPhone" placeholder="Phone Number" onKeyUp={(e) => this.handleUserPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantName">Restaurant Name</label>
                                <input type="text" className="form-control" id="userRestaurantName" placeholder="Restaurant Name" onKeyUp={(e) => this.handleUserRestaurantName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantAddress">Restaurant Address</label>
                                <input type="text" className="form-control" id="userRestaurantAddress" placeholder="Restaurant Address" onKeyUp={(e) => this.handleUserRestaurantAddress(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantPhone">Restaurant Phone Number</label>
                                <input type="tel" className="form-control" id="userRestaurantPhone" placeholder="Restaurant Phone Number" onKeyUp={(e) => this.handleUserRestaurantPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantEmail">Restaurant Email</label>
                                <input type="email" className="form-control" id="userRestaurantEmail" placeholder="Restaurant Email" onKeyUp={(e) => this.handleUserRestaurantEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantPassword">Restaurant Password</label>
                                <input type="password" className="form-control" id="userRestaurantPassword" placeholder="Restaurant Password" onKeyUp={(e) => this.handleUserRestaurantPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantConfirmPassword">Restaurant Confirm Password</label>
                                <input type="password" className="form-control" id="userRestaurantConfirmPassword" placeholder="Restaurant Confirm Password" onKeyUp={(e) => this.handleUserRestaurantConfirmPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantType">Restaurant Type</label>
                                <input type="text" className="form-control" id="userRestaurantType" placeholder="Restaurant Type" onKeyUp={(e) => this.handleUserRestaurantType(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantDescription">Restaurant Description</label>
                                <input type="text" className="form-control" id="userRestaurantDescription" placeholder="Restaurant Description" onKeyUp={(e) => this.handleUserRestaurantDescription(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRestaurantImage">Restaurant Image</label>
                                <input type="file" className="form-control-file" id="userRestaurantImage" placeholder="Restaurant Image" onKeyUp={(e) => this.handleUserRestaurantImage(e.target.value)} />
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