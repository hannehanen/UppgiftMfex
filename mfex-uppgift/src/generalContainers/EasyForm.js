import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import {postOrder} from '../APIRequests/order'


class EasyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        email:"",
        formValidated: false,
        emailvalidation: false,
        namevalidation: false
      }
    }



    handleNameChange = (event) => {
        this.setState( oldstate=>{
            return {...oldstate, name: event.target.value, namevalidation: event.target.value.length> 5 ? true: false}
        });
     
    }

    handleEmailChange = (event) => {
        this.setState( oldstate=>{
            return {...oldstate, email: event.target.value,emailvalidation: event.target.value.length> 5 ? true: false}
        });
        
    }

    handleSubmit = (event) => {
        console.log("KLICK")
        if(this.formValidation()){
            alert("form är validerad. Uppdaterar backend.")
            postOrder({name:this.state.name,email:this.state.email, shoppingcart: this.props.cart}).then( data =>{
                console.log(data)
                console.log("Order skickad och ok")
            }).catch(error =>{
                console.log("fel med att skicka order")
            })

        }else{
            alert("Form är inte validerad")
        }
        event.preventDefault();
      }

      validateCart = () =>{
        let isCartValidated = true;
        this.props.cart.forEach(item =>{
            let itemsAvaliable = item.inStock;
            let amountOfItemsInCart = this.props.cart.filter( itemToCompare =>{
            if(item.id === itemToCompare.id){
                return true;
            }
            return false;
           })
           if(amountOfItemsInCart.length > itemsAvaliable){
            isCartValidated = false;
           }
        })
        return isCartValidated;
      }

    formValidation = () =>{
        let isFormValidated = false;
        let isCartValidated = this.validateCart();
        if(this.state.emailvalidation == true && this.state.namevalidation == true && isCartValidated == true){
            isFormValidated = true;
        }else{
            console.log("Formvalidering",isFormValidated)
            console.log("emailValidated",this.state.emailvalidation)
            console.log("nameValidated",this.state.namevalidation)
            console.log("isCartValidated",isCartValidated)
        }
        return isFormValidated;
    }  

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
              </label>
              <br/>
              <label>
                Email:
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
              </label>
              <br/>
              <input type="submit" value="Submit" />
            </form>
          );
    }
  }

  export default EasyForm;