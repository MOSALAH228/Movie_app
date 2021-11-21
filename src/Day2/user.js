import React from "react";
import { useContext } from "react";
import { Formik } from "formik";
import { LanguageContext } from "../context/counterContext";

export default function Login() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <>
      <div className="container">
        <h1>LOGIN</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (!/^[0-9-a-zA-Z]{0,9}$/i.test(values.password)) {
              errors.password = "Invalid password";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,

            errors,

            touched,

            handleChange,

            handleBlur,

            handleSubmit,

            isSubmitting,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label for="exampleFormControlInput1" class="form-label">
                Email:{" "}
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && errors.email}
              <br />
              <label for="exampleFormControlInput1" class="form-label">
                Password:{" "}
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                type="password"
                name="password"
                onChange={handleChange}
                minlength="8"
                maxlength="10"
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password && errors.password}

              <br />
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
        <h1>lang is : {lang}</h1>
        <button
          className="btn btn-success"
          onClick={() => (lang === "en" ? setLang("ar") : setLang("en"))}
        >
          Change Language
        </button>
      </div>
    </>
  );
}
