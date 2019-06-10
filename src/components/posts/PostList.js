import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import './PostList.css'
import {getPostsDataRequested} from "../../store/actions";
import { createStructuredSelector } from 'reselect';
import {getPostState} from "../../store/selectors";

class PostList extends React.Component {

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        this.props.getPostsDataRequested();
    };

    render() {
        const {data} = this.props;
        return (
            <div className="List-container">
                {data.loading ? (
                    <p>ładowanie danych ...</p>
                ) : (
                    <ul className="list">
                        {data.list.map(post => (
                            <Post key={post.id} data={post}/>
                        ))}
                    </ul>
                )}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: getPostState(state),
});

const mapDispatchToProps = {
    getPostsDataRequested
};
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
