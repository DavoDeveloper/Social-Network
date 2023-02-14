import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-2">
        <Field component={"input"} name={"login"} type="text" placeholder={"login..."} />
      </div>
      <div>
        <Field component={"input"} name={"password"} type="text" placeholder={"password..."} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        <label htmlFor="">remeber me</label>
      </div>
      <button className="btn btn-info">Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSumbit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSumbit} />
    </div>
  );
};

export default Login;
