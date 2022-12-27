import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const postcards = [
    {
        "id": "1",
        "image": "https://i.ibb.co/FVJMrXf/Front-End-Web-Development-Career-Track-Bangla-Course-Bohubrihi.jpg",
        "title": "Enthusiastically extend state1",
        "text": "Uniquely synergize global value without adaptive ideas. Enthusiastically extend state of the art potentialities before an expanded array of action items. Appropriately cultivate quality intellectual capital."
    },
    {
        "id": "1",
        "image": "https://i.ibb.co/FVJMrXf/Front-End-Web-Development-Career-Track-Bangla-Course-Bohubrihi.jpg",
        "title": "Enthusiastically extend state2",
        "text": "Uniquely synergize global value without adaptive ideas. Enthusiastically extend state of the art potentialities before an expanded array of action items. Appropriately cultivate quality intellectual capital."
    },
    {
        "id": "1",
        "image": "https://i.ibb.co/FVJMrXf/Front-End-Web-Development-Career-Track-Bangla-Course-Bohubrihi.jpg",
        "title": "Enthusiastically extend state3",
        "text": "Uniquely synergize global value without adaptive ideas. Enthusiastically extend state of the art potentialities before an expanded array of action items. Appropriately cultivate quality intellectual capital."
    },
    {
        "id": "1",
        "image": "https://i.ibb.co/FVJMrXf/Front-End-Web-Development-Career-Track-Bangla-Course-Bohubrihi.jpg",
        "title": "Enthusiastically extend state4",
        "text": "Uniquely synergize global value without adaptive ideas. Enthusiastically extend state of the art potentialities before an expanded array of action items. Appropriately cultivate quality intellectual capital."
    },
]


const PostCard = ({ user }) => {
    return (
        <>
        <h2 className='mt-10 text-2xl font-bold'>Top Post</h2>
            {
                postcards?.map(postcard => {
                    return (
                        <div key={postcard.id} className='bg-[rgb(20,66,114)] mt-6 mb-6 rounded-md p-5 shadow-xl'>
                            <div className='card flex flex-col lg:flex-row'>
                                <div className='lg:w-1/3 shadow'>
                                    <img src={postcard.image} alt='imgs' />
                                </div>
                                <div className='ml-5 text-gray-100'>
                                    <h3 className='text-3xl font-bold'>{postcard.title}</h3>
                                    <p className='mt-5 mb-5'>{postcard.text}</p>
                                    <>
                                        <Link className='bg-[#FFE500] btn-xl p-2 rounded-md font-medium hover:bg-info text-black transition-all' to=''>See Details</Link>
                                        {user?.save ?
                                            <>
                                                <FontAwesomeIcon className='pl-5' icon={faHeart} />
                                            </>
                                            :
                                            <>
                                                <Link to='/'><FontAwesomeIcon className='pl-5 cursor-pointer text-[#FFE500]' icon={faHeart} /></Link>
                                            </>}
                                    </>
                                    <span className='ml-5 cursor-pointer bg-[#FFE500] p-2 text-black rounded-md'><Link to='/'>Edit</Link></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default PostCard;