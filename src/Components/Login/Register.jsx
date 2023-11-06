
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [succes, setSucces] = useState('')
    const { createUser } = useContext(authContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)
        //  clear the reset error here 
        setRegisterError('')
        setSucces('')
        // password validation 
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setRegisterError('Password should be at least 6 characters long and contain at least one letter, one number, and one special character.');
            return;
        }
        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSucces('user created successfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);

            })

    }
    return (
        <div>
            <h2 className="text-3xl my-10 text-center font-bold text-black">Register Your Account</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg: w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Your Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Your photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">Register</button>
                </div>
            </form>
            <div className="text-center mt-4 ">
                <p>Already Have an Account?
                    <Link className="text-blue-600" to='/login'>Login</Link>
                </p>
                <div className="text-center text-red-500">
                    {
                        registerError && <p>{registerError} </p>

                    }
                    {
                        succes && <p className="text-green-600">{succes}</p>
                    }
                </div>
            </div>

        </div>
    );

};

export default Register;
