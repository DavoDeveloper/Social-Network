import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import FieldCreator, { Input } from "../../common/Utiles/Validate/FormControls";
import { required } from "../../common/Utiles/Validate/validators";
import { login } from "../../redux/auth-reducer";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-2">
        {FieldCreator(Input, required, "email", "text", "login...", "form-control")}
        {FieldCreator(Input, required, "password", "password", "password...", "form-control mt-3")}
        {FieldCreator(Input, [], "rememberMe", "checkbox", null, null)}
        <label>remeber me</label>
      </div>

      {props.error && <div className={s.summaryError}>{props.error}</div>}
      <button className="btn btn-info">Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSumbit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSumbit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
