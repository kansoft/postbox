import React from "react";


class SortMenuItem extends React.Component {
    onClickBtn = () => {
        this.props.onClick(this.props.id);
    };

    render() {
        const {id, order, orderBy} = this.props;
        return (
            <div className="SortMenu-elem">
                <div className="SortMenu-sort">
                    <button className="Button-link" onClick={this.onClickBtn}><span>{id}</span></button>
                    {orderBy === id &&
                    <span className="Sort-arrow">{order === "asc" ? "\u2191" : "\u2193"}</span>}</div>
                <div>|</div>
            </div>
        );
    }
}

export default SortMenuItem;