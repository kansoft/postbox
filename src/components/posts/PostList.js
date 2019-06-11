import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import './PostList.css'
import {getPostsDataRequested} from "../../store/actions";
//import {createStructuredSelector} from 'reselect';
import {getPostState} from "../../store/selectors";
import Pagination from "../common/Pagination";


class PostList extends React.Component {
    state = {
        currentPage: 1,
        postPerPage: 10,
    };

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        this.props.getPostsDataRequested();
    };

    handleChangePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    render() {
        const {data} = this.props;
        const {postPerPage, currentPage} = this.state;
        const lastPostIndex = currentPage * postPerPage;
        const firstPostIndex = lastPostIndex - postPerPage;
        const currentPosts = data.list.slice(firstPostIndex, lastPostIndex);
        return (
            <div className="List-container">
                {data.loading ? (
                    <p>ładowanie danych ...</p>
                ) : (
                    <>
                    <ul className="list">
                        {currentPosts.map(post => (
                            <Post key={post.id} data={post}/>
                        ))}
                    </ul>
                    <ul className="pagination">
                        <Pagination
                            rowsPerPage={postPerPage}
                            onChangePage={(e) => this.handleChangePage(e)}
                            count={data.list.length}
                            page={currentPage}
                        />
                    </ul>
                    </>
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
