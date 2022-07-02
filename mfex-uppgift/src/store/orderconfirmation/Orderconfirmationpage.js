import React from 'react';
import { Link } from "react-router-dom";
import ShoppingCart from '../shoppingcart/ShoppingCart';
import EasyForm from '../../generalContainers/EasyForm';

class OrderConfirmationPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    componentDidMount(){
      let shoppingCartFromLocalStorage = JSON.parse(localStorage.getItem("shoppingcart"));
      console.log()
      this.setState(oldState =>{
        return {...oldState, shoppingCart: shoppingCartFromLocalStorage}
      })
    }


    render() {
      return(
        <div style={{width:"100%"}}>
            <h2>OrderConfirmationPage </h2>
            <EasyForm cart={this.state.shoppingCart} />
            <Link to="/">Back to shop</Link>

            { this.state.shoppingCart == null ? null :  <ShoppingCart cart={this.state.shoppingCart} />}
        </div>
      );
    }
  }

  export default OrderConfirmationPage;
