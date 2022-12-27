import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
    {
        "id": 1,
        "name": "HOME",
        "link": '/'
    },
    {
        "id": 2,
        "name": "ABOUT",
        "link": '/about'
    },
    {
        "id": 3,
        "name": "Favorite Post",
        "link": '/favorite-post'
    },
    {
        "id": 4,
        "name": "Add POST",
        "link": '/add-post'
    },
    {
        "id": 5,
        "name": "All POSTS",
        "link": '/all-post'
    },
]

const HeaderMenu = () => {
    return (
        <>
            {
                menus?.map(menu => {
                    return (
                        <li key={menu.id}><Link className='uppercase' to={menu.link}>{menu.name}</Link></li>
                    )
                })
            }
        </>
    );
};

export default HeaderMenu;