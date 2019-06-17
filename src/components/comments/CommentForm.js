import React from "react";
import {connect} from "react-redux";
import {randomInt} from "../../helpers/random";
import {saveCommentData} from "../../store/actions";

class CommentForm extends React.Component {
    state = {
        formData: {
            id: 0,
            postId: 0,
            name: "",
            email: "",
            body: "",
        },
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                formData: {
                    ...state.formData,
                    postId: this.props.postId,
                    id: randomInt(2000),
                },
            }
        ), () => {
            this.props.saveCommentData([this.state.formData]);
            this.clearSate();
        });
    };

    handleChange = (event) => {
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    };

    clearSate = () => {
        this.setState({
            formData: {
                id: 0,
                postId: 0,
                name: "",
                email: "",
                body: "",
            }
        })
    };

    render() {
        const {name, email, body} = this.state.formData;
        return (
            <div className="CommentForm-container">
                <form className="CommentForm-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Twoje imię:</label>
                    <input type="text" value={name} id="name" name="name" onChange={this.handleChange} required/>

                    <label htmlFor="email">Twój e-mail:</label>
                    <input type="text" value={email} id="email" name="email" onChange={this.handleChange} required/>

                    <label htmlFor="body">Twój komentarz:</label>
                    <textarea id="body" value={body} name="body" onChange={this.handleChange} required/>

                    <button type="submit">Dodaj komentarz</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    saveCommentData
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
