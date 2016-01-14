//Gobal
var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
//Store Dependencies
var AddItemForm = require('./add-item-form');
var List = require('./list');
//Firebase
var rootUrl = 'https://shoppingcart-react.firebaseio.com/';

var Store = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
        return {
            catalogue: {},
            loaded: false
        }
    },
    componentWillMount: function(){
        fb = new Firebase(rootUrl + 'catalogue/');
        //bindAsObject is ReactFire method that creates new Firebase instance
        //it also binds 'items' in Firebase into (this.state.items => {}).
        this.bindAsObject(fb, 'catalogue');
        //when Firebase object is loaded and component has been re-rendered, call func handleDataLoaded
        fb.on('value', this.handleDataLoaded);
    },
    handleDataLoaded: function(){
        console.log(this.state);
        //flag to set state to loaded after firebase data conneected to app
        this.setState({loaded: true});
    },
    render: function(){
        //this.firebaseRefs refers to the Firebase object that is automatically created when we made a new instance of Firebase
        return <div className="container">
                <div className="col-sm-2 fixed">
                    <AddItemForm itemsStore={this.firebaseRefs.catalogue} />
                </div>
                <div className={"col-sm-9 pull-right content " + (this.state.loaded ? 'loaded' : '')}>
                    <List items={this.state.catalogue} />
                </div>
            </div>
    }
});

var storeElement = React.createElement(Store, {});
ReactDOM.render(storeElement, document.getElementById('store'));

