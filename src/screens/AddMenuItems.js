import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { addItem } from '../config/firebase';
import Swal from 'sweetalert2'


import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'


export default class AddMenuItems extends Component {
    constructor() {
        super()
        this.state = {
            itemImageLable: "Choose image",
            itemTitle: "",
            itemIngredients: "",
            itemPrice: "",
            itemImage: "",
            chooseItemType: "",
            showError: false,
            registerFormError: "",
        }
        this.handleItemImage = this.handleItemImage.bind(this)
        this.handleAddYourItemBtn = this.handleAddYourItemBtn.bind(this)
    }

    handleItemImage(e) {
        if (e.target.files[0] != null) {
            this.setState({
                itemImageLable: e.target.files[0].name,
                itemImage: e.target.files[0]
            });
        } else {
            this.setState({
                itemImageLable: "Choose image",
                itemImage: "",
            });
        }
    }

    async handleAddYourItemBtn() {
        const { itemTitle, itemIngredients, itemPrice, itemImage, chooseItemType, } = this.state
        if (!itemTitle) {
            this.setState({
                showError: true,
                registerFormError: "Invalid item title."
            })
        } else if (!itemIngredients) {
            this.setState({
                showError: true,
                registerFormError: "Invalid item ingredients."
            })
        } else if (!itemPrice) {
            this.setState({
                showError: true,
                registerFormError: "Invalid item price."
            })
        }
        else if (!itemImage) {
            this.setState({
                showError: true,
                registerFormError: "Image is required."
            })
        }
        else if (!chooseItemType) {
            this.setState({
                showError: true,
                registerFormError: "Must be selected any one."
            })
        } else {
            this.setState({
                showError: false,
                registerFormError: ""
            })
            const itemDetails = {
                itemTitle, itemIngredients, itemPrice, itemImage, chooseItemType, propsHistory: this.props.history,
            }
            try {
                const addItemReturn = await addItem(itemDetails)
                // console.log(addItemReturn)
                Swal.fire({
                    title: 'Success',
                    text: addItemReturn,
                    type: 'success',
                }).then(() => {
                    this.props.history.push('/my-foods')
                })
            } catch (error) {
                // console.log("Error in add menu items => ", error)
                Swal.fire({
                    title: 'Error',
                    text: error,
                    type: 'error',
                })
            }
        }
    }

    render() {
        const { itemImageLable, showError, registerFormError } = this.state;
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
Here is the fixed version of the code:

```jsx
<form action="/submit-item">
    <input type="hidden" name="itemTitle" id="itemTitle" value={this.state.itemTitle} />
    <input type="hidden" name="itemIngredients" id="itemIngredients" value={this.state.itemIngredients} />

    {/* Other form elements... */}

    <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>
</form>
```

In the above code, we have changed the 'action' attribute of the 'form' tag to '/submit-item', which is a valid URL that can be used for submitting form data. This ensures that when the user clicks on the 'Submit' button, the form data will be sent to the '/submit-item' endpoint, where it can be processed by the server.

By using this approach, we have removed any potential security issues associated with using 'javascript:' as an action for the form tag. The 'void(0)' trick is no longer necessary since we are now using a valid URL instead of executing JavaScript code directly.

Remember to make sure that you have a proper submission handler on your server-side that can handle requests sent to '/submit-item'. This handler should be responsible for validating and processing the incoming form data, ensuring secure and reliable handling of user input.

Keep in mind that this code assumes that you already have a handleSubmit function defined elsewhere in your component. If not, you would need to create one and call it from the onClick event handler of the 'Submit' button as shown above.
```
                                    <input type="number" className="form-control" id="itemPrice" placeholder="Price in number" onChange={(e) => this.setState({ itemPrice: e.target.value })} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="mb-2"><b>Item Image</b></label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="itemImage" onChange={this.handleItemImage} />
                                        <label className="custom-file-label" htmlFor="itemImage">{itemImageLable}</label>
                                    </div>
                                </div>
                            </div>
                            <label className="mb-2"><b>Choose Item Type</b></label>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="kebabs" value="kebabs" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="kebabs">Kebabs</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="chicken" value="chicken" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="chicken">Chicken</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="burgers" value="burgers" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="burgers">Burgers</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="biryani" value="biryani" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="biryani">Biryani</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="sauces" value="sauces" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="sauces">Sauces</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="vegetarian" value="vegetarian" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="vegetarian">Vegetarian</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="bread" value="bread" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="bread">Bread</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="specials" value="specials" name="chooseItemType" onChange={(e) => this.setState({ chooseItemType: e.target.value })} />
                                        <label className="custom-control-label" htmlFor="specials">Specials</label>
                                    </div>
                                </div>
                            </div>
                            {showError ? <p className="text-danger">{registerFormError}</p> : null}
                            <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleAddYourItemBtn} ><b>Add your item</b></button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}