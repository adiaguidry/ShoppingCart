var React = require('react');
var CartItem = require('./cart-item');

module.exports = React.createClass({
    renderCart: function(){
        var children = [];
        for(var key in this.props.items){
            var item = this.props.items[key]
            item.key = key;
            children.push(
                <CartItem
                    item={item}
                    key={key}>
                </CartItem>
            )
        }
        return children;
    },
    render: function(){
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th>Shopping Cart Items</th>
                    <th>Price</th>
                    <th>Qty:</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {this.renderCart()}
            </tbody>
        </table>
    }
});