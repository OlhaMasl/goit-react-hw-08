import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/authOps";

const RegistrationForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values));
        options.resetForm();
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <Field name="name" placeholder="Enter your name" className={ s.registerField} />
                    <Field name="email" placeholder="Enter your email" className={ s.registerField} />
                    <Field name="password" type="password" placeholder="Enter your password" className={ s.registerField} />
                    <button type="submit" className={s.registerBtn}>Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm; 