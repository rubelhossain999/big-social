import React from 'react';

const About = () => {
    return (
        <div className='lg:flex text-white mt-10 mb-10'>
            <div className='bg-[#144272] p-4 rounded-lg'>
                <p className='text-base font-bold text-[#FFE500] mb-10'>MD: RUBEL HOSSAIN</p>
                <p>My Total Post: 2</p>

                <p className='font-bold mb-2 mt-6'>Personal Info:</p>
                <p><span className='font-bold'>Name:</span> Rubel Hossain</p>
                <p><span className='font-bold'>Email:</span> rubel@gmail.com</p>
                <p><span className='font-bold'>University:</span>: rubel@gmail.com</p>
                <p><span className='font-bold'>Address:</span>: Jhenaidah, Hamdoh, Jhenaidah</p>
                <p className='cursor-pointer bg-[#FFE500] p-1 text-black rounded-md text-center mt-5 uppercase font-bold'>Edit My Info</p>

            </div>
            <div className='bg-[#144272] p-4 rounded-lg ml-10'>
                <h2 className='text-2xl mb-3'>Assertively deploy cross-platform functionalities</h2>
                <p>Assertively deploy cross-platform functionalities vis-a-vis diverse models. Uniquely mesh worldwide experiences rather than business e-services. Rapidiously foster ethical leadership and error-free relationships. Globally leverage other's ethical.</p>
            </div>
        </div>
    );
};

export default About;