import React from "react";
import {connect} from "react-redux";
import {filterPosts} from "../../store/actions";
import "./Search.css";
import {List, fromJS} from "immutable";
import {authors} from "../../helpers/constants";

class Search extends React.Component {
    state = {
        filters: List(),
        search: "",
    };
    onChangeHandler = (event) => {
        const key = event.target.name;
        const values = event.target.multiple ? Array.from(event.target.selectedOptions, (item) => (item.value)) : event.target.checked ? [event.target.value] : [];
        const toPush = event.target.checked || values.length > 0;
        const filter = fromJS({
            key: key,
            value: values,
        });

        this.setState((state) => ({
            ...state,
            filters: state.filters.update(list => {
                return toPush ? list.filterNot((item) => item.get("key") === key).push(filter) : list.filterNot((item) => item.get("key") === key);
            }),
        }));


    };

    onSearchInputHandler = (event) => {
        const value = event.target.value;
        this.setState((state) => ({
            ...state,
            search: value,
            filters: state.filters.update(list => (list.map(x => (x.get("key") !== "favorite" && x.get("key") !== "author") ? x.setIn(["value", 0], value) : x))),
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
                                <select multiple name="author" id="author" onChange={this.onChangeHandler}>
                                    {authors.map((author, index) => (
                                        <option key={index} value={author}>{author}</option>

                                    ))}
                                </select>
                            </div>
                            <div className="Search-input-container">
                                <label htmlFor="titleFilter">Tytuł</label>
                                <input type="checkbox" onChange={this.onChangeHandler} name="title" id="title"
                                       value={this.state.search}/>
                            </div>
                            <div className="Search-input-container">
                                <label htmlFor="bodyFilter">Treść</label>
                                <input type="checkbox" onChange={this.onChangeHandler} name="body" id="body"
                                       value={this.state.search}/>
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
