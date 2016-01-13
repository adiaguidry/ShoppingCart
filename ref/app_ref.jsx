var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://andrew-react-todos.firebaseio.com/';

var App = React.createClass({
    mixins: [ReactFire], //copies code from ReactFire onto our component so it can be used easily.
    getInitialState: function(){
        return {
            items: {},
            loaded: false
        }
    },
    componentWillMount: function(){
        fb = new Firebase(rootUrl + 'items/');
        //bindAsObject is ReactFire method that creates new Firebase instance
        this.bindAsObject(fb, 'items'); //it also binds 'items' in Firebase into (this.state.items => {}).
        fb.on('value', this.handleDataLoaded);//when Firebase object is loaded and component has been re-rendered, call func handleDataLoaded
    },
    handleDataLoaded: function(){
        this.setState({loaded: true}); //flag to set state to loaded
    },
    render: function () {
    //this.firebaseRefs refers to the Firebase object that is automatically created when we made a new instance of Firebase
    //line 33: if data is loaded, add loaded class to content
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">To-Do List</h2>
                <Header itemsStore={this.firebaseRefs.items} />
                <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
                    <List items={this.state.items} />
                </div>
            </div>
        </div>
    }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
