import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import './PostList.css'
import {getPostsDataRequested, sortPostsByParam} from "../../store/actions";
import {getPostListState} from "../../store/selectors";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import {paginate} from "../../helpers/paginate";
import SortMenu from "../sort/SortMenu";



class PostList extends React.Component {
    state = {
        currentPage: 1,
        postPerPage: 10,
        orderBy: "id",
        order: "asc",
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
    sortData = (id) => {
        this.setState(state =>({
            ...state,
            orderBy: id,
            order: state.order === "asc" ? "desc" : "asc",
        }), () => {
            this.props.sortPostsByParam(this.state.order, this.state.orderBy);
        });

    };

    render() {
        const {data} = this.props;
        const {postPerPage, currentPage} = this.state;
        const currentPosts = paginate(data.list, postPerPage, currentPage);
        return (
            <div className="List-container">
                {data.loading ? (
                    <p>Ładowanie danych ...</p>
                ) : (
                    <>
                    <div className="PostList-filter-container">
                        <SortMenu order={this.state.order} orderBy={this.state.orderBy} onClick={this.sortData}/>
                        <Search/>
                    </div>
                    <ul className="list">

                        {data.list.length > 0 ? (
                            <>
                            {currentPosts.map(post => (
                                <Post key={post.id} data={post}/>
                            ))}
                            </>
                        ):(
                            <li>Brak postów spełniających kryteria filtrowania.</li>
                        )}


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
    data: getPostListState(state),
});

const mapDispatchToProps = {
    getPostsDataRequested,
    sortPostsByParam,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
