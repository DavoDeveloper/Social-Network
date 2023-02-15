import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/Utiles/Validate/FormControls";
import { required } from "../../common/Utiles/Validate/validators";
import { login } from "../../redux/auth-reducer";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-2">
        <Field
          component={Input}
          validate={[required]}
          name={"email"}
          type="text"
          placeholder={"login..."}
          className="form-control"
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"password"}
          type="password"
          placeholder={"password..."}
          className="form-control"
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        <label htmlFor="">remeber me</label>
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
