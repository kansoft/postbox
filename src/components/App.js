import React from 'react';
import './App.css';
import Header from "./header";
import PostList from "./posts/PostList";

const App = () => (
    <div className="App">
        <Header/>
        <PostList/>
    </div>
);

export default App;
