// Form management library

import { useFormik } from "formik"
import { object, ref, string } from "yup";

const Formik = () => {

    const formik = useFormik({
        initialValues:{
            name: "", 
            username: "", 
            email: "", 
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        // validate: (values) => {
        //     for(const key in values){
        //         if(values[key] == ""){
        //             return {[key]: "This field is required."}
        //         }
        //     }
        //     if(values.name.length < 3){
        //         return { name: "Name must be at least 3 characters." }
        //     }
        //     if(values.name.length > 20){
        //         return { name: "Name must be less than 20 characters." }
        //     }
        //     if(values.username.length < 4){
        //         return { username: "Username must be at least 3 characters." }
        //     }
        //     // complete the validation
        // }
        validationSchema: object().shape({
            name: string().required("This field is required.").min(4, "Name must be at least 4 characters.").max(20, "Name must be less than 20 characters."),
            username: string().required("This field is required.").min(4, "Username must be at least 4 characters.").max(20, "Username must be less than 20 characters."),
            email: string().required("This field is required.").email("Invalid email address."),
            password: string().required("This field is required.").min(8, "Password must be at least 8 characters.").max(16, "Password must be less than 16 characters."),
            confirmPassword: string().required("This field is required.").oneOf([ref("password")], "Passwords does not match.")
        })
    })

    return <div className="d-flex justify-content-center mt-3">
        <form onSubmit={formik.handleSubmit} className="w-100 d-flex gap-2 flex-column" style={{maxWidth: "400px"}}>
            <input onChange={formik.handleChange} value={formik.values.name} type="text" placeholder="Enter your name" name="name" />
            <span>{formik.errors.name}</span>
            <input onChange={formik.handleChange} value={formik.values.username} type="text" placeholder="Enter your username" name="username"/>
            <span>{formik.errors.username}</span>
            <input onChange={formik.handleChange} value={formik.values.email} type="text" placeholder="Enter your email" name="email"/>
            <span>{formik.errors.email}</span>
            <input onChange={formik.handleChange} value={formik.values.password} type="password" placeholder="Enter your password" name="password"/>
            <span>{formik.errors.password}</span>
            <input onChange={formik.handleChange} value={formik.values.confirmPassword} type="password" placeholder="Confirm your password" name="confirmPassword"/>
            <span>{formik.errors.confirmPassword}</span>
            <button type="submit" className="btn btn-success">Create Account</button>
        </form>
    </div>
}

export default Formik