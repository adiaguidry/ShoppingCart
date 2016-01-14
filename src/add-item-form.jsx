var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            //fill in with blank form input params
            productName: '',
            productDescription: '',
            price: '',
            inStock: ''
        }
    },
    handleClick: function(){
        console.log(this.state);
        //Sends value of form input to Firebase
        this.props.itemsStore.push({
            //fill in with form input params
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            price: this.state.price,
            inStock: this.state.inStock
        });
        this.setState({
            //reset form back to empty inputs
            productName: '',
            productDescription: '',
            price: '',
            inStock: ''
        });
    },
    handleInputChangePN: function(event){
        //event handler methods always have an 'event' object passed in as parameter
        //on change of the event.target(input DOM node), the value will be assigned to this.state.text so that DOM updates
        //as user types into input, we update this.state.text to in turn update the value of the input element
        this.setState({
            //handle input changes with event.target.value
            productName : event.target.value
        });
    },
    handleInputChangePD: function(event){
        this.setState({productDescription: event.target.value});
    },
    handleInputChangePrice: function(event){
        this.setState({price: event.target.value});
    },
    handleInputChangeIS: function(event){
        this.setState({inStock: event.target.value});
    },
    render: function(){
        return <div className="thumbnail">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        value={this.state.productName}
                        onChange={this.handleInputChangePN}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>Product Description</label>
                    <input
                        value={this.state.productDescription}
                        onChange={this.handleInputChangePD}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        value={this.state.price}
                        onChange={this.handleInputChangePrice}
                        type="text"
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>In Stock</label>
                    <input
                        value={this.state.inStock}
                        onChange={this.handleInputChangeIS}
                        type="text"
                        className="form-control" />
                </div>
                <button
                    onClick={this.handleClick}
                    className="btn btn-default"
                    type="button">
                    Add to Catalogue
                </button>
            </form>
        </div>
    }
});


