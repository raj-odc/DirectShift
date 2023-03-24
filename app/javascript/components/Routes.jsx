import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Header from './Header';
import Login from './Login';


import UserContext from '../contexts/user.context'


const RouteComponent = () => {
    const [user, currentUser] = useContext(UserContext);

	return (
        <>
        <Header/>
        <Routes>
            <Route path='/' exact element={user ? <Dashboard /> : <Login/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
        </>
		
	);
};

export default RouteComponent;