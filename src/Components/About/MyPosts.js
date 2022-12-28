import React from 'react';
import { Link } from 'react-router-dom';
const Userabouts = [
    {
        "title": "Assertively deploy cross-platform functionalities1",
        "textarea": "Assertively deploy cross-platform functionalities vis-a-vis diverse models. Uniquely mesh worldwide experiences rather than business e-services. Rapidiously foster ethical leadership and error-free relationships. Globally leverage other's ethical."
    },
    {
        "title": "Assertively deploy cross-platform functionalities2",
        "textarea": "Assertively deploy cross-platform functionalities vis-a-vis diverse models. Uniquely mesh worldwide experiences rather than business e-services. Rapidiously foster ethical leadership and error-free relationships. Globally leverage other's ethical."
    },
    {
        "title": "Assertively deploy cross-platform functionalities3",
        "textarea": "Assertively deploy cross-platform functionalities vis-a-vis diverse models. Uniquely mesh worldwide experiences rather than business e-services. Rapidiously foster ethical leadership and error-free relationships. Globally leverage other's ethical."
    },
    {
        "title": "Assertively deploy cross-platform functionalities4",
        "textarea": "Assertively deploy cross-platform functionalities vis-a-vis diverse models. Uniquely mesh worldwide experiences rather than business e-services. Rapidiously foster ethical leadership and error-free relationships. Globally leverage other's ethical."
    },
]

const MyPosts = () => {
    return (
        <div>
            {
                Userabouts?.map(about => {
                    return (
                        <>
                            <h2 className='text-2xl mb-2 mt-3'>{about.title}</h2>
                            <p className='mb-5 '>{about.textarea}</p>
                            <span className=' cursor-pointer bg-[#FFE500] p-2 text-black rounded-md'><Link to='/'>Edit</Link></span>
                        </>
                    )
                })
            }
        </div>
    );
};

export default MyPosts;