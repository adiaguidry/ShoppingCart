var React = require('react');

module.exports = React.createClass({
    componentWillMount: function(){

    },
    getCartSummary: function(){

    },
    render: function(){
        return <div>
                <h3>Order Summary</h3>
                <table>
                    <tr>
                        <td>Item Costs:</td>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>{}</td>
                    </tr>
                </table>
                <h5>Order Total: {}</h5>
                <button className="btn btn-default">Continue to Checkout</button>
            </div>
    }
});