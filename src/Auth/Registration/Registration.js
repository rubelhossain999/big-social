import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../ContextAPI/ContextAPI';

const Registration = () => {
    const createUser = useContext(AuthContext);
    const imgbbAPI = process.env.REACT_APP_ibbimage_KEY;


    const hadleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;

        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;

        // Image loading process
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbAPI}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
        })


        const userInfo = {
            fullname,
            email,
            password,
            userRole: "user"
        };


    }
    return (
        <section className="mt-16 mb-16">
            <div className="container">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            alt=""
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={hadleRegistration} class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input
                                type="file"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="image"
                                placeholder="Confirm Password" />

                            <div className="flex justify-between items-center mb-6">
                                <Link
                                    to="/login"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Login</Link>
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-[#FFE500] text-black hover:text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#144272] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#144272] active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Registration;