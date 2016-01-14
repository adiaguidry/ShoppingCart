var React = require('react');
var rootUrl = 'https://shoppingcart-react.firebaseio.com/';

module.exports = React.createClass({
    getInitialState: function(){
        return {
            productName: this.props.item.productName,
            productDescription: this.props.item.productDescription,
            price: this.props.item.price,
            inStock: this.props.item.inStock,
            quantity: this.props.item.quantity,
            textChanged: false
        }
    },
    componentWillMount: function(){
        //set each component to point to the corresponding Firebase object
        this.fb = new Firebase(rootUrl + 'cart/' + this.props.item.key);
    },
    handleUpdateClick: function(){
        console.log('here');
        this.fb.update({
            productName: this.props.item.productName,
            productDescription: this.props.item.productDescription,
            price: this.props.item.price,
            inStock: this.props.item.inStock,
            //use state here because that is the part we are updating
            quantity: this.state.quantity
        })
    },
    handleTextChange: function(){
        this.setState({
            text: event.target.value,
            textChanged: true
        })
    },
    handleDeleteClick: function(){
        this.fb.remove();
    },
    render: function(){
        return <tr>
            <td>
                <h5 className="centered">{this.props.item.productName}</h5>
                <img className="product_img_cart" src="images/mask.jpg" />
            </td>
            <td>{this.props.item.price}</td>
            <td>
                <input
                    className="qty_input"
                    value={this.props.item.quantity}
                    onChange={this.handleTextChange}/>
                <button
                    className="btn btn-default"
                    onClick={this.handleUpdateClick}>
                    Update Cart
                </button>
            </td>
            <td>
                <button
                    className="btn btn-default"
                    onClick={this.handleDeleteClick}>
                    Remove from Cart
                </button>
            </td>
        </tr>
    }
});