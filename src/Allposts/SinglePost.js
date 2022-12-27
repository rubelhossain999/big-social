import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const singlePosts = [
    {
        "id": 1,
        "image": 'https://i.ibb.co/Fn96tVV/Graphic-Design-Fundamentals-Bangla-Online-Course-Bohubrihi.jpg',
        "title": 'Credibly parallel task timely',
        "textarea": "Credibly parallel task timely testing procedures for end-to-end niches. Progressively fabricate multimedia based opportunities and accurate leadership. Appropriately monetize wireless innovation and high standards in core. Rapidiously envisioneer user-centric materials vis-a-vis principle-centered mindshare. Completely unleash synergistic materials vis-a-vis emerging human capital. Efficiently enhance granular customer service via performance based materials. Appropriately actualize."
    }

]

const SinglePost = ({ user }) => {
    return (
        <>
            {
                singlePosts?.map(singlePost => {
                    return (
                        <div>
                            <img src={singlePost.image} alt='imgs' />
                            <h1 className='text-5xl mt-5 mb-3 font-bold'>{singlePost.title}</h1>
                            <p>{singlePost.textarea}</p>
                            <div className='bg-slate-400 p-3 mt-5 mb-5'>
                                {user?.save ?
                                    <>
                                        <FontAwesomeIcon className='' icon={faHeart} />
                                    </>
                                    :
                                    <>
                                        <Link to='/'><FontAwesomeIcon className='cursor-pointer pr-5 text-[#FFE500]' icon={faHeart} /></Link>
                                    </>}

                                <span className='text-white'>Total Comments:</span>
                            </div>
                            <>
                                <>
                                    <p>1. Credibly parallel task timely testing procedures for end-to-end niches. Progressively fabricate.</p>
                                    <p>2. Efficiently enhance granular customer service via performance based materials. Appropriately actualize.</p>
                                </>
                            </>
                            <form class="mt-12 bg-slate-400 p-10">
                                <div class="-mx-2 md:items-center md:flex ">
                                    <div class="flex-1 px-2">
                                        <label class="block mb-2 text-sm text-black ">Full Name</label>
                                        <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-black   rounded-md   text-white  focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="flex-1 px-2 mt-4 md:mt-0">
                                        <label class="block mb-2 text-sm text-black ">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-black   rounded-md   text-white  focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div class="w-full mt-4">
                                    <label class="block mb-2 text-sm text-black ">Message</label>
                                    <textarea class="block w-full h-32 px-5 py-3 mt-2  placeholder-gray-400 bg-black   rounded-md md:h-56   text-white  focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#144272] rounded-md hover:bg-[#144276] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Comment Submit
                                </button>
                            </form>
                        </div>
                    )
                })
            }
        </>
    );
};

export default SinglePost;