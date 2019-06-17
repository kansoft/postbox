import React from "react";
import {connect} from "react-redux";
import Comment from "./Comment";
import {getCommentsState, getCurrentPostId} from "../../store/selectors";
import "./CommentList.css";
import CommentForm from "./CommentForm";

class CommentList extends React.Component {

    render() {
        const {data, id} = this.props;

        return (
            <React.Fragment>
                {data.loading ? (
                    <p>ładowanie danych ...</p>
                ) : (
                    <ul>
                        {data.list.filter(comment => comment.postId === id).map(comment => (
                            <Comment key={comment.id} data={comment}/>
                        ))}
                    </ul>
                )}
                <CommentForm postId={id}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    data: getCommentsState(state),
    id: getCurrentPostId(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
