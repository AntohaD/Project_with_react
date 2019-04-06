const React = require('react');

class SearchPlugin extends React.Component {
    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.search = this.searchHandler.bind(this);
    }

    onTextChanged(e) {
        let text = e.target.value.trim();
        this.search(text);
    }

    // Ищем совпадения введенных данных с именами котов
    searchHandler(text) {
        let filteredList = this.props.items.filter((item) => {
            return item.name.toLowerCase().search(text.toLowerCase()) !== -1;
        });

        // this.setState({items: filteredList});
        this.props.updateList(filteredList);
        console.log(filteredList);
    }

    render() {
        return (<div className="searchCats">
            <input className="form-control" placeholder="Search" onChange={this.onTextChanged} />
        </div>
        );
    }
}

module.exports = SearchPlugin;