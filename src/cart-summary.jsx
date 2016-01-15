var React = require('react');
var ReactFire = require('reactfire');

var rootUrl = 'https://shoppingcart-react.firebaseio.com/';

var full_cart;
module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
        return {
            cart: {},
            data: {
                item_costs: 0,
                s_and_h: 12.97,
                tax: 0,
                total: 0
            }
        }
    },
    componentWillMount: function(){
        var ref = new Firebase(rootUrl + 'cart/');
        this.bindAsArray(ref, 'cart');
        console.log('this.state.cart is: ', this.state.cart);
        ref.on('value', this.getCartSummary);
    },
    getCartSummary: function(){
        this.data = {
            item_costs: 0,
            s_and_h: 12.97,
            tax: 0,
            total: 0
        };
        //calculate item_costs
        for(var key in this.state.cart){
            var item = this.state.cart[key];
            this.data.item_costs += parseFloat(item.price);
        }
        //calculate tax: assume 10%
        this.data.tax = Math.round((parseFloat(this.data.item_costs) * 0.075) * 100) / 100;
        console.log('this.data.tax is :', this.data.tax);
        //calculate total cost
        this.data.total = this.data.item_costs + this.data.s_and_h + this.data.tax;
        this.setState({
            data: {
                item_costs: this.data.item_costs,
                s_and_h: 12.97,
                tax: this.data.tax,
                total: this.data.total
            }
        })
    },
    render: function(){
        return <div>
                <h3>Order Summary</h3>
                <table className="table table-striped">
                    <tr>
                        <td>Item Costs:</td>
                        <td>{this.state.data.item_costs}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>{this.state.data.s_and_h}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax (7.5%):</td>
                        <td>{this.state.data.tax}</td>
                    </tr>
                </table>
                <h5>Order Total: {this.state.data.total}</h5>
                <button className="btn btn-default">Continue to Checkout</button>
            </div>
    }
});