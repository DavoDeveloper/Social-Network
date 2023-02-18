import React from "react";
import s from "./FormControls.module.css";
import { Field } from "redux-form";

const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={!hasError ? s.formControl : s.formControl + " " + s.error}>
        <Element {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

const FieldCreator = (component, validate, name, type, placeholder = "", className = "") => {
  return (
    <div>
      <Field
        component={component}
        validate={validate}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default FieldCreator;
export const Textarea = Element("textarea");
export const Input = Element("input");
