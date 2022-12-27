import React from 'react';
import { Link } from 'react-router-dom';

const slidercontents = [
    {
        "title": "12+ Millions of people",
        "textArea": "Globally enable reliable services for strategic sources. Collaboratively procrastinate client-centered quality vectors after professional manufactured products.",
        "button": 'See All Post',
        "buttonURL": '/all-post'
    }
]

const Hero = () => {
    return (
        <div className="hero rounded-lg lg:min-h-[400px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                {
                    slidercontents?.map(slidercontent => {
                        return (
                            <div className="max-w-md text-white">
                                <h1 className="mb-5 text-4xl font-bold">{slidercontent.title}</h1>
                                <p className="mb-5">{slidercontent.textArea}</p>
                                <Link to={slidercontent.buttonURL}><button className="bg-[#FFE500] btn-xl p-2 rounded-md font-medium hover:bg-info text-black">{slidercontent.button}</button></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Hero;