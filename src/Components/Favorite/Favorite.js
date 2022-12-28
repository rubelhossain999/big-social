import React from 'react';
import { Link } from 'react-router-dom';

const favoritepost = [
    {
        "id": "1",
        "image": "https://i.ibb.co/FVJMrXf/Front-End-Web-Development-Career-Track-Bangla-Course-Bohubrihi.jpg",
        "title": "Enthusiastically extend state1",
        "text": "Uniquely synergize global value without adaptive ideas. Enthusiastically extend state of the art potentialities before an expanded array of action items. Appropriately cultivate quality intellectual capital."
    }
]

const Favorite = () => {
    return (
        <>
            <h2 className='mt-10 text-2xl font-bold'>Favorite Post</h2>
            {
                favoritepost?.map(favorite => {
                    return (
                        <div key={favorite.id} className='bg-[rgb(20,66,114)] mt-6 mb-6 rounded-md p-5 shadow-xl'>
                            <div className='card flex flex-col lg:flex-row'>
                                <div className='lg:w-1/3 shadow'>
                                    <img src={favorite.image} alt='imgs' />
                                </div>
                                <div className='ml-5 text-gray-100'>
                                    <h3 className='text-3xl font-bold'>{favorite.title}</h3>
                                    <p className='mt-5 mb-5'>{favorite.text}</p>
                                    <>
                                        <Link className='bg-[#FFE500] btn-xl p-2 rounded-md font-medium hover:bg-info text-black transition-all' to='/single-post'>See Details</Link>
                                    </>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Favorite;