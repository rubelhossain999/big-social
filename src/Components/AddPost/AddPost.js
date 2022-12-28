import React from 'react';
import AboutMe from '../About/AboutMe';

const AddPost = () => {
    return (
        <div className='lg:flex text-white mt-10 mb-10'>
            <AboutMe />
            <div className='bg-[#144272] p-4 rounded-lg lg:ml-10'>
                <form>
                    <>
                        <span>Post title:</span>
                        <input type="text" placeholder="Here post title" className="input mt-2 mb-5  input-bordered input-primary w-full max-w-full rounded-md" />
                    </>
                    <>
                        <span>Description:</span>
                        <textarea className="input mt-2 mb-5  input-bordered input-primary w-full max-w-full rounded-md" placeholder="Type here your post description"></textarea>
                    </>
                    <>
                        <span>Post Image:</span>
                        <input type="file" className="input mt-2 mb-5 pt-2  input-bordered input-primary w-full max-w-full rounded-md" />
                    </>
                    <>
                        <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-[#FFE500] rounded-md hover:bg-[#0f2a16] hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Comment Submit
                        </button>
                    </>
                </form>
            </div>
        </div>
    );
};

export default AddPost;