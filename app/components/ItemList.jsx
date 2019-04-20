const React = require('react');
const Item = require('./item.jsx');
const selectedIds = require('../../data/selectedIds.js');
const SearchPlugin = require('./searchItem.jsx');

let next = 0;
let prev = 0;

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            allItems: [],
            currentPage: 1,
            todosPerPage: 6
        };
        this.filterList = this.updateFilterList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
    }

    updateFilterList(filteredList) {
        this.setState({ items: filteredList });
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    handleNextClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: next
        });
    }

    handlePrevClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: prev
        });
    }

    // При получении данных, вызываем setState, чтобы передать их компоненту
    componentDidMount() {
        fetch("../../data/test.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                        allItems: result
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
        const { 
            error, 
            isLoaded, 
            items,
            currentPage,
            todosPerPage 
        } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
        const last = Math.ceil(items.length / todosPerPage);
        prev = currentPage > 1 ? (currentPage - 1) : 1;
        next = (last ===currentPage) ? currentPage: currentPage + 1;
        

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className={`page-item ${
                    currentPage === number ? " active" : ""
                  }`}
                >
                    <a className="page-link"
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                        href="#">
                        {number} 
                    </a>
                                
                </li>
            );
        });

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container-fluid">
                    <h1>List of Cats</h1>
                    <SearchPlugin items={this.state.allItems} updateList={this.filterList} />

                    <div className="gbody">
                        <div className="row">
                            {
                                currentTodos.map((i) => {
                                    return <div className="col-md-4 col-sm-6 col-lg-4">
                                        <Item key={i.id} imageUrl={i.imageUrl} name={i.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <ul className="pagination justify-content-center" id="page-numbers">
                        <li className="page-item" onClick={this.handlePrevClick}>
                            <a className="page-link" href="">Previous</a>
                        </li>
                            {renderPageNumbers}
                        <li className="page-item" onClick={this.handleNextClick}>
                            <a className="page-link" href="">Next</a>
                        </li>
                    </ul>

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