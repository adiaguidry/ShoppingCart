var React = require('react');

module.exports = React.createClass({
    renderList: function(){
        if(this.props.items && Object.keys(this.props.items).length === 0){
            return <h4>
                    Add an item to get started!
                </h4>
        }else{
            var children = [];
            for(var key in this.props.items){
                children.push(
                    <li>
                        {this.props.items[key].text}
                    </li>
                )
            }
        }
        return children; //React knows how to render a full list of items
    },
    render: function(){
        console.log(this.props);
        return <ul>
            {this.renderList()}
            </ul>
    }
});