import React from "react";
import {connect} from "react-redux";
import CommentList from "../comments/CommentList";
import {getCommentsDataRequested, addToFavorites, removeFromFavorites} from "../../store/actions";
import {getCurrentPostId} from "../../store/selectors";

class Post extends React.Component {

    getComments = (id) => {
        this.props.getCommentsDataRequested(id);
    };

    addRemoveFavorites = (id) => {
        if (this.props.data.favorite) {
            this.props.removeFromFavorites(id)
        } else {
            this.props.addToFavorites(id);
        }

    };

    render() {
        const {data, currentPostId} = this.props;
        return (
            <li>
                <p><strong>{data.title.split('\u000a').map((item, key) => {
                    return <span key={key}>{item}<br/></span>
                })}</strong></p>
                <p className="Post-body">{data.body.split('\u000a').map((item, key) => {
                    return <span key={key}>{item}<br/></span>
                })}</p>
                <div className="Post-buttons-container">
                    <button onClick={() => this.getComments(data.id)} type="button">Pokaż komentarze</button>
                    <button onClick={() => this.addRemoveFavorites(data.id)} type="link"
                            className={data.favorite ? "Post-favorite-button-remove" : "Post-favorite-button-add"}>
                        {data.favorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                    </button>
                </div>
                {currentPostId === data.id &&
                <CommentList id={data.id}/>
                }
            </li>
        );

    }
}

const mapStateToProps = state => ({
    currentPostId: getCurrentPostId(state),
});

const mapDispatchToProps = {
    getCommentsDataRequested,
    addToFavorites,
    removeFromFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
