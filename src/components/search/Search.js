import React from "react";
import {connect} from "react-redux";
import {filterPosts} from "../../store/actions";
import "./Search.css";
import {Map, List, fromJS} from "immutable";
import {authors} from "../../helpers/constants";

class Search extends React.Component {
    state = {
        filters: List(),
        search: "",
    };
    onChangeHandler = (event) => {
        const filter = {
            key: event.target.name,
            value: event.target.name === "favorite" ? event.target.checked : this.state.search,
        };
        this.setState((state) => ({
            ...state,
            filters: state.filters.update(list => {
                const index = list.findIndex(((item) => {
                    return item.get("key") === filter.key;
                }));
                return index !== -1 ? list.delete(index) : list.push(Map(filter));
            }),
        }),
            // () => {
            // this.props.filterPosts(this.state.filters.toJS());
            // }

        );

    };
    onChangeMultiselectHandler = (event) => {

        const key = event.target.name;

        //const values = Array.from(event.target.selectedOptions, (item) => (item.value)).join();
        const values = Array.from(event.target.selectedOptions, (item) => (item.value));
        const filter = fromJS({
            key: key,
            value: values,
        });
        console.log(filter);
        this.setState((state) => ({
            ...state,
            filters: state.filters.update(list => {
                return list.filterNot((item) => item.get("key") === key).push(filter);
            }),
        }));
    };
    onSearchInputHandler = (event) => {
        const value = event.target.value;
        this.setState((state) => ({
            ...state,
            search: value,
            filters: state.filters.update(list => (list.map(x => (x.get("key") !== "favorite" && x.get("key") !== "author") ? x.set("value", value) : x))),
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterPosts(this.state.filters.toJS());
    };

    render() {
        return (
            <React.Fragment>
                <div className="Search-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="Search-form-container">
                            <div>
                                <select multiple name="author" id="author" onChange={this.onChangeMultiselectHandler}>
                                    {authors.map((author, index) => (
                                        <option key={index} value={author}>{author}</option>

                                    ))}
                                </select>
                            </div>
                            <div className="Search-input-container">
                                <label htmlFor="titleFilter">Tytuł</label>
                                <input type="checkbox" onChange={this.onChangeHandler} name="title" id="title"
                                       value="true"/>
                            </div>
                            <div className="Search-input-container">
                                <label htmlFor="bodyFilter">Treść</label>
                                <input type="checkbox" onChange={this.onChangeHandler} name="body" id="body"
                                       value="true"/>
                            </div>
                            <div className="Search-input-container">
                                <label htmlFor="favoritesFilter">Ulubione</label>
                                <input type="checkbox" onChange={this.onChangeHandler} name="favorite" id="favorite"
                                       value="true"/>
                            </div>
                            <div className="Search-input-container">
                                <input type="text" className="Search-input" onChange={this.onSearchInputHandler}
                                       placeholder="Wyszukaj..." name="query" id="query"/>
                                <button type="submit">Szukaj</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    filterPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
