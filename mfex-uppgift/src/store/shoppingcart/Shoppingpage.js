import React from 'react';
import Orderconfirmationpage from '../orderconfirmation/Orderconfirmationpage';
import { Link } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import {fetchProducts} from '../../APIRequests/products';

class ShoppingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shoppedObjects: [],
        robots: []
      }
    }

    componentDidMount(){
      let shoppingCartFromLocalStorage = JSON.parse(localStorage.getItem("shoppingcart"));
        fetchProducts().then(data => {
          this.setState(oldState => {
            return { ...oldState,robots : data.robots, shoppedObjects: localStorage.getItem("shoppingcart") == null ? [] : shoppingCartFromLocalStorage}
        })
        }).catch( err => {
          console.log(err)
        })
    }

    addToCart =(item)=>{
      let shoppingCartForLocalstorage = [...this.state.shoppedObjects, item];
      localStorage.setItem("shoppingcart", JSON.stringify(shoppingCartForLocalstorage));

        this.setState(oldState =>{
            return {...oldState,shoppedObjects:[...oldState.shoppedObjects, item]}
        })
    }

    render() {
      return(
        <div style={{height:"100%",width:"100%"}}>
          <h1>ShoppingPage</h1>
          <div style={{marginBottom: 10}}>
              <h2>
                  Robots
              </h2>
              {this.state.robots.map((robot,index) => {
                  if(index % 2 === 0){
                    return <div key={index} style={{backgroundColor: "#B2BEB5"}}>{robot.name} <button onClick={() =>this.addToCart(robot)}>+</button> </div>
                  }else{
                    return <div key={index}  style={{backgroundColor: "#A9A9A9"}}>{robot.name} <button onClick={() =>this.addToCart(robot)}>+</button> </div>
                  }
              })}
          </div>
          <Link to="/order">Order</Link>
            <ShoppingCart cart={this.state.shoppedObjects} />
        </div>
      );
    }
  }

  export default ShoppingPage;
