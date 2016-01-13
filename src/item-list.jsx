var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    renderList: function(){
        var children = [];
        for(var key in this.props.items){
            var item = this.props.items[key];
            //assign key prop to item for easy access (key is Firebase key)
            item.key = key;
            children.push(
                <ListItem
                    //pass down item and key to ListItem
                    item={item}
                    key={key}>
                </ListItem>
            )
        }
        return children;
    },
    render: function(){
        return <div>
            {this.renderList()}
            </div>
    }
});