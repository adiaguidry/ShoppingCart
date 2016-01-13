var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){//when component initially renders, we want form input to be an empty str
        return {
            text: ''
        }
    },
    handleClick: function(){
        //Send value of text input to Firebase
        this.props.itemsStore.push({
            text: this.state.text,
            done: false
        });
        this.setState({text: ''});
    },
    handleInputChange: function(event){//event handler methods always have an 'event' object passed in as parameter
        //on change of the event.target(input DOM node), the value will be assigned to this.state.text so that DOM updates
        //as user types into input, we update this.state.text to in turn update the value of the input element
        this.setState({text: event.target.value});
    },
    render: function(){
        return <div className="input-group">
                <input
                    value={this.state.text} /*input will only show this.state.text*/
                    onChange={this.handleInputChange} /*when user updates, we trigger change event*/
                    type="text"
                    className="form-control" />
                <span className="input-group-btn">
                    <button
                        onClick={this.handleClick}
                        className="btn btn-default"
                        type="button">
                        Add
                    </button>
                </span>
            </div>
    }
});