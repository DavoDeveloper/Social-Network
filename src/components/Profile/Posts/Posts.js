import React from "react";
import Post from "./Post";
import s from "./Posts.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/Utiles/Validate/FormControls";
import { MaxLengthCreator, required } from "../../../common/Utiles/Validate/validators";

const MaxLength = MaxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"postBody"}
        component={Textarea}
        validate={[required, MaxLength]}
        class="form-control"
        id="exampleFormControlTextarea1"
      ></Field>
      <button className="btn btn-outline-dark">Add new Post</button>
    </form>
  );
};

const ReduxPostForm = reduxForm({ form: "post" })(AddPostForm);

const Posts = (props) => {
  let newPosts = props.posts.map((p) => <Post message={p.message} like={p.like} />);

  let addPost = (values) => {
    props.onchanged(values.postBody);
  };

  return (
    <div>
      <div>
        <h3 className={s.posts}>My Posts</h3>
      </div>
      <h3>New Post</h3>
      <div className={s.add_post}>
        <ReduxPostForm onSubmit={addPost} />
      </div>
      {newPosts}
    </div>
  );
};

export default Posts;
