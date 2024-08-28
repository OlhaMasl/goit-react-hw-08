import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();

    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <Field name="email" placeholder="Enter your email" className={ s.loginField} />
                    <Field name="password" type="password" placeholder="Enter your password" className={ s.loginField} />
                    <button type="submit" className={s.loginBtn}>Log In</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm; 