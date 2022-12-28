import AboutMe from './AboutMe';
import MyPosts from './MyPosts';



const About = () => {
    return (
        <div className='lg:flex text-white mt-10 mb-10'>
            <AboutMe />
            <div className='bg-[#144272] p-4 rounded-lg ml-10'>
                <MyPosts />
            </div>
        </div>
    );
};

export default About;