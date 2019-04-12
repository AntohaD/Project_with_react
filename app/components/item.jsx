const React = require('react');
const itemClick = require('./clickItem.jsx');

class Item extends React.Component {

    render() {
        return (
            <div className="row viewCat"
                onClick={() => {
                    itemClick(this);
                }}
            >
                <div className="col-sm-7 containerCat">
                    <img className="img rounded img-fluid" src={this.props.imageUrl}></img>
                </div>
                <div className="col-sm-5 containerCat">
                    <div className="nameCat">{this.props.name}</div>
                </div>
                
            </div>)
    }
}

module.exports = Item;