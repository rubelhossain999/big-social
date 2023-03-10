import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../ContextAPI/ContextAPI';
import HeaderMenu from '../Menus/HeaderMenu';

const Header = () => {
    const user = useContext(AuthContext);
    return (
        <div className="bg-[#144272] text-[#fff]">
            <div className='navbar lg:w-[1280px] m-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#144272] rounded-box w-52">
                            <HeaderMenu />
                        </ul>
                    </div>
                    <Link className='text-2xl ' to='/'>
                        BIG <span className='font-extrabold text-[#FFE500]'>SOCIAL</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <HeaderMenu />
                    </ul>
                </div>
                {/* User avatar Are */}
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#144272] rounded-box w-52">
                                    <li><Link to="/about">Profile</Link></li>
                                    <li><Link to="/">Logout</Link></li>
                                </ul>
                            </div>
                        </>
                        :
                        <div className='uppercase text-[#FFE500] font-bold'>
                            <Link className='pr-5' to='/login'>LOGIN</Link>
                        </div>}

                </div>
            </div>
        </div>
    );
};

export default Header;