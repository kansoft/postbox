import React from "react";
import "./SortMenu.css";
import SortMenuItem from "./SortMenuItem";

const options = [{id: "Ostatnie"}, {id: "Tytuł"}, {id: "Ulubione"}];

class SortMenu extends React.Component {
    onClickBtn = (id) => {
        this.props.onClick(id)
    };

    render() {
        const {order, orderBy} = this.props;
        return (
            <div className="SortMenu-sort-container">
                <p>Sortuj wg:</p>
                {options.map(option => (
                    <SortMenuItem key={option.id} id={option.id} onClick={this.onClickBtn} order={order}
                                  orderBy={orderBy}/>
                ))}
            </div>
        );
    }

}

export default SortMenu;
