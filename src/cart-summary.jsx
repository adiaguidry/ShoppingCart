var React = require('react');

module.exports = React.createClass({
    componentWillMount: function(){
        this.getCartSummary();
    },
    getCartSummary: function(){
        console.log('this.props.items is: ', this.props.items);
        this.data = {
            item_costs: 0,
            s_and_h: 12.97,
            tax: 0,
            total: 0
        };
        //calculate item_costs
        for(var key in this.props.items){
            var item = this.props.items[key];
            this.data.item_costs += item.price;
        }
        //calculate tax: assume 10%
        this.data.tax = parseFloat(this.data.item_costs) * 0.1;
        //calculate total cost
        this.data.total = this.data.item_costs + this.data.s_and_h + this.data.tax;
    },
    render: function(){
        return <div>
                <h3>Order Summary</h3>
                <table className="table table-striped">
                    <tr>
                        <td>Item Costs:</td>
                        <td>{this.data.item_costs}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>{this.data.s_and_h}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>{this.data.tax}</td>
                    </tr>
                </table>
                <h5>Order Total: {this.data.total}</h5>
                <button className="btn btn-default">Continue to Checkout</button>
            </div>
    }
});