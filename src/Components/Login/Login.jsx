import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authContext } from "../../AuthProvider/AuthProvider";
import app from "../../Firebase/Firebase.config";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login page location', location)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const googleSignUp = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                // navigate after login the user 
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
            })
    }


    const { login } = useContext(authContext)
    const [succes, setSucces] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        // login user 
        login(email, password)
            .then(result => {
                console.log(result.user)
                setSucces('User login successfully')
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div className="bg-slate-200 rounded">
            <h2 className="text-3xl my-10 text-center font-bold text-black">Login to your account </h2>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">Login</button>
                </div>
            </form>
            <div className="text-center mx-auto my-6">
                <button onClick={googleSignUp} className="btn text-black">
                    <FaGoogle></FaGoogle>
                    Google</button>
                <button onClick={googleSignUp} className="btn ml-2 text-black">
                    <FaGithub></FaGithub>
                    Github</button>
            </div>
            <div className="text-center mx-auto">
                {
                    succes && <p className="text-blue-500">{succes}</p>
                }
            </div>
            <div className="text-center mt-4 ">
                <p>Do Not Have An Account?
                    <Link className="text-blue-600" to='/Register'>Register</Link>
                </p>
            </div>

        </div>
    );
};
export default Login;