import React from "react";
import {connect} from "react-redux";
import CommentList from "../comments/CommentList";
import {getCommentsDataRequested} from "../../store/actions";
import {getCurrentPostId} from "../../store/selectors";

class Post extends React.Component {

    getComments = (id) => {
        console.log(id);
        this.props.getCommentsDataRequested(id);
    };

    render() {
        const {data, currentPostId} = this.props;
        console.log('Post');
        return (
            <li>
                <p><strong>{data.title}</strong></p>
                <p className="Post-body">{data.body}</p>
                <button key={data.id} onClick={() => this.getComments(data.id)} type="button">Pokaż komentarze</button>
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
    getCommentsDataRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);