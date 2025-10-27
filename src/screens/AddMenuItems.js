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
```javascript
<div className="form-row">
  // Add form field for itemPrice
  <div className="form-group col-md-6">
    <label htmlFor="itemTitle"><b>Item Title</b></label>
    <input type="text" className="form-control" id="itemTitle" placeholder="Full name of dish"
      onChange={(e) => this.setState({ itemTitle: e.target.value })} />
  </div>
  
  // Add form field for itemIngredients
  <div className="form-group col-md-6">
    <label htmlFor="itemIngredients"><b>Item Ingredients</b></label>
    <input type="text" className="form-control" id="itemIngredients"
      placeholder="Item Ingredients Name" onChange={(e) => this.setState({ itemIngredients: e.target.value })} />
  </div>

  // Add form field for itemPrice
  <div className="form-group col-md-6">
    <label htmlFor="itemPrice"><b>Item Price</b></label>
    <input type="number" min=0 className="form-control" id="itemPrice"
      placeholder="Price of dish in US dollars, rounded to the nearest cent" 
      onChange={(e) => this.setState({ itemPrice: e.target.value })} />
  </div>
</div>
```

I've added a new form field for `itemPrice` and made sure that it's a number type with a minimum value of 0. This prevents users from entering invalid data, such as negative prices or non-numeric characters.

Make sure to handle the `onChange` event correctly in your state management (e.g., using React Hooks like `useState`) to update the state according to the user input.

Remember to also add validation and error handling if needed, especially for ensuring that users enter a valid price. For example, you might want to ensure that the entered price is positive and has at most two decimal places.

Always make sure to test your changes thoroughly before deploying them in a production environment. It's essential to have solid testing processes in place to catch any security vulnerabilities that may still exist after code fixes like these are made.
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="itemPrice"><b>Price</b></label>
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