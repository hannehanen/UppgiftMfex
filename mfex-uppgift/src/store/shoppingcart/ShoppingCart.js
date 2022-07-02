import React from 'react';


class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      }
    }

calculateCartPrice = (cart) => {
  let totalPrice = 0;

  cart.forEach(robot => {
    totalPrice+=robot.price;
  })
  return totalPrice;
}

    render() {
      console.log(this.props.cart)
      return(
        <div style={{position:'fixed',bottom:0,width:"100%"}}>
            <h2>Shoppingcart {this.props.cart.length > 0 ? null: "is empty"}</h2>
            <h3>Total price: {this.props.cart.length > 0 ? this.calculateCartPrice(this.props.cart) : 0}</h3>
            {this.props.cart.map( (shoppedRobot,index) =>{
                return <div key={index}> {shoppedRobot.name}</div>
            })}
        </div>
      );
    }
  }

  export default ShoppingCart;
