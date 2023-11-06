import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-blue-200 rounded p-8 shadow-lg">
                <h2 className="text-3xl my-4 text-center font-bold text-black">
                    Login to your account
                </h2>
                <form onSubmit={handleLogin} className="w-72 mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input type="email" name="email" placeholder="Email" className="block w-full mt-1 py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="block w-full mt-1 py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:outline-none"
                            required />
                        <div className="mt-2">
                            <Link
                                to="#"
                                className="text-blue-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button className="block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center my-4">
                    <button onClick={googleSignUp} className="btn text-black">Google</button>
                </div>
                {
                    succes && <p className="text-blue-500">{succes}</p>
                }
                <div className="text-center">
                    <p>
                        Do not have an account?{" "}
                        <Link className="text-blue-600" to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;