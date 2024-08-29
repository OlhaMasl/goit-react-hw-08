import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/authOps";

const LoginForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values));
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