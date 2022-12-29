import React from 'react';
import AboutMe from '../About/AboutMe';

const AddPost = () => {
    const handleAddPost = e => {
        e.preventDefault();
        const imgbbAPI = process.env.REACT_APP_ibbimage_KEY;

        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        // Image Upload
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbAPI}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const addPost = {
                    title,
                    description,
                    image: data.data.url
                }
                
                fetch('http://localhost:5000/addpost', {
                    method: "POST",
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(addPost)
                })
                .then( res => res.json())
                .then( data => {
                    console.log(data);
                })
            })

    }
    return (
        <div className='lg:flex text-white mt-10 mb-10'>
            <AboutMe />
            <div className='bg-[#144272] p-4 rounded-lg lg:ml-10'>
                <form onSubmit={handleAddPost}>
                    <>
                        <span>Post title:</span>
                        <input type="text" placeholder="Here post title" name='title' className="text-black input mt-2 mb-5  input-bordered input-primary w-full max-w-full rounded-md" />
                    </>
                    <>
                        <span>Description:</span>
                        <textarea name='description' className="input mt-2 mb-5  input-bordered input-primary w-full max-w-full rounded-md text-black" placeholder="Type here your post description"></textarea>
                    </>
                    <>
                        <span>Post Image:</span>
                        <input type="file" name='image' className="text-black input mt-2 mb-5 pt-2  input-bordered input-primary w-full max-w-full rounded-md" />
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