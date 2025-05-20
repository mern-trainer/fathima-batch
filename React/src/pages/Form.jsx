import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {

    const [formData, setFormData] = useState({
        name: "", 
        username: "", 
        email: "", 
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        for(const key in formData){
            if(formData[key] == ""){
                return toast.error("Please fill in all fields")
            }
        }
        if(formData.name.length < 3 || formData.name.length > 18){
            return toast.error("Name must be between 3 and 18 characters")
        }
        // completed the validation
        return toast.success("Account created successfully")
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    return <div className="d-flex justify-content-center mt-3">
        <form onSubmit={handleSubmit} className="w-100 d-flex gap-2 flex-column" style={{maxWidth: "400px"}}>
            <input onChange={handleChange} value={formData.name} type="text" placeholder="Enter your name" name="name" />
            <input onChange={handleChange} value={formData.username} type="text" placeholder="Enter your username" name="username"/>
            <input onChange={handleChange} value={formData.email} type="text" placeholder="Enter your email" name="email"/>
            <input onChange={handleChange} value={formData.password} type="text" placeholder="Enter your password" name="password"/>
            <input onChange={handleChange} value={formData.confirmPassword} type="password" placeholder="Confirm your password" name="confirmPassword"/>
            <button type="submit" className="btn btn-success">Create Account</button>
        </form>
    </div>
}

export default Form