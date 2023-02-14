import React from "react";
import s from "./FormControls.module.css";

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
export const Textarea = Element("textarea");
export const Input = Element("input");
