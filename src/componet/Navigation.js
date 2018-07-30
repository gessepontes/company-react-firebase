import React from 'react';
import { Link } from 'react-router-dom'

import SignOutButton from './Admin/SignOutButton'

const Navigation = ({ authUser }) =>
    <div>
        {authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <ul className='list-unstyled'>
        <li><Link className='text-white' to='/'>Home</Link></li>
        <li><Link className='text-white' to='/service'>Serviços</Link></li>
        <li><Link className='text-white' to='/admin'>Admin</Link></li>
        <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul className='list-unstyled'>
        <li><Link className='text-white' to='/'>Home</Link></li>
        <li><Link className='text-white' to='/service'>Serviços</Link></li>
        <li><Link className='text-white' to='/admin'>Admin</Link></li>
    </ul>


export default Navigation;