const React = require('react');
const Item = require('./item.jsx');
const selectedIds = require('../../data/selectedIds.js');
const SearchPlugin = require('./searchItem.jsx');

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        // this.state = { items: this.props.data };
        this.filterList = this.updateFilterList.bind(this);
        console.log(this.state);
    }

    updateFilterList(filteredList) {
        this.setState({ items: filteredList });
    }

    // При получении данных, вызываем setState, чтобы передать их компоненту
    componentDidMount() {
        fetch("../../data/test.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container-fluid">
                    <h1>List of Cats</h1>
                    <SearchPlugin items={this.state.items} updateList={this.filterList} />

                    <div className="gbody">
                        <div className="row">
                            {
                                items.map((i) => {
                                    return <div className="col-md-4">
                                        <Item key={i.id} imageUrl={i.imageUrl} name={i.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary"
                        onClick={() => {
                            alert('Id selected: ' + emptyData(selectedIds));
                        }}
                    >Show cats</button>
                </div>
            );
        }
    }
}

module.exports = ItemsList;

function emptyData(data) {
    if (data.length === 0) {
        return 'No selected id';
    } else {
        return data;
    }
}