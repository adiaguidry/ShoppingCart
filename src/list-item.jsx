var React = require('react');

var rootUrl = 'https://shoppingcart-react.firebaseio.com/';

module.exports = React.createClass({
    getInitialState: function(){
        return {
            productName: this.props.item.productName,
            productDescription: this.props.item.productDescription,
            price: this.props.item.price,
            inStock: this.props.item.inStock
        }
    },
    componentWillMount: function(){
        //set each component to point to the corresponding Firebase object
        ref = new Firebase(rootUrl + 'cart/');
    },
    handleAddClick: function(){
        console.log('here');
        ref.push({
            productName: this.props.item.productName,
            productDescription: this.props.item.productDescription,
            price: this.props.item.price,
            inStock: this.props.item.inStock
        })
    },
    render: function(){
        return <div className="col-sm-3 item_container">
            <img className="product_img" src="images/mask.jpg" />
            <div>
                <h4>{this.props.item.productName}</h4>
                <p>{this.props.item.productDescription}</p>
                <p>{this.props.item.price}</p>
                <p>{this.props.item.inStock}</p>
                <button
                    className="btn btn-default"
                    onClick={this.handleAddClick}>
                    Add to Cart
                </button>
                <i className="check content glyphicon glyphicon-ok"></i>
            </div>
        </div>
    }
});